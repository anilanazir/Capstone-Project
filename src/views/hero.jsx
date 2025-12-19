import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import bgImg from "@/assets/hero-section-bg.jpg";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-[#141a0f]/60"></div>
      </div>

      <Navbar />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <h4 className="text-xl text-white mb-10">WELCOME TO THE GREENSTORE</h4>

        <h1 className="text-6xl text-white leading-tight max-w-3xl">
          Let’s Bring the Spring to Your Home
        </h1>

        <button
          onClick={() => navigate("/plants")}
          className="mt-8 text-black bg-white hover:bg-[#5c9735] px-8 py-3 rounded-xl text-lg shadow-md cursor-pointer"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
