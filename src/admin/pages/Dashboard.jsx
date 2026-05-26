import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { adminQueries } from "../../lib/api";

export default function Dashboard() {
  const [overview, setOverview] = useState(null);
  const [topProducts, setTopProducts] = useState([]);
  const [byDevice, setByDevice] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      adminQueries.analyticsOverview(30),
      adminQueries.topProducts(30, 5),
      adminQueries.byDevice(30),
    ])
      .then(([o, p, d]) => { setOverview(o); setTopProducts(p); setByDevice(d); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="font-display text-3xl text-clay-700">Dashboard</h1>
      <p className="mt-1 text-sm text-clay-500">Last 30 days</p>

      {error && <div className="mt-6 text-sm text-spice-600">{error}</div>}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi label="Revenue" value={loading ? "…" : `₹${Number(overview?.revenue ?? 0).toFixed(0)}`} />
        <Kpi label="Orders" value={loading ? "…" : overview?.orders_total ?? 0} />
        <Kpi label="Paid" value={loading ? "…" : overview?.orders_paid ?? 0} />
        <Kpi label="Awaiting dispatch" value={loading ? "…" : overview?.pending_dispatch ?? 0} highlight />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Top products">
          {topProducts.length === 0 ? (
            <div className="text-sm text-clay-400">No paid orders yet.</div>
          ) : (
            <ul className="space-y-3">
              {topProducts.map((p) => (
                <li key={p.product_id} className="flex items-center justify-between text-sm">
                  <span className="text-clay-700">{p.product_name}</span>
                  <span className="text-clay-500">{p.qty} sold · ₹{Number(p.revenue).toFixed(0)}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Order source">
          {byDevice.length === 0 ? (
            <div className="text-sm text-clay-400">No data yet.</div>
          ) : (
            <ul className="space-y-3">
              {byDevice.map((d) => (
                <li key={d.device} className="flex items-center justify-between text-sm">
                  <span className="text-clay-700 capitalize">{d.device}</span>
                  <span className="text-clay-500">{d.orders} order(s)</span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>

      <div className="mt-8">
        <Link to="/admin/orders" className="text-sm font-medium text-spice-500 hover:text-spice-600">
          See all orders →
        </Link>
      </div>
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

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-clay-100 bg-white p-6 shadow-soft">
      <h2 className="font-display text-xl text-clay-700">{title}</h2>
      <div className="mt-5">{children}</div>
    </div>
  );
}
