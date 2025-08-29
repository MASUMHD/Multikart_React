import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const handleClick = () => {
    Swal.fire({
      title: "Success!",
      icon: "success",
      draggable: true,
    });
  };
  return (
    <div className="border hover:shadow-lg transition duration-300 p-4 relative  ">
      {/* Discount Badge */}
      {product.discount && (
        <span className="absolute top-3 left-3 bg-teal-400 text-white text-xs font-bold px-2 py-1 rounded-full">
          {product.discount}
        </span>
      )}

      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover mb-4"
        />
      </Link>

      {/* Product Name */}
      <Link to={`/product/${product.id}`}>
        <h2 className="text-gray-800 hover:text-teal-500 text-lg truncate">
          {product.name}
        </h2>
      </Link>

      {/* Rating */}
      <div className="flex items-center text-yellow-400 my-1">
        {Array.from({ length: product.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
        <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
      </div>

      {/* Price */}
      <div className="text-lg font-semibold text-gray-400">
        ${product.price.toFixed(2)}
        {product.oldPrice && (
          <span className="text-sm text-gray-400 line-through ml-2">
            ${product.oldPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Add to Cart */}
      <button
        onClick={handleClick}
        className="w-full mt-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
