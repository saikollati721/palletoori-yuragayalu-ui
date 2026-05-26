import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Lock, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "../cart/CartContext";
import { openRazorpayCheckout } from "../lib/razorpay";
import { api } from "../lib/api";
import Seo from "../components/seo/Seo";

const SHIPPING_THRESHOLD = 2000;
const SHIPPING_FEE = 100;

const INDIAN_STATES = [
  "Andhra Pradesh", "Telangana", "Karnataka", "Tamil Nadu", "Kerala",
  "Maharashtra", "Gujarat", "Rajasthan", "Madhya Pradesh", "Uttar Pradesh",
  "Bihar", "West Bengal", "Odisha", "Punjab", "Haryana", "Delhi", "Goa", "Other",
];

const FIELD_LABELS = {
  name: "full name",
  email: "email",
  phone: "mobile number",
  address: "street address",
  city: "city",
  pincode: "pincode",
};

export default function Checkout() {
  const navigate = useNavigate();
  const { items, subtotal, clear } = useCart();
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorField, setErrorField] = useState(null);
  const fieldRefs = useRef({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "Andhra Pradesh",
    pincode: "",
    notes: "",
  });

  const shipping = subtotal === 0 || subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <section className="py-24 text-center">
        <div className="container-x">
          <h1 className="text-3xl text-clay-700">Nothing to check out yet</h1>
          <Link to="/shop" className="mt-6 inline-flex btn-primary">Browse products</Link>
        </div>
      </section>
    );
  }

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errorField === k) {
      setErrorField(null);
      setErrorMsg(null);
    }
  };

  const validate = () => {
    const required = ["name", "email", "phone", "address", "city", "pincode"];
    for (const k of required) {
      if (!form[k].trim()) return { field: k, message: `Please enter your ${FIELD_LABELS[k]}.` };
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return { field: "email", message: "Please enter a valid email address." };
    if (!/^[6-9]\d{9}$/.test(form.phone)) return { field: "phone", message: "Please enter a valid 10-digit mobile number." };
    if (!/^\d{6}$/.test(form.pincode)) return { field: "pincode", message: "Pincode must be 6 digits." };
    return null;
  };

  const focusField = (name) => {
    const el = fieldRefs.current[name];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => el.focus({ preventScroll: true }), 250);
  };

  const handlePay = async () => {
    setErrorMsg(null);
    setErrorField(null);
    const err = validate();
    if (err) {
      setErrorMsg(err.message);
      setErrorField(err.field);
      focusField(err.field);
      return;
    }

    setSubmitting(true);
    try {
      // 1) Server creates the order, recomputes prices, returns Razorpay order_id
      const created = await api.createOrder({
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        city: form.city,
        state: form.state,
        pincode: form.pincode,
        notes: form.notes || undefined,
        items: items.map((i) => ({
          productId: i.productId,
          sizeLabel: i.sizeLabel,
          qty: i.qty,
        })),
      });

      // 2) Open Razorpay with the server-issued order_id
      await openRazorpayCheckout({
        keyId: created.razorpayKeyId,
        orderId: created.razorpayOrderId,
        amount: Number(created.amount),
        customer: { name: form.name, email: form.email, phone: form.phone },
        notes: { orderNo: created.orderNo },
        onSuccess: async (response) => {
          try {
            // 3) Verify signature server-side, persist payment, send emails
            await api.verifyPayment({
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            });
            clear();
            navigate(`/order-success?orderNo=${created.orderNo}&phone=${form.phone}`);
          } catch (e) {
            setErrorMsg(`Payment received but verification failed: ${e.message}. Contact support with order ${created.orderNo}.`);
            setSubmitting(false);
          }
        },
        onDismiss: () => setSubmitting(false),
      });
    } catch (e) {
      setErrorMsg(e.message || "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <section className="py-16">
      <Seo pathname="/checkout/" title="Checkout" description="Complete your order securely." noindex />
      <div className="container-x">
        <h1 className="text-3xl text-clay-700 sm:text-4xl">Checkout</h1>
        <p className="mt-2 text-clay-500">Almost there — a few details and your jars are on their way.</p>

        {errorMsg && (
          <div className="mt-6 rounded-2xl border border-spice-500/30 bg-spice-500/5 px-5 py-3 text-sm text-spice-600">
            {errorMsg}
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePay();
            }}
            className="space-y-8"
          >
            <Card title="Contact details">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field name="name" label="Full name" value={form.name} onChange={set("name")} placeholder="Sita Devi" error={errorField === "name" ? errorMsg : null} inputRef={(el) => (fieldRefs.current.name = el)} />
                <Field name="phone" label="Mobile number" value={form.phone} onChange={set("phone")} placeholder="9876543210" inputMode="numeric" error={errorField === "phone" ? errorMsg : null} inputRef={(el) => (fieldRefs.current.phone = el)} />
                <Field name="email" label="Email" type="email" value={form.email} onChange={set("email")} placeholder="you@kitchen.com" className="sm:col-span-2" error={errorField === "email" ? errorMsg : null} inputRef={(el) => (fieldRefs.current.email = el)} />
              </div>
            </Card>

            <Card title="Shipping address">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field name="address" label="Street address" value={form.address} onChange={set("address")} placeholder="House no., street, area" className="sm:col-span-2" error={errorField === "address" ? errorMsg : null} inputRef={(el) => (fieldRefs.current.address = el)} />
                <Field name="city" label="City" value={form.city} onChange={set("city")} placeholder="Vijayawada" error={errorField === "city" ? errorMsg : null} inputRef={(el) => (fieldRefs.current.city = el)} />
                <div>
                  <Label>State</Label>
                  <select
                    value={form.state}
                    onChange={set("state")}
                    className="mt-2 w-full rounded-full border border-clay-200 bg-cream/40 px-4 py-3 text-sm focus:border-spice-500 focus:outline-none"
                  >
                    {INDIAN_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <Field name="pincode" label="Pincode" value={form.pincode} onChange={set("pincode")} placeholder="520001" inputMode="numeric" error={errorField === "pincode" ? errorMsg : null} inputRef={(el) => (fieldRefs.current.pincode = el)} />
                <Field name="notes" label="Order notes (optional)" value={form.notes} onChange={set("notes")} placeholder="Anything we should know?" className="sm:col-span-2" />
              </div>
            </Card>

            <Card title="Payment">
              <div className="flex items-start gap-4 rounded-2xl bg-clay-50 p-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-spice-500">
                  <Lock size={18} />
                </div>
                <div>
                  <div className="font-semibold text-clay-700">Pay securely with Razorpay</div>
                  <div className="mt-1 text-sm text-clay-500">
                    UPI · Cards · Net banking · Wallets — all on Razorpay's secure checkout. You'll be returned here once payment completes.
                  </div>
                </div>
              </div>
            </Card>
          </form>

          <aside className="h-fit rounded-2xl border border-clay-100 bg-white p-6 shadow-soft lg:sticky lg:top-28">
            <h2 className="font-display text-xl text-clay-700">Your order</h2>
            <ul className="mt-5 max-h-72 space-y-4 overflow-y-auto pr-1">
              {items.map((i) => (
                <li key={i.key} className="flex gap-3">
                  <img src={i.image} alt="" className="h-14 w-14 rounded-lg object-cover" />
                  <div className="flex-1 text-sm">
                    <div className="font-medium text-clay-700">{i.name}</div>
                    <div className="text-xs text-clay-400">{i.sizeLabel} · Qty {i.qty}</div>
                  </div>
                  <div className="text-sm font-medium text-clay-700">₹{i.qty * i.unitPrice}</div>
                </li>
              ))}
            </ul>

            <dl className="mt-6 space-y-3 border-t border-clay-100 pt-5 text-sm">
              <Row label="Subtotal" value={`₹${subtotal}`} />
              <Row label="Shipping" value={shipping === 0 ? <span className="text-leaf-500 font-medium">Free</span> : `₹${shipping}`} />
            </dl>
            <div className="my-5 border-t border-dashed border-clay-200" />
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-clay-500">Total payable</span>
              <span className="font-display text-2xl text-clay-700">₹{total}</span>
            </div>

            <button
              onClick={handlePay}
              disabled={submitting}
              className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Opening Razorpay..." : <><Lock size={16} /> Pay ₹{total}</>}
            </button>

            <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-clay-500">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-leaf-500" /> 256-bit secure
              </div>
              <div className="flex items-center gap-2">
                <Truck size={14} className="text-leaf-500" /> Ships in 24h
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
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

function Label({ children }) {
  return <label className="text-xs font-semibold uppercase tracking-widest text-clay-400">{children}</label>;
}

function Field({ label, className = "", error, inputRef, ...rest }) {
  const borderCls = error
    ? "border-spice-500 ring-2 ring-spice-500/20 focus:border-spice-500"
    : "border-clay-200 focus:border-spice-500";
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        ref={inputRef}
        aria-invalid={error ? "true" : "false"}
        {...rest}
        className={`mt-2 w-full rounded-full border bg-cream/40 px-4 py-3 text-sm focus:outline-none ${borderCls}`}
      />
      {error && <p className="mt-1.5 ml-4 text-xs text-spice-600">{error}</p>}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-clay-500">{label}</dt>
      <dd className="font-medium text-clay-700">{value}</dd>
    </div>
  );
}
