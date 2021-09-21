import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
// import Button from "./Button";

const HoriSlider = ({ title, children }) => {
  SwiperCore.use([Navigation]);

  return (
    <div className="text-center space-y-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-3xl font-bold text-black">{title}</h2>
        <div className="md:flex items-center space-x-6 hidden">
          <div>
            <BsArrowLeft className="text-[#da6400] text-5xl cursor-pointer prev" />
          </div>

          <div>
            <BsArrowRight className="text-[#da6400] text-5xl cursor-pointer next" />
          </div>
        </div>
      </div>

      <Swiper
        
        slidesPerView={1}
        speed={800}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        breakpoints={{
          400: {
            slidesPerView: 1.1,
            spaceBetween: 3,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 3,
          },

          1000: {
            slidesPerView: 2.5,
            spaceBetween: 100
          },

          1200: {
            slidesPerView: 3.3,
            spaceBetween: 100
          },

          1400: {
            slidesPerView: 4,
          },

          1700: {
            slidesPerView: 4.3,
          },

          1800: {
            slidesPerView: 5,
          },
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};

export default HoriSlider;
