import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Save } from "lucide-react";
import { adminQueries, api } from "../../lib/api";
import { StatusBadge, labelFor } from "./Orders";

const STATUSES = [
  "PAID", "ACCEPTED", "PREPARING", "READY_TO_DISPATCH",
  "SHIPPED", "DELIVERED", "CANCELLED", "REFUNDED",
];

export default function OrderDetail() {
  const { orderNo } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [newStatus, setNewStatus] = useState("");
  const [note, setNote] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState(null);
  const [savedAt, setSavedAt] = useState(null);

  const load = async () => {
    setLoading(true);
    try {
      const data = await adminQueries.getOrder(orderNo);
      setOrder(data);
      setNewStatus(data.status);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [orderNo]);

  const updateStatus = async () => {
    setSaveError(null);
    setSaving(true);
    try {
      await api.admin.updateOrderStatus({ orderNo, status: newStatus, note: note || undefined });
      setNote("");
      setSavedAt(new Date());
      await load();
    } catch (e) {
      setSaveError(e.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="text-sm text-clay-400">Loading…</div>;
  if (error) return <div className="text-sm text-spice-600">{error}</div>;
  if (!order) return null;

  const timeline = [...(order.order_status_history ?? [])]
    .sort((a, b) => new Date(a.changed_at) - new Date(b.changed_at));

  return (
    <div>
      <Link to="/admin/orders" className="inline-flex items-center gap-1 text-sm text-clay-500 hover:text-clay-700">
        <ChevronLeft size={14} /> Back to orders
      </Link>

      <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest text-clay-400">Order</div>
          <h1 className="font-mono text-3xl text-clay-700">{order.order_no}</h1>
        </div>
        <StatusBadge status={order.status} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          {/* Items */}
          <Card title="Items">
            <ul className="divide-y divide-clay-100">
              {order.order_item?.map((it) => (
                <li key={it.product_id + it.size_label} className="flex items-center gap-4 py-3">
                  {it.image && <img src={it.image} alt="" className="h-14 w-14 rounded-lg object-cover" />}
                  <div className="flex-1">
                    <div className="font-medium text-clay-700">{it.product_name}</div>
                    <div className="text-xs text-clay-400">{it.size_label} · Qty {it.qty} · ₹{Number(it.unit_price).toFixed(0)} ea</div>
                  </div>
                  <div className="text-sm font-medium text-clay-700">₹{Number(it.line_total).toFixed(0)}</div>
                </li>
              ))}
            </ul>
            <dl className="mt-5 space-y-2 border-t border-clay-100 pt-5 text-sm">
              <Row label="Subtotal" value={`₹${Number(order.subtotal).toFixed(0)}`} />
              <Row label="Shipping" value={Number(order.shipping) === 0
                ? <span className="text-leaf-500 font-medium">Free</span>
                : `₹${Number(order.shipping).toFixed(0)}`} />
              <Row label="Total" value={<strong>₹{Number(order.total).toFixed(0)}</strong>} />
            </dl>
          </Card>

          {/* Timeline */}
          <Card title="Status timeline">
            <ol className="space-y-3">
              {timeline.map((e, idx) => (
                <li key={idx} className="flex gap-3 text-sm">
                  <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-spice-500" />
                  <div className="flex-1">
                    <div className="text-clay-700">
                      {e.from_status && <span className="text-clay-400">{labelFor(e.from_status)} → </span>}
                      <strong>{labelFor(e.to_status)}</strong>
                    </div>
                    {e.note && <div className="mt-0.5 text-xs text-clay-500">{e.note}</div>}
                    <div className="mt-0.5 text-xs text-clay-400">
                      {new Date(e.changed_at).toLocaleString()} · {e.changed_by ?? "system"}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </Card>
        </div>

        <div className="space-y-6">
          {/* Status updater */}
          <Card title="Update status">
            <div className="space-y-3">
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="w-full rounded-full border border-clay-200 bg-cream/40 px-4 py-3 text-sm"
              >
                {STATUSES.map((s) => <option key={s} value={s}>{labelFor(s)}</option>)}
              </select>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Optional note (sent in email to customer)"
                rows={3}
                className="w-full rounded-2xl border border-clay-200 bg-cream/40 px-4 py-3 text-sm focus:border-spice-500 focus:outline-none"
              />
              {saveError && <div className="text-xs text-spice-600">{saveError}</div>}
              {savedAt && <div className="text-xs text-leaf-600">Updated · email sent</div>}
              <button
                onClick={updateStatus}
                disabled={saving || newStatus === order.status}
                className="btn-primary w-full disabled:opacity-60"
              >
                <Save size={16} /> {saving ? "Saving…" : "Save & email customer"}
              </button>
            </div>
          </Card>

          {/* Customer */}
          <Card title="Customer">
            <div className="space-y-1 text-sm">
              <div className="font-medium text-clay-700">{order.customer?.name ?? "—"}</div>
              <div className="text-clay-500">{order.customer?.phone}</div>
              <div className="text-clay-500">{order.customer?.email}</div>
            </div>
          </Card>

          {/* Shipping address */}
          <Card title="Shipping address">
            <div className="text-sm leading-relaxed text-clay-700">
              {order.address?.address_line}<br />
              {order.address?.city}, {order.address?.state} – {order.address?.pincode}
            </div>
          </Card>

          {/* Device + payment */}
          <Card title="Source & payment">
            <dl className="space-y-2 text-sm">
              <Row label="Device" value={<span className="capitalize">{order.device_type ?? "—"}</span>} />
              <Row label="OS" value={order.device_os ?? "—"} />
              <Row label="Browser" value={order.browser ?? "—"} />
              <Row label="Payment status" value={order.payment_status} />
              <Row label="Razorpay order" value={<span className="font-mono text-xs">{order.razorpay_order_id ?? "—"}</span>} />
              <Row label="Razorpay payment" value={<span className="font-mono text-xs">{order.razorpay_payment_id ?? "—"}</span>} />
            </dl>
          </Card>

          {order.notes && (
            <Card title="Customer note">
              <div className="text-sm text-clay-700 whitespace-pre-line">{order.notes}</div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-clay-100 bg-white p-6 shadow-soft">
      <h2 className="font-display text-lg text-clay-700">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-clay-500">{label}</dt>
      <dd className="text-right text-clay-700">{value}</dd>
    </div>
  );
}
