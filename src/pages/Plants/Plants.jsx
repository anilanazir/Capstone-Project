import { useState } from "react";
import { products } from "@/lib/staticData";
import ProductCard from "@/views/ProductCard";
import Pagination from "@/views/Pagination";

const ITEMS_PER_PAGE = 9;

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="bg-[#f6f7f5] py-16">
      <div className="max-w-6xl mx-auto bg-white px-8 py-10">
        <p className="text-sm text-gray-500 mb-4">Home / Shop</p>

        <p className="text-sm text-gray-500 mb-10">
          Showing {startIndex + 1}–
          {Math.min(startIndex + ITEMS_PER_PAGE, products.length)} of{" "}
          {products.length} results
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </section>
  );
};

export default Shop;
