import React from "react";
import HeroSection from "../views/hero";
import Products from "@/views/Products";


const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />
      <Products />
    
    </div>
  );
};

export default Home;
