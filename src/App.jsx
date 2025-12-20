import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/productDetails/productDetails";
import Plants from "./pages/Plants/Plants";
import ContactPage from "@/pages/Contact/ContactPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
