import { useParams } from "react-router-dom";
import useBlogs from "../Hooks/useBlogs";
import { FaRegCalendarAlt, FaUser, FaRegComments } from "react-icons/fa";

const BlogDetails = () => {
  const { id } = useParams();
  const { blogPosts } = useBlogs();

  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) return <div className="text-center text-red-500 py-10">Blog post not found</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center leading-snug">
        {post.title}
      </h1>

      {/* Meta Info */}
      <div className="flex flex-wrap justify-center gap-6 text-gray-500 text-sm mt-4">
        <span className="flex items-center gap-2">
          <FaRegCalendarAlt className="text-teal-500" /> {post.date}
        </span>
        <span className="flex items-center gap-2">
          <FaUser className="text-teal-500" /> {post.author}
        </span>
        <span className="flex items-center gap-2">
          <FaRegComments className="text-teal-500" /> {post.comments} Comments
        </span>
      </div>

      {/* Image */}
      <div className="mt-8 overflow-hidden ">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-80 md:h-[28rem] object-cover transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Description */}
      <div className="mt-10 text-gray-700  text-base md:text-lg  ">
        {post.description}
      </div>
      <div className="mt-10 text-gray-700  text-base md:text-lg  ">
        <h1>
            <span className="font-bold">Crafting Memorable Visual Content:</span> Principles and Strategies
        </h1>
        <p className="mt-2">
            In today’s fast-paced digital world, visual content has become one of the most powerful tools for effective communication. Whether it’s a social media post, a website design, or a marketing campaign, the way visuals are structured can strongly influence how messages are perceived. Creating impactful content requires more than just choosing appealing images; it involves understanding principles of design and applying them thoughtfully.
        </p>
        <p className="mt-10">
            One of the fundamental aspects of compelling visual content is layout and composition. A well-organized layout ensures that the viewer’s attention flows naturally across the design, highlighting key messages without overwhelming the audience. Using techniques like the rule of thirds, symmetry, and balance allows designers to create harmony while keeping the focus on essential elements. Alongside this, visual hierarchy plays a crucial role in guiding the audience’s eyes toward the most important information first.
        </p>
        <p className="mt-10">
            Equally significant are color psychology and typography. Colors can evoke emotions and shape perceptions—for instance, blue conveys trust and calmness, while red suggests urgency or excitement. Pairing the right colors with a carefully selected typography style strengthens the tone and personality of the message. Fonts that are clear and aligned with the brand’s identity not only enhance readability but also add character to the design.
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
