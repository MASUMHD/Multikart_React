import { useState } from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Share page/ProductCard";

const TopCategory = () => {
  const { products = [], isLoading, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState("FIRST AID SUPPLIES");

  const categories = ["FIRST AID SUPPLIES", "ORTHOPEDIC SUPPORTS"];

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading products</p>;

  return (
    <div className=" mt-16 mb-8 px-4">
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          TOP CATEGORY
        </h2>
        <div className="w-28 h-1 bg-teal-400 mx-auto mt-3 mb-4"></div>
      </div>

      {/* Categories */}
      <div className="flex items-center justify-center gap-6 pt-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm md:text-lg transition-colors duration-300 
              ${
                activeCategory === category
                  ? "text-teal-400"
                  : "text-gray-800 hover:text-teal-500"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products */}
      <section className="px-4 lg:px-24 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />  
          ))}
        </div>
      </section>
    </div>
  );
};

export default TopCategory;
