import React from "react";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { cartUI } from "@/features/cartUi";

const CartButton = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQty = items.reduce((acc, i) => acc + i.qty, 0);

  return (
    <button
      onClick={() => cartUI.open()}
      className="
        fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg
        hover:bg-green-700 transition z-50
      "
    >
      <ShoppingCart className="w-6 h-6" />
      {totalQty > 0 && (
        <span className="absolute -top-1 -right-1 bg-white text-green-700 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
          {totalQty}
        </span>
      )}
    </button>
  );
};

export default CartButton;
