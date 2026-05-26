import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Lock, AlertCircle } from "lucide-react";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login, user, isAdmin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (user && isAdmin) {
    const target = location.state?.from?.pathname ?? "/admin";
    navigate(target, { replace: true });
    return null;
  }

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      navigate(location.state?.from?.pathname ?? "/admin", { replace: true });
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="w-full max-w-md">
        <div className="text-center">
          <img src="/images/logo.jpg" alt="" className="mx-auto h-14 w-14 rounded-full object-cover ring-2 ring-clay-200" />
          <h1 className="mt-5 font-display text-3xl text-clay-700">Admin sign in</h1>
          <p className="mt-2 text-sm text-clay-500">Palletoori Vuragayalu</p>
        </div>

        <form onSubmit={submit} className="mt-10 rounded-2xl border border-clay-100 bg-white p-8 shadow-soft">
          {error && (
            <div className="mb-5 flex items-center gap-2 rounded-xl border border-spice-500/30 bg-spice-500/5 px-4 py-2.5 text-sm text-spice-600">
              <AlertCircle size={14} /> {error}
            </div>
          )}
          <div className="space-y-4">
            <Field label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
            <Field label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" disabled={loading} className="btn-primary mt-6 w-full disabled:opacity-60">
            <Lock size={16} /> {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, ...rest }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-clay-400">{label}</label>
      <input
        {...rest}
        className="mt-2 w-full rounded-full border border-clay-200 bg-cream/40 px-4 py-3 text-sm focus:border-spice-500 focus:outline-none"
      />
    </div>
  );
}
