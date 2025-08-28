import { FaRegCalendarAlt, FaUser, FaRegComments } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="overflow-hidden">
      {/* Image */}
      <div className="overflow-hidden">
        <Link to={`/blog/${post.id}`}>
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-72 object-cover transform transition-transform duration-500 hover:scale-110 cursor-pointer"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="mt-7">
        {/* Date */}
        <p className="text-teal-500 text-sm flex items-center gap-2">
          <FaRegCalendarAlt /> {post.date}
        </p>

        {/* Title */}
        <Link to={`/blog/${post.id}`}>
          <h3 className="text-xl font-bold text-gray-800 mt-3 hover:text-teal-500 cursor-pointer">
            {post.title}
          </h3>
        </Link>

        {/* Author & Comments */}
        <div className="flex items-center gap-5 mt-3 text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <FaUser /> {post.author}
          </span>
          <span className="flex items-center gap-1">
            <FaRegComments /> {post.comments} Comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
