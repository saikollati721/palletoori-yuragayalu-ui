import { useEffect, useState } from "react";
import { Save, CheckCircle2, AlertCircle, Lock } from "lucide-react";
import { api } from "../../lib/api";

export default function Settings() {
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [keyId, setKeyId] = useState("");
  const [keySecret, setKeySecret] = useState("");
  const [webhookSecret, setWebhookSecret] = useState("");
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    api.admin.getRazorpaySettings()
      .then((s) => { setCurrent(s); setKeyId(s.keyId ?? ""); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const save = async (e) => {
    e.preventDefault();
    setSaving(true); setResult(null);
    try {
      const out = await api.admin.saveRazorpaySettings({
        keyId,
        keySecret,
        webhookSecret: webhookSecret || undefined,
      });
      setResult({ ok: true, testPassed: out.testPassed });
      setKeySecret("");
      setWebhookSecret("");
      const refreshed = await api.admin.getRazorpaySettings();
      setCurrent(refreshed);
    } catch (err) {
      setResult({ ok: false, error: err.message });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <h1 className="font-display text-3xl text-clay-700">Settings</h1>
      <p className="mt-1 text-sm text-clay-500">Razorpay integration</p>

      {error && <div className="mt-6 text-sm text-spice-600">{error}</div>}

      <form onSubmit={save} className="mt-8 max-w-2xl rounded-2xl border border-clay-100 bg-white p-6 shadow-soft sm:p-8">
        <div className="flex items-start gap-4 rounded-2xl bg-clay-50 p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-spice-500">
            <Lock size={16} />
          </div>
          <div className="text-sm text-clay-600">
            Your <strong>Key Secret</strong> and <strong>Webhook Secret</strong> are encrypted with AES-GCM
            before being stored. We never display them again — overwrite them by re-entering values here.
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <Label>Razorpay Key ID</Label>
            <input
              value={keyId}
              onChange={(e) => setKeyId(e.target.value)}
              placeholder="rzp_live_xxxxx or rzp_test_xxxxx"
              required
              className="mt-2 w-full rounded-full border border-clay-200 bg-cream/40 px-4 py-3 text-sm focus:border-spice-500 focus:outline-none"
            />
            {!loading && current?.keyId && (
              <div className="mt-1 text-xs text-clay-400">Currently set: <span className="font-mono">{current.keyId}</span></div>
            )}
          </div>
          <div>
            <Label>Razorpay Key Secret</Label>
            <input
              type="password"
              value={keySecret}
              onChange={(e) => setKeySecret(e.target.value)}
              placeholder={current?.hasSecret ? "•••••••• (saved)" : "Enter your key secret"}
              required={!current?.hasSecret}
              autoComplete="new-password"
              className="mt-2 w-full rounded-full border border-clay-200 bg-cream/40 px-4 py-3 text-sm focus:border-spice-500 focus:outline-none"
            />
          </div>
          <div>
            <Label>Webhook Secret (optional)</Label>
            <input
              type="password"
              value={webhookSecret}
              onChange={(e) => setWebhookSecret(e.target.value)}
              placeholder={current?.hasWebhookSecret ? "•••••••• (saved)" : "Optional"}
              autoComplete="new-password"
              className="mt-2 w-full rounded-full border border-clay-200 bg-cream/40 px-4 py-3 text-sm focus:border-spice-500 focus:outline-none"
            />
            <div className="mt-1 text-xs text-clay-400">
              Configure the webhook URL in Razorpay dashboard, then paste the signing secret here.
            </div>
          </div>
        </div>

        {result && (
          <div className={`mt-6 flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm ${
            result.ok ? "border-leaf-500/30 bg-leaf-500/5 text-leaf-600"
                      : "border-spice-500/30 bg-spice-500/5 text-spice-600"
          }`}>
            {result.ok ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
            {result.ok
              ? (result.testPassed
                  ? "Saved. Razorpay credentials verified successfully."
                  : "Saved, but a test call to Razorpay failed. Double-check the key/secret.")
              : `Save failed: ${result.error}`}
          </div>
        )}

        <button type="submit" disabled={saving} className="btn-primary mt-6 disabled:opacity-60">
          <Save size={16} /> {saving ? "Saving…" : "Save settings"}
        </button>
      </form>
    </div>
  );
}

function Label({ children }) {
  return <label className="text-xs font-semibold uppercase tracking-widest text-clay-400">{children}</label>;
}
