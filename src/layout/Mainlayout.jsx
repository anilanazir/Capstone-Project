import React from "react";
import { Outlet } from "react-router-dom";
import CartDrawer from "@/views/cartDrawer";
import CartButton from "@/views/cartButton";
import Navbar from "@/views/navbar";
import Footer from "@/views/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <CartButton />
      <CartDrawer />
      <Footer />
    </>
  );
};

export default MainLayout;
