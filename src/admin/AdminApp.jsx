import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import AdminRoute from "./AdminRoute";
import AdminLayout from "./AdminLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

export default function AdminApp() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:orderNo" element={<OrderDetail />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}
