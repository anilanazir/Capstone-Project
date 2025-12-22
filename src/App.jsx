import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home/home";
import ProductDetails from "./pages/productDetails/productDetails";
import Plants from "./pages/Plants/Plants";
import ContactPage from "@/pages/Contact/ContactPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/signin" element={<SignIn />} />
         <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
