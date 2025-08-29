import { FiHeart, FiStar, FiShield, FiTruck, FiUsers } from "react-icons/fi";

const Feature = () => {
  const features = [
    {
      id: 1,
      title: "Quality Medicines",
      desc: "We provide authentic and certified medicines for your better health.",
      icon: <FiShield className="text-3xl text-teal-500" />,
    },
    {
      id: 2,
      title: "Advanced Equipment",
      desc: "Modern medical equipment for accurate diagnosis and better treatment.",
      icon: <FiStar className="text-3xl text-teal-500" />,
    },
    {
      id: 3,
      title: "Trusted by Doctors",
      desc: "Recommended and trusted by top doctors & healthcare professionals.",
      icon: <FiHeart className="text-3xl text-teal-500" />,
    },
    {
      id: 4,
      title: "Fast Delivery",
      desc: "Get your medicines and equipment delivered quickly & safely.",
      icon: <FiTruck className="text-3xl text-teal-500" />,
    },
    {
      id: 5,
      title: "Customer Support",
      desc: "24/7 support for all your healthcare needs & medical guidance.",
      icon: <FiUsers className="text-3xl text-teal-500" />,
    },
  ];

  return (
    <section className="">
      <div className="bg-[#e8f7fc] py-12 md:py-16 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-teal-500">Features</span>
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Explore the key benefits of using our medical equipment <br className="hidden md:block" /> and medicine
          comment system. Designed for <br className="hidden md:block" /> patients, doctors, and clinics.
        </p>
      </div>

      <div className="mt-10 px-6 md:px-16 lg:px-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.id}
            className="border p-6 hover:shadow-lg transition"
          >
            <div className="flex items-center space-x-4">
              {f.icon}
              <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
            </div>
            <p className="mt-3 text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
