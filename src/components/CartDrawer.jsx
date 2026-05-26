import { useEffect } from "react";
import { Link } from "react-router-dom";
import { X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../cart/CartContext";

export default function CartDrawer() {
  const { drawerOpen, closeDrawer, items, subtotal, updateQty, removeItem } = useCart();

  useEffect(() => {
    if (drawerOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [drawerOpen]);

  return (
    <>
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 z-[60] bg-clay-700/40 backdrop-blur-sm transition-opacity ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!drawerOpen}
      >
        <header className="flex items-center justify-between border-b border-clay-100 px-6 py-5">
          <div className="flex items-center gap-2 font-display text-xl text-clay-700">
            <ShoppingBag size={20} /> Your cart
          </div>
          <button
            onClick={closeDrawer}
            className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-clay-50"
            aria-label="Close cart"
          >
            <X size={18} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-clay-50 text-clay-400">
                <ShoppingBag size={32} />
              </div>
              <p className="mt-4 font-display text-lg text-clay-700">Your cart is empty</p>
              <p className="mt-1 text-sm text-clay-500">Add a jar or two to get started.</p>
              <Link to="/shop" onClick={closeDrawer} className="mt-6 btn-primary">
                Browse shop
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-clay-100">
              {items.map((i) => (
                <li key={i.key} className="flex gap-4 py-4">
                  <img src={i.image} alt={i.name} className="h-20 w-20 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-medium text-clay-700">{i.name}</div>
                        <div className="text-xs text-clay-400">{i.sizeLabel}</div>
                      </div>
                      <button
                        onClick={() => removeItem(i.key)}
                        className="text-clay-400 hover:text-spice-500"
                        aria-label="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center rounded-full ring-1 ring-clay-200">
                        <button
                          onClick={() => updateQty(i.key, i.qty - 1)}
                          className="px-2.5 py-1 text-clay-600"
                          aria-label="Decrease"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{i.qty}</span>
                        <button
                          onClick={() => updateQty(i.key, i.qty + 1)}
                          className="px-2.5 py-1 text-clay-600"
                          aria-label="Increase"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <div className="font-display text-base text-clay-700">
                        ₹{i.qty * i.unitPrice}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-clay-100 bg-white px-6 py-5">
            <div className="flex items-center justify-between text-sm text-clay-500">
              <span>Subtotal</span>
              <span className="font-display text-xl text-clay-700">₹{subtotal}</span>
            </div>
            <p className="mt-1 text-xs text-clay-400">Shipping calculated at checkout.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link to="/cart" onClick={closeDrawer} className="btn-outline w-full">
                View cart
              </Link>
              <Link to="/checkout" onClick={closeDrawer} className="btn-primary w-full">
                Checkout
              </Link>
            </div>
          </footer>
        )}
      </aside>
    </>
  );
}
