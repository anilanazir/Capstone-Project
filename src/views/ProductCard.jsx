import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import { cartUI } from "@/features/cartUi";
import { Link } from "react-router-dom"; 

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    dispatch(addToCart(product));
    cartUI.open(); 
  };

  return (
    <Card className="rounded-xl overflow-hidden shadow-md bg-[#f5f7f3] group relative">
      <button
        onClick={handleAddToCart}
        className="
          absolute top-3 right-3 bg-white rounded-full p-2 shadow
          opacity-0 group-hover:opacity-100 transition z-20
        "
        aria-label="Add to cart"
      >
        <ShoppingCart className="w-5 h-5 text-black" />
      </button>

      <Link to={`/product/${product.id}`} className="block">
        <CardContent className="p-0 bg-[#f5f7f3]">
          <div className="flex items-center justify-center h-80">
            <img
              src={product.image}
              alt={product.name}
              className="h-64 object-contain"
            />
          </div>
        </CardContent>

        <CardHeader className="px-4 pt-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500 text-sm">{product.category}</p>
        </CardHeader>

        <CardFooter className="px-4 pt-2">
          <p className="text-green-700 font-bold text-md">
            ${product.price.toFixed(2)}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
