import React from "react";
import CategoryCard from "./sharedComponents/CategoryCard";
import HoriSlider from "./sharedComponents/HoriSlider";
import { SwiperSlide } from "swiper/react";

const InstaPosts = () => {
  return (
    <div className="flex flex-col overflow-hidden space-y-7 p-7 md:p-14 my-7 md:my-14 relative">
      <HoriSlider title="Follow Our Instagram">
        <SwiperSlide>
          <CategoryCard img="/img/dress.jpg" name="#Dresses" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard img="/img/shu.jpg" name="#Shoes" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard img="/img/shu.jpg" name="#Shoes" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard img="/img/shu.jpg" name="#Shoes" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard img="/img/shu.jpg" name="#Shoes" />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCard img="/img/shu.jpg" name="#Shoes" />
        </SwiperSlide>
      </HoriSlider>

      <div className="absolute bottom-4 left-0">
        <h1 className="font-bold text-[#f9f9f9] text-[300px]">WeFashion</h1>
      </div>
    </div>
  );
};

export default InstaPosts;
