import { FaTruck, FaClock, FaBullhorn, FaCreditCard } from "react-icons/fa";

const shippingFeatures = [
  {
    id: 1,
    icon: <FaTruck className="text-teal-500 text-5xl transform transition-transform duration-500 hover:scale-110" />,
    title: "Free Shipping",
    description: "Free Shipping World Wide",
  },
  {
    id: 2,
    icon: <FaClock className="text-teal-500 text-5xl transform transition-transform duration-500 hover:scale-110" />,
    title: "24 X 7 Service",
    description: "Online Service For 24 X 7",
  },
  {
    id: 3,
    icon: <FaBullhorn className="text-teal-500 text-5xl transform transition-transform duration-500 hover:scale-110" />,
    title: "Festival Offer",
    description: "New Online Special Festival Offer",
  },
  {
    id: 4,
    icon: <FaCreditCard className="text-teal-500 text-5xl transform transition-transform duration-500 hover:scale-110" />,
    title: "Online Payment",
    description: "New Online Special Festival Offer",
  },
];

const Shipping = () => {
  return (
    <section className="px-4 lg:px-24 mt-14">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shippingFeatures.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center bg-gray-100 p-6 overflow-hidden"
          >
            {feature.icon}
            <div className="ml-4">
              <h3 className="text-lg font-semibold hover:text-teal-500">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shipping;
