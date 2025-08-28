import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = () => {
    Swal.fire({
      title: "Success!",
      icon: "success",
      draggable: true,
    });
  };
  return (
    <div className="">
      <div className="bg-[#e8f7fc] py-12 md:py-20 text-center px-4">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6">
          We’re here to assist you!
        </h2>
        <p className="text-gray-700 text-sm md:text-lg max-w-2xl mx-auto">
          Reach us out for inquiries, support, or feedback, and we’ll <br />{" "}
          give you prompt response.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center px-4 md:px-12 lg:px-28 py-12 ">
        {/* Left side - Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Have any Questions?
          </h2>
          <p className="text-gray-600 mb-8 text-base">
            Feel free to ask us anything. We're here to provide clarity and{" "}
            <br />
            assistance for all your inquiries.
          </p>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <div className="flex items-center border rounded-sm px-3">
                <FaUser className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2 outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Email
              </label>
              <div className="flex items-center border rounded-sm px-3">
                <FaEnvelope className="text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-3 py-2 outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <div className="flex items-start border rounded-sm px-3">
                <FaRegCommentDots className="text-gray-400 mt-3" />
                <textarea
                  rows="4"
                  placeholder="Type Your Message"
                  className="w-full px-3 py-2 outline-none resize-none"
                />
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleSubmit}
              type="button"
              className="bg-teal-400 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-teal-500 hover:scale-110 duration-300 transition"
            >
              Send a Message
            </button>
          </form>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/8Pd9b43x/imgi-2-Hi-Touch-Plastic-Gloves.png"
            alt="Contact Illustration"
            className="w-full max-w-md object-cover transform transition-transform duration-500 hover:scale-110 cursor-pointer "
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
