import { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";

const STORAGE_KEY = "palletoori.cart.v1";

const CartContext = createContext(null);

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [] };
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.items)) return { items: [] };
    return parsed;
  } catch {
    return { items: [] };
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const { product, size, qty } = action;
      const key = `${product.id}::${size.label}`;
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.key === key ? { ...i, qty: i.qty + qty } : i
          ),
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            key,
            productId: product.id,
            name: product.name,
            image: product.image,
            sizeLabel: size.label,
            unitPrice: size.price,
            qty,
          },
        ],
      };
    }
    case "UPDATE_QTY": {
      const { key, qty } = action;
      if (qty <= 0) {
        return { ...state, items: state.items.filter((i) => i.key !== key) };
      }
      return {
        ...state,
        items: state.items.map((i) => (i.key === key ? { ...i, qty } : i)),
      };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.key !== action.key) };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, undefined, loadInitial);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo(() => {
    const count = state.items.reduce((n, i) => n + i.qty, 0);
    const subtotal = state.items.reduce((n, i) => n + i.qty * i.unitPrice, 0);
    return {
      items: state.items,
      count,
      subtotal,
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
      // `size` must be one of product.prices entries: { label, price }.
      // Callers pass product.prices[selectedIndex] directly.
      addItem: (product, size, qty = 1) => {
        const chosen = size ?? product.prices[0];
        dispatch({ type: "ADD", product, size: chosen, qty });
        setDrawerOpen(true);
      },
      updateQty: (key, qty) => dispatch({ type: "UPDATE_QTY", key, qty }),
      removeItem: (key) => dispatch({ type: "REMOVE", key }),
      clear: () => dispatch({ type: "CLEAR" }),
    };
  }, [state, drawerOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
