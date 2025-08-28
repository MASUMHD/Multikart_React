import { MdChevronLeft, MdChevronRight, MdStar } from "react-icons/md";
import useProducts from "../Hooks/useProducts";

const FeatureProduct = () => {
  const { products = [], isLoading, error } = useProducts();

  const featureProducts = products.filter(
    (p) => p.category === "Feature Product"
  );
  const onSellProducts = products.filter((p) => p.category === "On Sell");

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <MdStar
          key={i}
          className={`text-xl ${
            i <= count ? "text-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  const renderProductCard = (product) => (
    <div key={product.id} className="flex items-center p-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-24 h-24 object-contain"
      />
      <div className="ml-4">
        <div className="flex">{renderStars(product.rating)}</div>
        <p className="font-semibold text-base mb-1">{product.name}</p>
        <p className="text-green-600 font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );

  if (isLoading)
    return <p className="text-center mt-10">Loading products...</p>;
  if (error)
    return (
      <p className="text-center text-red-500 mt-10">Error loading products</p>
    );

  return (
    <section className="px-4 lg:px-20 mt-20 grid lg:grid-cols-4 gap-6">
      {/* Left Banner */}
      <div className="text-center">
        <img
          src="/Ultikar images/imgi_27_6.png"
          alt="Ultrasound"
          className="h-[450px] w-full mx-auto object-cover"
        />
      </div>

      {/* Feature Products */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">FEATURE PRODUCT</h3>
          <div className="flex space-x-2">
            <MdChevronLeft size={24} className="text-gray-500 cursor-pointer" />
            <MdChevronRight
              size={24}
              className="text-gray-500 cursor-pointer"
            />
          </div>
        </div>

        <hr className="my-4" />

        <div className="space-y-3">
          {featureProducts.map((product) => renderProductCard(product))}
        </div>
      </div>

      {/* Middle Banner */}
      <div className="text-center">
        <img
          src="/Ultikar images/imgi_34_7.png"
          alt="Middle Banner"
          className="h-[450px] w-full mx-auto object-cover"
        />
      </div>

      {/* On Sell Products */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">ON SELL</h3>
          <div className="flex space-x-2">
            <MdChevronLeft size={24} className="text-gray-500 cursor-pointer" />
            <MdChevronRight
              size={24}
              className="text-gray-500 cursor-pointer"
            />
          </div>
        </div>

        <hr className="my-4" />

        <div className="space-y-3">
          {onSellProducts.map((product) => renderProductCard(product))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
