import { supabase } from "./supabase";

const FUNCTIONS_BASE = `${import.meta.env.VITE_SUPABASE_URL ?? ""}/functions/v1`;

async function callFunction(name, { method = "POST", body, auth = false } = {}) {
  const headers = {
    "content-type": "application/json",
    apikey: import.meta.env.VITE_SUPABASE_ANON_KEY ?? "",
  };

  if (auth) {
    const { data } = await supabase.auth.getSession();
    const token = data?.session?.access_token;
    if (!token) throw new Error("Not authenticated");
    headers.Authorization = `Bearer ${token}`;
  } else {
    headers.Authorization = `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY ?? ""}`;
  }

  const res = await fetch(`${FUNCTIONS_BASE}/${name}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  let payload = null;
  const text = await res.text();
  if (text) {
    try { payload = JSON.parse(text); } catch { payload = { raw: text }; }
  }

  if (!res.ok) {
    const message = payload?.error || payload?.message || `HTTP ${res.status}`;
    const err = new Error(message);
    err.status = res.status;
    err.payload = payload;
    throw err;
  }
  return payload;
}

// ----- Public storefront calls -----
export const api = {
  createOrder: (payload) => callFunction("create-order", { body: payload }),
  verifyPayment: (payload) => callFunction("verify-payment", { body: payload }),
  trackOrder: (payload) => callFunction("track-order", { body: payload }),

  // ----- Admin calls (require an authenticated session) -----
  admin: {
    updateOrderStatus: (payload) =>
      callFunction("update-order-status", { body: payload, auth: true }),
    getRazorpaySettings: () =>
      callFunction("get-razorpay-settings", { method: "GET", auth: true }),
    saveRazorpaySettings: (payload) =>
      callFunction("save-razorpay-settings", { body: payload, auth: true }),
  },
};

// ----- Direct table reads (RLS-gated) -----
export const catalog = {
  async listCategories() {
    const { data, error } = await supabase
      .from("category").select("*").order("sort_order");
    if (error) throw error;
    return data ?? [];
  },
  async listProducts() {
    const { data, error } = await supabase
      .from("product").select("*").eq("is_active", true).order("name");
    if (error) throw error;
    return data ?? [];
  },
};

export const adminQueries = {
  async listOrders({ status, from, to, limit = 50 } = {}) {
    let q = supabase
      .from("orders")
      .select(`
        id, order_no, status, payment_status, total, device_type,
        created_at, updated_at,
        customer:customer_id ( name, phone ),
        address:shipping_address_id ( city, state, pincode )
      `)
      .order("created_at", { ascending: false })
      .limit(limit);
    if (status) q = q.eq("status", status);
    if (from) q = q.gte("created_at", from);
    if (to) q = q.lt("created_at", to);
    const { data, error } = await q;
    if (error) throw error;
    return data ?? [];
  },

  async getOrder(orderNo) {
    const { data, error } = await supabase
      .from("orders")
      .select(`
        id, order_no, status, payment_status, subtotal, shipping, total,
        razorpay_order_id, razorpay_payment_id,
        device_type, device_os, browser, user_agent,
        notes, created_at, updated_at,
        customer:customer_id ( name, email, phone ),
        address:shipping_address_id ( address_line, city, state, pincode ),
        order_item ( product_id, product_name, image, size_label, unit_price, qty, line_total ),
        order_status_history ( from_status, to_status, changed_by, note, changed_at )
      `)
      .eq("order_no", orderNo)
      .single();
    if (error) throw error;
    return data;
  },

  async analyticsOverview(days = 30) {
    const { data, error } = await supabase.rpc("analytics_overview", { days });
    if (error) throw error;
    return data?.[0] ?? null;
  },
  async topProducts(days = 30, lim = 10) {
    const { data, error } = await supabase.rpc("analytics_top_products", { days, lim });
    if (error) throw error;
    return data ?? [];
  },
  async byState(days = 30) {
    const { data, error } = await supabase.rpc("analytics_by_state", { days });
    if (error) throw error;
    return data ?? [];
  },
  async byDevice(days = 30) {
    const { data, error } = await supabase.rpc("analytics_by_device", { days });
    if (error) throw error;
    return data ?? [];
  },
};
