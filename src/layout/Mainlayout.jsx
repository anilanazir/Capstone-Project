import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import CartDrawer from "@/views/cartDrawer";
import CartButton from "@/views/cartButton";
import Navbar from "@/views/navbar";
import Footer from "@/views/Footer";

const MainLayout = () => {
  const location = useLocation();

  const hideNavbar = location.pathname === "/checkout";
  const isHome = location.pathname === "/";
  return (
    <>
      {!hideNavbar && <Navbar variant={isHome ? "transparent" : "default"} />}
      <Outlet />
      <CartButton />
      <CartDrawer />
      <Footer />
    </>
  );
};

export default MainLayout;
