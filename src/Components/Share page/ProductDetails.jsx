import { useState } from "react";
import { useParams } from "react-router-dom";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import useProducts from "../Hooks/useProducts";
import ReviewsSection from "./ReviewsSection";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, isLoading, error } = useProducts();
  const [count, setCount] = useState(1);

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <p className="text-center py-10">Product not found!</p>;

  const handleClick = () => {
    Swal.fire({
      title: "Success!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-10 lg:px-24 mt-5">
        {/* Left Side - Image */}
        <div className="md:w-1/2 h-1/2 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md  object-cover"
          />
        </div>

        {/* Right Side - Details */}
        <div className="md:w-1/2 flex flex-col mt-0 lg:mt-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3">
            {product.name}
          </h2>

          {/* Rating */}
          <div className="flex items-center text-yellow-400 mb-3">
            {Array.from({ length: product.rating || 0 }).map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-gray-600 text-sm ml-2">
              ({product.reviews || 0} Reviews)
            </span>
          </div>

          {/* Price */}
          <div className="text-2xl font-semibold text-teal-500 mb-4">
            ${product.price?.toFixed(2) || "0.00"}
            {product.oldPrice && (
              <span className="text-lg text-gray-400 line-through ml-3">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Quantity & Buttons */}
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center border rounded-sm px-3 py-2">
              <button
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                className="text-gray-600 hover:text-black"
              >
                <FaMinus />
              </button>
              <span className="mx-4 text-lg">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="text-gray-600 hover:text-black"
              >
                <FaPlus />
              </button>
            </div>

            <button
              onClick={handleClick}
              className="bg-teal-500 text-white px-6 py-2 rounded-sm hover:bg-teal-600 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleClick}
              className="bg-black text-white px-6 py-2 rounded-sm hover:bg-gray-800 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 lg:px-24 mt-10 mb-4">
        <hr className=" border-gray-300 " />
      </div>
      {/* reviews */}
      <div>
        <ReviewsSection />
      </div>
    </div>
  );
};

export default ProductDetails;
