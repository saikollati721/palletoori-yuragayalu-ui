import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { adminQueries } from "../../lib/api";

const STATUSES = [
  "PENDING_PAYMENT", "PAID", "ACCEPTED", "PREPARING",
  "READY_TO_DISPATCH", "SHIPPED", "DELIVERED", "CANCELLED", "REFUNDED",
];

export default function Orders() {
  const [statusFilter, setStatusFilter] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    adminQueries.listOrders({ status: statusFilter || undefined })
      .then(setOrders)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [statusFilter]);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-clay-700">Orders</h1>
          <p className="mt-1 text-sm text-clay-500">All orders, newest first</p>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-clay-400">Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="mt-2 block rounded-full border border-clay-200 bg-white px-4 py-2 text-sm"
          >
            <option value="">All</option>
            {STATUSES.map((s) => <option key={s} value={s}>{labelFor(s)}</option>)}
          </select>
        </div>
      </div>

      {error && <div className="mt-6 text-sm text-spice-600">{error}</div>}

      <div className="mt-8 overflow-hidden rounded-2xl border border-clay-100 bg-white shadow-soft">
        <table className="w-full text-left text-sm">
          <thead className="bg-clay-50 text-xs uppercase tracking-wider text-clay-500">
            <tr>
              <Th>Order</Th>
              <Th>Customer</Th>
              <Th>Ship to</Th>
              <Th>Total</Th>
              <Th>Device</Th>
              <Th>Status</Th>
              <Th>Created</Th>
            </tr>
          </thead>
          <tbody className="divide-y divide-clay-100">
            {loading && (
              <tr><td colSpan={7} className="px-5 py-10 text-center text-clay-400">Loading…</td></tr>
            )}
            {!loading && orders.length === 0 && (
              <tr><td colSpan={7} className="px-5 py-10 text-center text-clay-400">No orders yet.</td></tr>
            )}
            {orders.map((o) => (
              <tr key={o.id} className="transition hover:bg-clay-50/60">
                <Td>
                  <Link to={`/admin/orders/${o.order_no}`} className="font-mono font-medium text-spice-500 hover:text-spice-600">
                    {o.order_no}
                  </Link>
                </Td>
                <Td>
                  <div className="text-clay-700">{o.customer?.name ?? "—"}</div>
                  <div className="text-xs text-clay-400">{o.customer?.phone}</div>
                </Td>
                <Td>
                  <div className="text-clay-700">{o.address?.city}, {o.address?.state}</div>
                  <div className="text-xs text-clay-400">{o.address?.pincode}</div>
                </Td>
                <Td className="font-medium text-clay-700">₹{Number(o.total).toFixed(0)}</Td>
                <Td className="capitalize text-clay-600">{o.device_type ?? "—"}</Td>
                <Td><StatusBadge status={o.status} /></Td>
                <Td className="text-clay-500">{new Date(o.created_at).toLocaleDateString()}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Th({ children }) { return <th className="px-5 py-3">{children}</th>; }
function Td({ children, className = "" }) {
  return <td className={`px-5 py-4 ${className}`}>{children}</td>;
}

export function StatusBadge({ status }) {
  const cls = {
    PENDING_PAYMENT: "bg-clay-100 text-clay-600",
    PAID: "bg-leaf-500/15 text-leaf-600",
    ACCEPTED: "bg-leaf-500/20 text-leaf-600",
    PREPARING: "bg-spice-500/15 text-spice-600",
    READY_TO_DISPATCH: "bg-spice-500/20 text-spice-600",
    SHIPPED: "bg-clay-700 text-white",
    DELIVERED: "bg-leaf-600 text-white",
    CANCELLED: "bg-clay-200 text-clay-700",
    REFUNDED: "bg-clay-200 text-clay-700",
  }[status] ?? "bg-clay-100 text-clay-600";
  return (
    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${cls}`}>
      {labelFor(status)}
    </span>
  );
}

export function labelFor(s) {
  return {
    PENDING_PAYMENT: "Awaiting payment",
    PAID: "Paid",
    ACCEPTED: "Accepted",
    PREPARING: "Preparing",
    READY_TO_DISPATCH: "Ready to dispatch",
    SHIPPED: "Shipped",
    DELIVERED: "Delivered",
    CANCELLED: "Cancelled",
    REFUNDED: "Refunded",
  }[s] ?? s;
}
