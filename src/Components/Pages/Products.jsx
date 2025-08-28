import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Share page/ProductCard";

const Products = () => {
  const { products, isLoading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>;

  // unique categories 
  const categories = ["all", ...new Set(products.map((item) => item.category))];

  // filter 
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // sorting 
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0; 
  });

  return (
    <div className="px-4 lg:px-32 mt-10">
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Filter by Category */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <SlidersHorizontal className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700 font-medium">Filter by:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="ml-2 border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Sort  */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-medium">Sort by:</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="ml-2 border border-gray-300 rounded-md px-3 py-1 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="latest">Latest</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
