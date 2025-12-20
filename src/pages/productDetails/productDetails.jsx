import { useParams } from "react-router-dom";
import { products } from "@/lib/staticData";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cartSlice";
import { cartUI } from "@/features/cartUi";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <p className="text-center py-20">Product not found</p>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    cartUI.open();
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12">
      <div className="bg-[#f5f7f3] rounded-xl p-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-[400px] object-contain"
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-6">{product.category}</p>
        <p className="text-gray-600 mb-6">{product.Description}</p>

        <p className="text-2xl font-semibold text-[#5C9735] mb-6">
          ${product.price}
        </p>

        <Button
          onClick={handleAddToCart}
          className="bg-[#5C9735] hover:bg-green-700 text-white px-6 py-6  text-lg"
        >
          Add to Cart
        </Button>
      </div>
    </section>
  );
};

export default ProductDetails;
