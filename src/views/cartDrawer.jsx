import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQty,
  decrementQty,
  removeFromCart,
} from "@/features/cartSlice";
import { cartUI } from "@/features/cartUi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const total = subtotal;

  useEffect(() => {
    return cartUI.subscribe(setOpen);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-96 flex flex-col h-full px-4">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto mt-4 flex flex-col gap-4">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => dispatch(decrementQty(item.id))}
                        className="w-6 h-6 flex items-center justify-center border rounded"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => dispatch(incrementQty(item.id))}
                        className="w-6 h-6 flex items-center justify-center border rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 font-bold text-xl"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        <div className="mt-4 flex flex-col gap-3 border-t pt-4">
          <div className="flex justify-between text-lg font-bold border-b pb-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            className="w-full bg-[#579535] hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition mb-2"
            onClick={() => navigate("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
