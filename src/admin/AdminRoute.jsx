import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";

export default function AdminRoute() {
  const { user, isAdmin, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream">
        <div className="text-sm text-clay-500">Loading…</div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
