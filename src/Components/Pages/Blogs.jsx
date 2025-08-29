import useBlogs from "../Hooks/useBlogs";
import BlogCard from "../Share page/BlogCard";

const Blogs = () => {
  const { blogPosts, isLoading, error } = useBlogs();

  if (isLoading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        Error loading blog posts
      </div>
    );

  return (
    <div>
      <div className="bg-[#e8f7fc] py-16 px-6 md:px-20 bg-[url('https://i.postimg.cc/pTkq3cf6/imgi-11-blogs4-removebg-preview.png')] bg-no-repeat bg-right bg-contain">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text- p-6 ">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our's <span className="text-teal-500">Blogs</span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              Discover insights, guides, and industry updates on innovative
              disposable medical products. From selecting the right gloves to
              understanding material <br className="hidden md:block" /> quality,
              our blogs help you make informed decisions for{" "}
              <br className="hidden md:block" /> safer and more efficient
              healthcare practices.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 lg:px-28 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
