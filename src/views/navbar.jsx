import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ShoppingCart} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-6 px-6 flex justify-between items-center absolute top-0 left-0 z-30 ">
      
      <h1 className="text-2xl font-bold text-white tracking-wide cursor-pointer">
        Greenstore
      </h1>

     
      <div className="flex items-center gap-8">
        <NavigationMenu>
          <NavigationMenuList className="gap-8">

           
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="text-xl text-white hover:text-green-600"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/products"
                className="text-xl text-white hover:text-green-600"
              >
                Products
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="text-xl text-white hover:text-green-600"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Cart Icon */}
            <NavigationMenuItem>
              <Link
                to="/cart"
                className="p-2 cursor-pointer text-white hover:text-green-600 transition-colors"
              >
                <ShoppingCart className="w-6 h-6" />
              </Link>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;
