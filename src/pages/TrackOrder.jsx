import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, Check, Package, Truck, Home, X } from "lucide-react";
import { api } from "../lib/api";
import Seo from "../components/seo/Seo";

const STATUS_ORDER = [
  "PAID", "ACCEPTED", "PREPARING", "READY_TO_DISPATCH", "SHIPPED", "DELIVERED",
];

const STATUS_ICONS = {
  PAID: Check,
  ACCEPTED: Check,
  PREPARING: Package,
  READY_TO_DISPATCH: Package,
  SHIPPED: Truck,
  DELIVERED: Home,
};

export default function TrackOrder() {
  const [params, setParams] = useSearchParams();
  const [orderNo, setOrderNo] = useState(params.get("orderNo") ?? "");
  const [phone, setPhone] = useState(params.get("phone") ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);

  const lookup = async (e) => {
    if (e) e.preventDefault();
    setError(null);
    if (!orderNo.trim() || !/^[6-9]\d{9}$/.test(phone.trim())) {
      setError("Please enter your order number and 10-digit mobile.");
      return;
    }
    setLoading(true);
    try {
      const result = await api.trackOrder({ orderNo: orderNo.trim(), phone: phone.trim() });
      setOrder(result);
      setParams({ orderNo: orderNo.trim(), phone: phone.trim() });
    } catch (e) {
      setOrder(null);
      setError(e.status === 404 ? "We couldn't find that order. Check the number and mobile." : e.message);
    } finally {
      setLoading(false);
    }
  };

  // Auto-lookup if both are present in URL
  useEffect(() => {
    if (params.get("orderNo") && params.get("phone") && !order && !loading) {
      lookup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-16">
      <Seo
        pathname="/track/"
        title="Track Your Order"
        description="Track your Palletoori Vuragayalu order — enter your order number and the mobile number used at checkout."
        noindex
      />
      <div className="container-x max-w-3xl">
        <h1 className="text-3xl text-clay-700 sm:text-4xl">Track your order</h1>
        <p className="mt-2 text-clay-500">Enter your order number and the mobile number used at checkout.</p>

        <form onSubmit={lookup} className="mt-8 rounded-2xl border border-clay-100 bg-white p-6 shadow-soft">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_1fr_auto]">
            <input
              value={orderNo}
              onChange={(e) => setOrderNo(e.target.value)}
              placeholder="PAL-202605-0001"
              className="w-full rounded-full border border-clay-200 bg-cream/40 px-4 py-3 text-sm focus:border-spice-500 focus:outline-none"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="9876543210"
              inputMode="numeric"
              className="w-full rounded-full border border-clay-200 bg-cream/40 px-4 py-3 text-sm focus:border-spice-500 focus:outline-none"
            />
            <button type="submit" disabled={loading} className="btn-primary disabled:opacity-60">
              <Search size={16} /> {loading ? "Looking up..." : "Track"}
            </button>
          </div>
          {error && (
            <div className="mt-4 flex items-center gap-2 text-sm text-spice-600">
              <X size={14} /> {error}
            </div>
          )}
        </form>

        {order && <OrderTimeline order={order} />}
      </div>
    </section>
  );
}

function OrderTimeline({ order }) {
  const isCancelled = order.status === "CANCELLED" || order.status === "REFUNDED";
  const currentIdx = STATUS_ORDER.indexOf(order.status);

  return (
    <div className="mt-10 rounded-2xl border border-clay-100 bg-white p-6 shadow-soft sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <div className="text-xs uppercase tracking-widest text-clay-400">Order</div>
          <div className="font-mono text-lg text-clay-700">{order.orderNo}</div>
        </div>
        <div className="rounded-full bg-spice-500/10 px-4 py-1 text-sm font-medium text-spice-600">
          {order.statusLabel}
        </div>
      </div>

      {!isCancelled && (
        <div className="mt-8">
          <div className="flex justify-between">
            {STATUS_ORDER.map((s, i) => {
              const Icon = STATUS_ICONS[s];
              const reached = currentIdx >= i;
              return (
                <div key={s} className="flex flex-1 flex-col items-center text-center">
                  <div className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    reached ? "border-leaf-500 bg-leaf-500 text-white"
                            : "border-clay-200 bg-cream text-clay-300"
                  }`}>
                    <Icon size={16} />
                  </div>
                  <div className={`mt-2 max-w-[80px] text-[11px] uppercase tracking-wider ${
                    reached ? "text-clay-700" : "text-clay-400"
                  }`}>
                    {labelFor(s)}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative -mt-[44px] mb-9 mx-5 h-[2px] bg-clay-100">
            <div className="h-full bg-leaf-500" style={{
              width: `${Math.max(0, currentIdx) / (STATUS_ORDER.length - 1) * 100}%`,
            }} />
          </div>
        </div>
      )}

      {isCancelled && (
        <div className="mt-6 rounded-2xl bg-clay-50 px-5 py-4 text-sm text-clay-600">
          This order has been {order.status === "CANCELLED" ? "cancelled" : "refunded"}.
          If this is unexpected, please reply to your order confirmation email.
        </div>
      )}

      <h3 className="mt-10 font-display text-xl text-clay-700">Items</h3>
      <ul className="mt-4 divide-y divide-clay-100">
        {order.items?.map((it, idx) => (
          <li key={idx} className="flex items-center gap-4 py-3">
            {it.image && <img src={it.image} alt="" className="h-14 w-14 rounded-lg object-cover" />}
            <div className="flex-1">
              <div className="font-medium text-clay-700">{it.product_name}</div>
              <div className="text-xs text-clay-400">{it.size_label} · Qty {it.qty}</div>
            </div>
            <div className="text-sm font-medium text-clay-700">₹{Number(it.line_total).toFixed(0)}</div>
          </li>
        ))}
      </ul>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Summary order={order} />
        <ShipTo address={order.shippingAddress} />
      </div>

      <h3 className="mt-10 font-display text-xl text-clay-700">History</h3>
      <ol className="mt-4 space-y-3">
        {order.timeline?.map((e, idx) => (
          <li key={idx} className="flex gap-3 text-sm">
            <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-spice-500" />
            <div className="flex-1">
              <div className="text-clay-700">{e.label}</div>
              {e.note && <div className="text-xs text-clay-500">{e.note}</div>}
              <div className="text-xs text-clay-400">{new Date(e.at).toLocaleString()}</div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Summary({ order }) {
  return (
    <div className="rounded-2xl bg-clay-50 p-5">
      <h4 className="text-xs font-semibold uppercase tracking-widest text-clay-400">Summary</h4>
      <dl className="mt-3 space-y-2 text-sm">
        <Row label="Subtotal" value={`₹${Number(order.subtotal).toFixed(0)}`} />
        <Row label="Shipping" value={Number(order.shipping) === 0
          ? <span className="text-leaf-500 font-medium">Free</span>
          : `₹${Number(order.shipping).toFixed(0)}`} />
        <Row label="Total" value={<strong>₹{Number(order.total).toFixed(0)}</strong>} />
      </dl>
    </div>
  );
}

function ShipTo({ address }) {
  if (!address) return null;
  return (
    <div className="rounded-2xl bg-clay-50 p-5">
      <h4 className="text-xs font-semibold uppercase tracking-widest text-clay-400">Shipping to</h4>
      <div className="mt-3 text-sm leading-relaxed text-clay-700">
        {address.address_line}<br />
        {address.city}, {address.state} – {address.pincode}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-clay-500">{label}</dt>
      <dd className="text-clay-700">{value}</dd>
    </div>
  );
}

function labelFor(s) {
  return {
    PAID: "Paid", ACCEPTED: "Accepted", PREPARING: "Preparing",
    READY_TO_DISPATCH: "Packed", SHIPPED: "Shipped", DELIVERED: "Delivered",
  }[s] ?? s;
}
