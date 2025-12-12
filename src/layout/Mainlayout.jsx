import React from "react";
import { Outlet } from "react-router-dom";
import CartDrawer from "@/views/cardDrawer";
import CartButton from "@/views/cartButton";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <CartButton />
      <CartDrawer />
    </>
  );
};

export default MainLayout;
