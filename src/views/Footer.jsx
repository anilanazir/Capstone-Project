import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-[#0f1609] text-white">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center space-y-10">
        <nav className="flex justify-center gap-8 text-sm tracking-wide">
          {["Home", "Products", "Contact"].map((item) => (
            <Link key={item} to="/" className="hover:text-green-400 transition">
              {item}
            </Link>
          ))}
        </nav>

        <div className="space-y-6">
          <h3 className="text-xl font-medium">Subscribe to our newsletter</h3>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
          >
            <Input
              type="email"
              placeholder="Your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black h-12"
            />

            <Button
              type="submit"
              className="bg-[#5c9735] hover:bg-green-700 h-12 px-8"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-[#5c9735] transition">
            <Instagram />
          </a>
          <a href="#" className="hover:text-[#5c9735] transition">
            <Facebook />
          </a>
          <a href="#" className="hover:text-[#5c9735] transition">
            <Twitter />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-300">
        © 2025 Plant Shop. Powered by Greenstore.
      </div>
    </footer>
  );
};

export default Footer;
