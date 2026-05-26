import { useEffect, useState } from "react";
import { adminQueries } from "../../lib/api";

const RANGES = [
  { label: "7 days", value: 7 },
  { label: "30 days", value: 30 },
  { label: "90 days", value: 90 },
];

export default function Analytics() {
  const [days, setDays] = useState(30);
  const [overview, setOverview] = useState(null);
  const [top, setTop] = useState([]);
  const [byState, setByState] = useState([]);
  const [byDevice, setByDevice] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      adminQueries.analyticsOverview(days),
      adminQueries.topProducts(days, 10),
      adminQueries.byState(days),
      adminQueries.byDevice(days),
    ])
      .then(([o, p, s, d]) => { setOverview(o); setTop(p); setByState(s); setByDevice(d); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [days]);

  const totalDeviceOrders = byDevice.reduce((n, d) => n + Number(d.orders), 0) || 1;

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-clay-700">Analytics</h1>
          <p className="mt-1 text-sm text-clay-500">Sales, devices and geography</p>
        </div>
        <div className="inline-flex rounded-full border border-clay-200 bg-white p-1 text-sm">
          {RANGES.map((r) => (
            <button
              key={r.value}
              onClick={() => setDays(r.value)}
              className={`rounded-full px-4 py-1.5 font-medium transition ${
                days === r.value ? "bg-spice-500 text-white" : "text-clay-600 hover:bg-clay-50"
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {error && <div className="mt-6 text-sm text-spice-600">{error}</div>}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi label="Revenue" value={loading ? "…" : `₹${Number(overview?.revenue ?? 0).toFixed(0)}`} />
        <Kpi label="Orders" value={loading ? "…" : overview?.orders_total ?? 0} />
        <Kpi label="Paid" value={loading ? "…" : overview?.orders_paid ?? 0} />
        <Kpi label="Awaiting dispatch" value={loading ? "…" : overview?.pending_dispatch ?? 0} highlight />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Top products">
          {top.length === 0 ? (
            <Empty />
          ) : (
            <ul className="space-y-4">
              {top.map((p) => {
                const max = Number(top[0].qty) || 1;
                const pct = (Number(p.qty) / max) * 100;
                return (
                  <li key={p.product_id}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-clay-700">{p.product_name}</span>
                      <span className="text-clay-500">{p.qty} · ₹{Number(p.revenue).toFixed(0)}</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-clay-100">
                      <div className="h-full rounded-full bg-spice-500" style={{ width: `${pct}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </Card>

        <Card title="Order source">
          {byDevice.length === 0 ? (
            <Empty />
          ) : (
            <ul className="space-y-4">
              {byDevice.map((d) => {
                const pct = (Number(d.orders) / totalDeviceOrders) * 100;
                return (
                  <li key={d.device}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="capitalize text-clay-700">{d.device}</span>
                      <span className="text-clay-500">{d.orders} · {pct.toFixed(0)}%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-clay-100">
                      <div className="h-full rounded-full bg-leaf-500" style={{ width: `${pct}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </Card>
      </div>

      <Card title="Revenue by state" className="mt-6">
        {byState.length === 0 ? (
          <Empty />
        ) : (
          <div className="overflow-hidden rounded-xl border border-clay-100">
            <table className="w-full text-left text-sm">
              <thead className="bg-clay-50 text-xs uppercase tracking-wider text-clay-500">
                <tr>
                  <th className="px-4 py-2">State</th>
                  <th className="px-4 py-2">Orders</th>
                  <th className="px-4 py-2 text-right">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-clay-100">
                {byState.map((s) => (
                  <tr key={s.state}>
                    <td className="px-4 py-2.5 text-clay-700">{s.state}</td>
                    <td className="px-4 py-2.5 text-clay-500">{s.orders}</td>
                    <td className="px-4 py-2.5 text-right font-medium text-clay-700">
                      ₹{Number(s.revenue).toFixed(0)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      <p className="mt-8 text-xs text-clay-400">
        India choropleth map coming soon — left as a follow-up to keep the bundle lean.
      </p>
    </div>
  );
}

function Kpi({ label, value, highlight }) {
  return (
    <div className={`rounded-2xl border p-5 ${highlight ? "border-spice-500/30 bg-spice-500/5" : "border-clay-100 bg-white"} shadow-soft`}>
      <div className="text-xs uppercase tracking-widest text-clay-400">{label}</div>
      <div className={`mt-2 font-display text-3xl ${highlight ? "text-spice-600" : "text-clay-700"}`}>{value}</div>
    </div>
  );
}

function Card({ title, children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-clay-100 bg-white p-6 shadow-soft ${className}`}>
      <h2 className="font-display text-lg text-clay-700">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Empty() {
  return <div className="text-sm text-clay-400">No data in this range.</div>;
}
