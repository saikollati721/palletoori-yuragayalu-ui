import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./cart/CartContext";
import StorefrontLayout from "./components/StorefrontLayout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import ProductCategory from "./pages/ProductCategory";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import TrackOrder from "./pages/TrackOrder";
import NotFound from "./pages/NotFound";

const AdminApp = lazy(() => import("./admin/AdminApp"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Routes>
          <Route
            path="/admin/*"
            element={
              <Suspense fallback={<AdminFallback />}>
                <AdminApp />
              </Suspense>
            }
          />
          <Route
            element={
              <CartProvider>
                <StorefrontLayout />
              </CartProvider>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/product/:slug/" element={<ProductDetail />} />
            <Route path="/product-category/:slug" element={<ProductCategory />} />
            <Route path="/product-category/:slug/" element={<ProductCategory />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/track" element={<TrackOrder />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function AdminFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream">
      <div className="text-sm text-clay-500">Loading admin…</div>
    </div>
  );
}
