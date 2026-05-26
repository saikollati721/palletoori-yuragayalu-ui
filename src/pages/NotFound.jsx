import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Browse our Andhra pickles, sweets and snacks instead."
        noindex
      />
      <section className="container-x py-32 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-spice-500">404</span>
        <h1 className="mt-3 text-4xl text-clay-700 sm:text-5xl">We couldn't find that page.</h1>
        <p className="mx-auto mt-5 max-w-lg text-clay-500">
          The page may have moved or never existed. Try the shop, our story, or get in touch.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">Back to home</Link>
          <Link to="/shop/" className="rounded-full border border-clay-300 px-6 py-3 text-sm font-semibold text-clay-700 hover:bg-clay-50">
            Browse shop
          </Link>
        </div>
      </section>
    </>
  );
}
