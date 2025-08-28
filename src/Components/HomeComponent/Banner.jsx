
const Banner = () => {
  const topRowImages = [
    { src: "/Ultikar images/imgi_22_1.png", alt: "Microscope" },
    { src: "/Ultikar images/imgi_23_2.png", alt: "Hand Gloves" },
  ];

  const bottomRowImages = [
    { src: "/Ultikar images/imgi_24_3.png", alt: "Injection" },
    { src: "/Ultikar images/imgi_25_4.png", alt: "Stethoscope" },
    { src: "/Ultikar images/imgi_26_5.png", alt: "Face Mask" },
  ];

  return (
    <section className="px-4 md:px-6 mt-10 bg-gray-50">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topRowImages.map((img, index) => (
          <div key={index} className="bg-blue-100 overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {bottomRowImages.map((img, index) => (
          <div key={index} className="bg-blue-100 overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
