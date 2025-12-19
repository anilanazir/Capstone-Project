import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/productDetails/productDetails";
import Plants from "./pages/Plants/Plants";
import ContactPage from "@/pages/Contact/ContactPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
