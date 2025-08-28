import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    text: "Amazing product! Highly recommend it. Quality is top-notch and delivery was fast."
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    text: "Very useful and works as expected. Could improve packaging though."
  },
  {
    id: 3,
    name: "Ali Khan",
    rating: 5,
    text: "Excellent experience! Product matches the description perfectly."
  },
  {
    id: 4,
    name: "Maria Gomez",
    rating: 4,
    text: "Good value for money. The product is reliable and easy to use."
  },
  {
    id: 5,
    name: "David Lee",
    rating: 5,
    text: "Fantastic! I am extremely satisfied and will buy again."
  },
];

const ReviewsSection = () => {
  return (
    <div className=" px-4 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 ">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 border hover:shadow-xl transition"
          >
            {/* Rating */}
            <div className="flex items-center mb-2 text-yellow-400">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{review.name}</h3>
            {/* Text */}
            <p className="text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
