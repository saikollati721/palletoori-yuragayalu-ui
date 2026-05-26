import { Truck, Leaf, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Fast & Free Shipping",
    body: "Delivered across India in 3–5 days, packed with care so flavours arrive intact.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    body: "Cold-pressed oils, hand-pounded masala, sun-cured ingredients — never any preservatives.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    body: "Pay with UPI, cards, net banking or COD. Every transaction is encrypted end-to-end.",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-20">
      <div className="container-x grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-2xl border border-clay-100 bg-white p-8 transition hover:shadow-soft">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-clay-50 text-spice-500">
              <Icon size={26} />
            </div>
            <h3 className="mt-6 font-display text-xl text-clay-700">{title}</h3>
            <p className="mt-2 text-sm text-clay-500">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
