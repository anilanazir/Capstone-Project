import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* add future pages here */}
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
