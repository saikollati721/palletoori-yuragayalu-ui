// Razorpay checkout loader. The key_id and order_id come from the backend
// (Edge Function create-order). The fallback VITE_RAZORPAY_KEY_ID is only
// used in dev if you haven't configured Razorpay credentials in the admin UI yet.
export const FALLBACK_RAZORPAY_KEY_ID =
  import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_1DP5mmOlF5G5ag";

export function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export async function openRazorpayCheckout({
  keyId,
  orderId,
  amount,
  customer,
  notes,
  onSuccess,
  onDismiss,
}) {
  const loaded = await loadRazorpayScript();
  if (!loaded) {
    alert("Could not load Razorpay. Please check your internet connection.");
    return;
  }

  const options = {
    key: keyId || FALLBACK_RAZORPAY_KEY_ID,
    amount: Math.round(amount * 100),
    currency: "INR",
    name: "Palletoori Vuragayalu",
    description: "Order payment",
    image: "/images/logo.jpg",
    order_id: orderId,
    handler: (response) => onSuccess?.(response),
    prefill: {
      name: customer?.name || "",
      email: customer?.email || "",
      contact: customer?.phone || "",
    },
    notes: notes || {},
    theme: { color: "#C0392B" },
    modal: { ondismiss: () => onDismiss?.() },
  };

  const rzp = new window.Razorpay(options);
  rzp.on("payment.failed", (resp) => {
    // eslint-disable-next-line no-console
    console.error("Razorpay payment failed", resp.error);
    alert(`Payment failed: ${resp.error?.description || "Please try again."}`);
  });
  rzp.open();
}
