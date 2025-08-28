import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    img: "../../../public/imgi_4_Female Doctor Hospital Mask Free PNG (1)-min.png",
    subtitle: "Protective Face Mask",
    title: "Put Your Mask To Use To Safeguard Your Family",
    desc: "Wearing a face mask has become an important part of our daily lives. Face masks help protect us and others from spreading germs, especially during times of illness or pandemics.",
    button: "Discover Now",
  },
  {
    id: 2,
    img: "../../../public/imgi_4_Female Doctor Hospital Mask Free PNG (1)-min.png",
    subtitle: "Protective Face Mask",
    title: "Stay Safe And Keep Your Loved Ones Protected",
    desc: "Face masks reduce the risk of infections and safeguard people in crowded places. A simple precaution can save lives during uncertain times.",
    button: "Discover Now",
  },
  {
    id: 3,
    img: "../../../public/imgi_4_Female Doctor Hospital Mask Free PNG (1)-min.png",
    subtitle: "Protective Face Mask",
    title: "High Quality Mask For Everyday Protection",
    desc: "Our masks are designed with comfort and safety in mind. Protect yourself with built-in nose clips and high-quality ear loops.",
    button: "Discover Now",
  },
];

const Slider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-20 lg:px-28 py-5 md:py-0 bg-[#f4fafc]">
              {/* Left Content */}
              <div className="space-y-3 md:space-y-6 text-center md:text-left">
                <p className="text-teal-500 italic font-medium text-lg md:text-xl">
                  {slide.subtitle}
                </p>
                <h1 className="text-3xl md:text-5xl font-extrabold md:font-bold text-gray-900 leading-snug">
                  {slide.title}
                </h1>
                <p className="text-gray-600 text-base pb-4 md:pb-0 md:text-lg max-w-xl">
                  {slide.desc}
                </p>

                <button className="relative bg-teal-400 text-white hover:shadow-lg hover:text-black hover:font-normal font-semibold px-8 py-3  ">
                  Discover Now
                  <span className="absolute inset-0 border-2 border-teal-400 translate-x-[6px] translate-y-[6px] "></span>
                </button>

                <div className="absolute top-80 left-2 md:left-[690px] hidden lg:flex flex-col items-center">
                  <div className="w-14 h-14 p-2 rounded-full border-2 border-teal-500 flex items-center justify-center text-teal-500 text-2xl">
                    <img
                      src="../../../public/Ultikar images/COVID.png"
                      alt=""
                    />
                  </div>
                  <p className="text-sm mt-2 font-medium">
                    Built In Nose <br /> Bridge Clip
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center relative mt-10 md:mt-0">
                <div className="w-72 h-80 md:w-80 md:h-80 lg:w-96 lg:h-[500px] rounded-lg overflow-hidden ">
                  <img
                    src={slide.img}
                    alt="Mask"
                    className="h-full w-full object-co"
                  />
                </div>

                {/* Floating Labels */}
                <div className="absolute top-10 md:top-20 left-2 md:left-10 flex flex-col items-center">
                  <div className="w-14 h-14 p-2 rounded-full border-2 border-teal-500 flex items-center justify-center text-teal-500 text-2xl">
                    <img
                      src="../../../public/Ultikar images/SKIN CARE.png"
                      alt=""
                    />
                  </div>
                  <p className="text-xs md:text-sm mt-2 font-medium">
                    Soft & Breathable <br /> Material
                  </p>
                </div>
                <div className="absolute top-14 md:top-40 right-2 md:right-10 flex flex-col items-center">
                  <div className="w-14 h-14 p-2 rounded-full border-2 border-teal-500 flex items-center justify-center text-teal-500 text-2xl">
                    <img
                      src="../../../public/Ultikar images/DIABETIC.png"
                      alt=""
                    />
                  </div>
                  <p className="text-xs md:text-sm mt-2 font-medium">
                    High Quality <br /> Ear Loops
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
