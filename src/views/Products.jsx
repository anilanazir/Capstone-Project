import React, { useState } from "react";
import { products } from "@/lib/staticData";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShoppingCart } from "lucide-react";
import { cartUI } from "@/features/cartUi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import { Link } from "react-router-dom";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">New Plants</h2>

          <div className="w-full md:w-80">
            <Input
              placeholder="Search plants..."
              className="border-gray-300 py-3"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Card
              key={item.id}
              className="rounded-xl overflow-hidden shadow-md bg-[#f5f7f3] group relative"
            >
              <button
                type="button"
                onClick={() => {
                  dispatch(addToCart(item));
                  cartUI.open();
                }}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow opacity-0 group-hover:opacity-100 transition z-20"
              >
                <ShoppingCart className="w-5 h-5 text-black" />
              </button>

              <CardContent className="p-0">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-80 object-contain"
                  />
                </Link>
              </CardContent>

              <CardHeader className="">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.description}</p>
              </CardHeader>

              <CardFooter className="pb-2">
                <p className="text-green-700 font-bold text-md">
                  ${item.price}
                </p>
              </CardFooter>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Products;
