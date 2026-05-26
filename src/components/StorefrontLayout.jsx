import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CartDrawer from "./CartDrawer";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function StorefrontLayout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingWhatsApp />
    </>
  );
}
