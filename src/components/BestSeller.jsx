import React from "react";
import { SwiperSlide } from "swiper/react";
import Button from "./sharedComponents/Button";
import Card from "./sharedComponents/Card";
import HoriSlider from "./sharedComponents/HoriSlider";

const BestSeller = () => {
  return (
    <div className="flex flex-col overflow-hidden space-y-7 p-9 md:p-14 my-9 md:my-14 relative">
      <HoriSlider title="Our best seller">
        <SwiperSlide>
          <Card img='/img/m.jpg' descr="Hoo Doo Broo" price="R500"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card img='/img/bikins.jpg' descr="Hoo Doo Broo" price="R300"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card img='/img/m.jpg' descr="Hoo Doo Broo" price="R500"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card img='/img/m.jpg' descr="Hoo Doo Broo" price="R500"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card img='/img/m.jpg' descr="Hoo Doo Broo" price="R500"/>
        </SwiperSlide>
        <SwiperSlide>
          <Card img='/img/m.jpg' descr="Hoo Doo Broo" price="R500"/>
        </SwiperSlide>
      </HoriSlider>

      <div className="self-center z-50 text-center">
        <Button name="View more" />
      </div>
      <div className="absolute bottom-4 left-0">
        <h1 className="font-bold text-[#f9f9f9] text-[300px]">
          WeFashion
        </h1>
      </div>
    </div>
  );
};

export default BestSeller;
