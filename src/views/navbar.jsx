import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cartUI } from "@/features/cartUi";
import { ShoppingCart, Menu as HamburgerIcon, X, User } from "lucide-react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );
  const totalQty = cartItems.reduce((sum, item) => sum + item.qty, 0);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Plants", path: "/plants" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`w-full py-6 px-6 flex justify-between items-center z-30 ${
        isHomePage ? "absolute top-0 left-0" : "relative bg-white shadow-none"
      }`}
    >
      <div className="hidden md:flex justify-between items-center w-full">
        <Link to="/">
          <h1
            className={`text-2xl font-bold tracking-wide cursor-pointer ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            Greenstore
          </h1>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-8 flex items-center">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <NavigationMenuLink asChild>
                  <Link
                    to={link.path}
                    className={`text-xl ${
                      isHomePage
                        ? "text-white hover:text-green-600"
                        : "text-black hover:text-green-600"
                    } transition-colors`}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <button
                onClick={() => cartUI.open()}
                className={`relative flex items-center gap-2 ${
                  isHomePage
                    ? "text-white hover:text-green-600"
                    : "text-green-600 hover:text-black"
                } transition-colors`}
              >
                <span className="text-lg font-medium">
                  ${totalPrice.toFixed(2)}
                </span>
                <div className="relative cursor-pointer">
                  <ShoppingCart className="w-6 h-6" />
                  {totalQty > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {totalQty}
                    </span>
                  )}
                </div>
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className={`p-2 rounded-full cursor-pointer ${
                  isHomePage
                    ? "text-white hover:text-green-600"
                    : "text-green-600 hover:text-black"
                }`}
              >
                <User size={24} />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border z-50">
                  <Link
                    to="/signin"
                    onClick={() => setUserDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setUserDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex md:hidden items-center justify-between w-full">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`p-2 rounded-md focus:outline-none ${
            isHomePage ? "text-white" : "text-green-600"
          }`}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <HamburgerIcon className="w-6 h-6" />
          )}
        </button>

        <Link to="/">
          <h1
            className={`text-2xl font-bold tracking-wide cursor-pointer ${
              isHomePage ? "text-white" : "text-black"
            }`}
          >
            Greenstore
          </h1>
        </Link>

        <button
          onClick={() => cartUI.open()}
          className={`relative flex items-center gap-1 ${
            isHomePage ? "text-white" : "text-green-600 hover:text-black"
          }`}
        >
          <span className="text-sm font-medium">${totalPrice.toFixed(2)}</span>
          <div className="relative">
            <ShoppingCart className="w-6 h-6" />
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalQty}
              </span>
            )}
          </div>
        </button>
        <button
          onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          className={`${isHomePage ? "text-white" : "text-green-600"}`}
        >
          <User className="w-6 h-6" />
        </button>
        {userDropdownOpen && (
          <div className="absolute top-full right-0 w-40 bg-white shadow-md rounded-md py-2 flex flex-col z-30">
            <Link
              to="/signin"
              onClick={() => setUserDropdownOpen(false)}
              className="px-4 py-2 hover:bg-gray-100 text-black font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setUserDropdownOpen(false)}
              className="px-4 py-2 hover:bg-gray-100 text-black font-medium"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      {mobileMenuOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start py-4 px-6 md:hidden z-20`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-lg font-medium text-green-600 hover:text-black w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {!isHomePage && (
        <div className="absolute bottom-0 left-0 right-0">
          <hr className="border-gray-200" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
