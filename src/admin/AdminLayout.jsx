import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, ShoppingBag, Settings, BarChart3, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "./auth/AuthContext";

const nav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-cream">
      {/* Sidebar */}
      <aside className={`${mobileOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-40 w-64 transform border-r border-clay-100 bg-white transition-transform lg:relative lg:translate-x-0`}>
        <div className="flex h-20 items-center gap-3 border-b border-clay-100 px-6">
          <img src="/images/logo.jpg" alt="" className="h-10 w-10 rounded-full object-cover ring-2 ring-clay-200" />
          <div className="leading-tight">
            <div className="font-display text-lg text-clay-700">Palletoori</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-clay-400">Admin</div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-6">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `mb-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-spice-500 text-white shadow-soft"
                    : "text-clay-600 hover:bg-clay-50"
                }`
              }
            >
              <item.icon size={17} /> {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-clay-100 p-4">
          <div className="px-3 py-2 text-xs text-clay-400">
            Signed in as
            <div className="mt-0.5 truncate text-clay-700">{user?.email}</div>
          </div>
          <button
            onClick={handleLogout}
            className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-clay-600 transition hover:bg-clay-50"
          >
            <LogOut size={17} /> Sign out
          </button>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen((v) => !v)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft lg:hidden"
        aria-label="Menu"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Main */}
      <div className="flex-1">
        <main className="px-6 py-8 sm:px-10 lg:px-14">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
