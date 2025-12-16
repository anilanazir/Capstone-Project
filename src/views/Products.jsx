import { useState } from "react";
import { products } from "@/lib/staticData";
import ProductCard from "@/views/ProductCard";
import { Input } from "@/components/ui/input";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row justify-between gap-4">
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

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
