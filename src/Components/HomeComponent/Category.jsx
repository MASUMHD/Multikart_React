
const categories = [
  { name: "COVID", img: "/Ultikar images/COVID.png" },
  { name: "DIABETIC", img: "/Ultikar images/DIABETIC.png" },
  { name: "EYE CARE", img: "/Ultikar images/EYE CARE.png" },
  { name: "DIET", img: "/Ultikar images/DIET.png" },
  { name: "MOM & KIDS", img: "/Ultikar images/MOM & KIDS.png" },
  { name: "SKIN CARE", img: "/Ultikar images/SKIN CARE.png" },
];

const Category = () => {
  return (
    <section className="py-14 border-b">
      <div className="px-4 lg:px-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full border border-gray-300 group-hover:bg-teal-400 transition">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <p className="mt-4 font-bold text-sm text-gray-800 group-hover:text-teal-400 transition">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
