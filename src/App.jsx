import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/productDetails/productDetails";
import Plants from "./pages/Plants/Plants";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/Plants" element={<Plants />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
