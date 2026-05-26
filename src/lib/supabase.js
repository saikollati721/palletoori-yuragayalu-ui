import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseConfigured = Boolean(url && anonKey);

if (!supabaseConfigured) {
  // eslint-disable-next-line no-console
  console.warn(
    "[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not set. " +
    "Storefront pages will render fine, but checkout, order tracking and the " +
    "admin app will not work until you copy .env.example to .env and fill them in."
  );
}

// Use placeholder URL/key when env vars are missing so the client constructor
// doesn't throw at import time. Storefront browsing works without Supabase;
// only checkout/track/admin actually call out to the network.
export const supabase = createClient(
  url || "https://placeholder.supabase.co",
  anonKey || "placeholder-anon-key",
  {
    auth: {
      persistSession: true,
      storageKey: "palletoori.auth",
      autoRefreshToken: true,
    },
  }
);
