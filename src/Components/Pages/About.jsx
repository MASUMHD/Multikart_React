import { FaBoxes, FaBolt, FaCheckCircle, FaTruck } from "react-icons/fa";
import CountUp from "react-countup";
import { FaDollarSign, FaHeadset, FaLeaf } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaTruck className="text-3xl text-white" />,
      title: "Quality Assurance",
      desc: "We implement strict quality control measures at every stage, ensuring our products meet high industry standards and client expectations.",
    },
    {
      icon: <FaDollarSign className="text-3xl text-white" />,
      title: "Innovation-Driven Approach",
      desc: "Our team continually researches and adopts the latest technologies, enhancing our product offerings and addressing emerging healthcare needs effectively.",
    },
    {
      icon: <FaHeadset className="text-3xl text-white" />,
      title: "Customer-Centric Focus",
      desc: "We actively engage with our customers to understand their requirements, allowing us to tailor our solutions for optimal satisfaction and impact.",
    },
    {
      icon: <FaLeaf className="text-3xl text-white" />,
      title: "Sustainable Practices",
      desc: "We commit to environmentally friendly practices, utilising recyclable materials and sustainable methods in our production processes to minimise our ecological footprint.",
    },
  ];
  return (
    <div className="">
      <div className="bg-[#e8f7fc] py-12 md:py-14 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About <span className="text-teal-500">Us</span>
        </h1>
         <p className="text-gray-700 text-sm md:text-lg max-w-2xl mx-auto">
          Reach us out for inquiries, support, or<br className="hidden md:block" /> feedback,  and we’ll give you<br className="hidden md:block" />
          prompt response.
        </p>
      </div>
      <div className="px-6 lg:px-28">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl  font-bold leading-tight text-gray-900">
                Meet Our Dedicated Team <br className="hidden md:block" /> of Innovators
              </h2>

              <p className="mt-6 text-base sm:text-lg text-gray-700 leading-8">
                At Specular Healthcare, our dynamic team of young professionals
                brings innovation and expertise to the forefront, driving our
                mission to deliver high-quality disposable surgical equipment
                that meets the evolving needs of healthcare organisations across
                India. We are committed to fostering a culture of collaboration
                and continuous improvement, ensuring that our products not only
                adhere to industry standards but also exceed our customers'
                expectations.
              </p>
            </div>

            {/* Image */}
            <div className="w-full">
              <img
                src="https://i.postimg.cc/fTqnQLZx/imgi-2-dg-3-Copy.png"
                alt="Medical gloves"
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-110 cursor-pointer"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3">
                <FaBoxes className="text-teal-500 text-2xl flex-shrink-0" />
                <p className="text-5xl font-semibold text-teal-500">
                  <CountUp end={120} duration={2} />+
                </p>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Product Variants Manufactured
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                From gloves and aprons to drapes and masks, crafted to meet
                diverse healthcare needs.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <FaBolt className="text-teal-500 text-2xl flex-shrink-0" />
                <p className="text-5xl font-semibold text-teal-500">
                  <CountUp end={2} duration={1.5} />X
                </p>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Faster Order Fulfillment
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                Compared to standard market timelines, thanks to in-house
                production and ready stock.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-teal-500 text-2xl flex-shrink-0" />
                <p className="text-5xl font-semibold text-teal-500">
                  <CountUp end={99} duration={2} />%
                </p>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Compliance Accuracy
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                Products pass stringent quality checks as per ISO and CE
                medical-grade standards.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <FaTruck className="text-teal-500 text-2xl flex-shrink-0" />
                <p className="text-5xl font-semibold text-teal-500">
                  <CountUp end={4} duration={1.5} />K
                </p>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                Units Supplied Monthly
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                Distributed across hospitals, labs, and clinics throughout India
                and overseas.
              </p>
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How We Work
            </h2>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-7">
              At Specular Healthcare, we prioritise quality, efficiency, and
              customer <br className="hidden md:block" /> satisfaction in every
              aspect of our operations to ensure{" "}
              <br className="hidden md:block" />
              exceptional products and services.
            </p>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-teal-400 shadow-inner mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Buy Our Products */}
        <div className=" py-5 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex justify-center ">
            <img
              src="https://i.postimg.cc/YSDBMC1c/imgi-4-mg3-1.png"
              alt="Gloves"
              className="w-full max-w-lg object-cover transform transition-transform duration-500 hover:scale-110 cursor-pointer"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-5">
              How to Buy Our Products
            </h2>
            <p className="text-gray-600 mb-6">
              Discover a seamless purchasing experience at Specular Healthcare.
              Follow <br className="hidden md:block" /> these easy steps to
              order your desired products today!
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="bg-teal-400 text-white  font-bold rounded-full h-8 w-8 flex items-center justify-center">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-800">
                    Browse Our Website
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Explore our extensive range of high-quality disposable{" "}
                    <br className="hidden md:block" />
                    surgical equipment available on our website.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-teal-400 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-800">
                    Select Your Products
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Choose the items you need, specifying the quantity{" "}
                    <br className="hidden md:block" /> and size as required.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="bg-teal-400 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-800">
                    Checkout Securely
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We ensure prompt delivery of your orders to minimize waiting{" "}
                    <br className="hidden md:block" />
                    Complete your purchase using our secure payment{" "}
                    <br className="hidden md:block" /> options for a hassle-free
                    transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col lg:flex-row justify-between gap-6">
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-800">
                  Fast and Reliable Delivery
                </h3>
                <p className="text-gray-600 text-sm">
                  We ensure prompt delivery of your orders to <br /> minimize
                  waiting time and enhance satisfaction.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-800">
                  Support team is available 24/7
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <FaPhoneAlt size={20} className="text-teal-500" />
                  <p className="text-gray-700 text-base font-medium">
                    +91 9129916699
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold text-lg mb-1 text-gray-800">
                Happy Customers
              </h3>
              <p className="text-2xl font-bold text-teal-500">
                <CountUp end={1200} duration={3} />+
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
