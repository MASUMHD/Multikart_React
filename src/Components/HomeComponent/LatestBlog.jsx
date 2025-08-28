
const blogPosts = [
  {
    id: 1,
    img: "/Ultikar images/imgi_38_2.png",
    date: "25 January 2018",
    title: "Lorem Ipsum Dolor Sit Consectetur Adipiscing Elit,",
    author: "John Dio",
    comments: 2,
  },
  {
    id: 2,
    img: "/Ultikar images/imgi_37_1.png",
    date: "25 January 2018",
    title: "Lorem Ipsum Dolor Sit Consectetur Adipiscing Elit,",
    author: "John Dio",
    comments: 2,
  },
  {
    id: 3,
    img: "/Ultikar images/imgi_39_3.png",
    date: "25 January 2018",
    title: "Lorem Ipsum Dolor Sit Consectetur Adipiscing Elit,",
    author: "John Dio",
    comments: 2,
  },
];

const LatestBlog = () => {
  return (
    <section className="px-4 lg:px-24 mt-20">
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
        {blogPosts.map((post) => (
          <div key={post.id} className="overflow-hidden">
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-72 object-cover transform transition-transform duration-500 hover:scale-110"
            />
            <div className="mt-6">
              <p className="text-teal-500 text-sm">{post.date}</p>
              <h3 className="text-xl font-bold text-gray-800 mt-2 hover:text-teal-500 cursor-pointer">
                {post.title}
              </h3>
              <p className="text-gray-500 text-base mt-2">
                by: {post.author} , {post.comments} Comment
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
