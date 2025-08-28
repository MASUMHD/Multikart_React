import useBlogs from "../Hooks/useBlogs";
import BlogCard from "../Share page/BlogCard";

const LatestBlog = () => {
  const { blogPosts, isLoading, error } = useBlogs();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog posts</div>;

  return (
    <div className="px-4 lg:px-24 mt-20">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <p className="text-teal-500 text-lg">Recent Story</p>
        <h2 className="text-3xl md:text-4xl mt-1 font-bold text-gray-800">
          LATEST BLOG
        </h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto mt-2"></div>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
