import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/productDetails/productDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
