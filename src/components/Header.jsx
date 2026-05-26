import { Link, NavLink, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useCart } from "../cart/CartContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { count, openDrawer } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();
  const [query, setQuery] = useState("");
  const debounceRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/shop" || location.pathname === "/shop/") {
      setQuery(params.get("q") ?? "");
    }
  }, [location.pathname, params]);

  const runSearch = (value) => {
    const v = value.trim();
    const next = new URLSearchParams();
    if (v) next.set("q", v);
    navigate(`/shop${next.toString() ? `?${next.toString()}` : ""}`);
  };

  const onChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => runSearch(value), 200);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    runSearch(query);
  };

  const onClear = () => {
    setQuery("");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    navigate("/shop");
  };

  const searchForm = (extraClass = "") => (
    <form onSubmit={onSubmit} className={`relative ${extraClass}`}>
      <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-clay-400" />
      <input
        type="search"
        value={query}
        onChange={onChange}
        placeholder="Search products…"
        aria-label="Search products"
        className="w-full rounded-full border border-clay-200 bg-white py-2 pl-10 pr-9 text-sm focus:border-spice-500 focus:outline-none"
        autoComplete="off"
      />
      {query && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full text-clay-500 hover:bg-clay-50"
        >
          <X size={14} />
        </button>
      )}
    </form>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-clay-100 bg-cream/85 backdrop-blur">
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img src="/images/logo.jpg" alt="Palletoori Vuragayalu" width="48" height="48" className="h-12 w-12 rounded-full object-cover ring-2 ring-clay-200" />
          <div className="leading-tight">
            <div className="font-display text-lg text-clay-700 sm:text-xl">Palletoori Vuragayalu</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-clay-400 sm:text-[11px]">Taste of the village</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-spice-500 ${isActive ? "text-spice-500" : "text-clay-600"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {searchForm("hidden flex-1 max-w-xs md:block")}

        <div className="flex items-center gap-2">
          <button
            onClick={openDrawer}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-clay-600 transition hover:bg-clay-50"
            aria-label="Cart"
          >
            <ShoppingCart size={18} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-spice-500 px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
          <button onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center rounded-full text-clay-600 transition hover:bg-clay-50 lg:hidden" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className="container-x pb-3 md:hidden">
        {searchForm("")}
      </div>

      {open && (
        <nav className="border-t border-clay-100 bg-cream lg:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium ${isActive ? "bg-clay-50 text-spice-500" : "text-clay-700"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
