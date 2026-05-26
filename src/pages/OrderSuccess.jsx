import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Package, Mail } from "lucide-react";
import Seo from "../components/seo/Seo";

export default function OrderSuccess() {
  const [params] = useSearchParams();
  const orderNo = params.get("orderNo");
  const phone = params.get("phone");

  return (
    <section className="py-24">
      <Seo pathname="/order-success/" title="Thank you!" description="Your order is confirmed." noindex />
      <div className="container-x max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-leaf-500/15 text-leaf-500">
          <CheckCircle2 size={44} />
        </div>
        <h1 className="mt-8 text-4xl text-clay-700 sm:text-5xl">Order placed — thank you!</h1>
        <p className="mt-4 text-clay-500">
          We've received your order and the kitchen is already gathering your jars. A confirmation
          is on its way to your inbox.
        </p>

        {orderNo && (
          <div className="mt-8 inline-flex flex-col items-center rounded-2xl border border-clay-100 bg-white px-6 py-4">
            <span className="text-xs uppercase tracking-widest text-clay-400">Order number</span>
            <span className="mt-1 font-mono text-lg font-medium text-clay-700">{orderNo}</span>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card icon={Package} title="Ships in 24 hours" body="We pack and dispatch within a day. Status updates land in your inbox." />
          <Card icon={Mail} title="Stay in touch" body="Reply to the email anytime — we read every message personally." />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {orderNo && phone && (
            <Link to={`/track?orderNo=${orderNo}&phone=${phone}`} className="btn-primary">
              Track your order
            </Link>
          )}
          <Link to="/shop" className="btn-outline">Continue shopping</Link>
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, body }) {
  return (
    <div className="rounded-2xl border border-clay-100 bg-white p-6 text-left">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-clay-50 text-spice-500">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 font-display text-lg text-clay-700">{title}</h3>
      <p className="mt-1 text-sm text-clay-500">{body}</p>
    </div>
  );
}
