import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../cart/CartContext";
import Seo from "../components/seo/Seo";

const SHIPPING_THRESHOLD = 999;
const SHIPPING_FEE = 60;

export default function Cart() {
  const { items, subtotal, updateQty, removeItem } = useCart();
  const shipping = subtotal === 0 || subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <>
        <Seo pathname="/cart/" title="Your Cart" description="Review the items in your cart." noindex />
        <section className="py-24">
          <div className="container-x text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-clay-50 text-clay-400">
              <ShoppingBag size={36} />
            </div>
            <h1 className="mt-8 text-3xl text-clay-700 sm:text-4xl">Your cart is empty</h1>
            <p className="mt-3 text-clay-500">Browse the pantry — your next favourite jar is waiting.</p>
            <Link to="/shop/" className="mt-8 btn-primary">Start shopping</Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <section className="py-16">
      <Seo pathname="/cart/" title="Your Cart" description="Review the items in your cart." noindex />
      <div className="container-x">
        <h1 className="text-3xl text-clay-700 sm:text-4xl">Your cart</h1>
        <p className="mt-2 text-clay-500">{items.length} item{items.length === 1 ? "" : "s"} ready to ship.</p>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_400px]">
          <ul className="divide-y divide-clay-100 rounded-2xl border border-clay-100 bg-white">
            {items.map((i) => (
              <li key={i.key} className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
                <img src={i.image} alt={i.name} className="h-24 w-24 flex-shrink-0 rounded-xl object-cover" />
                <div className="flex-1">
                  <Link to={`/product/${i.productId}/`} className="font-display text-lg text-clay-700 hover:text-spice-500">
                    {i.name}
                  </Link>
                  <div className="text-xs uppercase tracking-wider text-clay-400">{i.sizeLabel}</div>
                  <div className="mt-1 text-sm text-clay-500">₹{i.unitPrice} each</div>
                </div>
                <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                  <div className="flex items-center rounded-full ring-1 ring-clay-200">
                    <button onClick={() => updateQty(i.key, i.qty - 1)} className="px-3 py-1.5 text-clay-600" aria-label="Decrease">
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{i.qty}</span>
                    <button onClick={() => updateQty(i.key, i.qty + 1)} className="px-3 py-1.5 text-clay-600" aria-label="Increase">
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="font-display text-lg text-clay-700">₹{i.qty * i.unitPrice}</div>
                  <button
                    onClick={() => removeItem(i.key)}
                    className="text-clay-400 hover:text-spice-500"
                    aria-label="Remove from cart"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-2xl border border-clay-100 bg-white p-6 shadow-soft">
            <h2 className="font-display text-xl text-clay-700">Order summary</h2>
            <dl className="mt-5 space-y-3 text-sm">
              <Row label="Subtotal" value={`₹${subtotal}`} />
              <Row
                label="Shipping"
                value={shipping === 0 ? <span className="text-leaf-500 font-medium">Free</span> : `₹${shipping}`}
              />
              {shipping > 0 && (
                <p className="text-xs text-clay-400">
                  Add ₹{SHIPPING_THRESHOLD - subtotal} more for free shipping.
                </p>
              )}
            </dl>
            <div className="my-5 border-t border-dashed border-clay-200" />
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-clay-500">Total</span>
              <span className="font-display text-2xl text-clay-700">₹{total}</span>
            </div>
            <Link to="/checkout/" className="btn-primary mt-6 w-full">
              Proceed to checkout <ArrowRight size={16} />
            </Link>
            <Link to="/shop/" className="mt-3 block text-center text-sm font-medium text-clay-500 hover:text-spice-500">
              ← Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </section>
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
