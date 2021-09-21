import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import HomeCard from "./sharedComponents/HomeCard";
import Button from "./sharedComponents/Button";

const Home = () => {
  SwiperCore.use([Navigation]);

  return (
    <div className="relative lg:bg-none bg-homeImage bg-no-repeat bg-center bg-cover  w-full bg-white px-7 md:px-14 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full h-screen">
        <div className="space-y-5 md:space-y-7 text-left z-40">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white lg:text-black">
              Fashion Trend <br />
              on 2021
            </h1>
          </div>

          <div className="mt-14">
            <Button link="/home" name="Explore more" />
          </div>
        </div>
        <div className="w-auto md:w-[630px] p-2 z-40 lg:block hidden">
          <Swiper
            spaceBetween={100}
            slidesPerView={1}
            speed={700}
            effect="cube"
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
          >
            <SwiperSlide>
              <HomeCard
                img="/img/g.jpg"
                number="01"
                descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit atque
          ad ex eveniet quis modi, sit accusamus soluta ratione aut impedit quae
          officia, voluptatum, cumque tenetur a aspernatur magnam!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeCard
                img="/img/m1.jpg"
                number="02"
                descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit atque
          ad ex eveniet quis modi, sit accusamus soluta ratione aut impedit quae
          officia, voluptatum, cumque tenetur a aspernatur magnam!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeCard
                img="/img/m.jpg"
                number="03"
                descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit atque
          ad ex eveniet quis modi, sit accusamus soluta ratione aut impedit quae
          officia, voluptatum, cumque tenetur a aspernatur magnam!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeCard
                img="/img/m2.jpg"
                number="04"
                descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit atque
          ad ex eveniet quis modi, sit accusamus soluta ratione aut impedit quae
          officia, voluptatum, cumque tenetur a aspernatur magnam!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeCard
                img="/img/m3.jpg"
                number="05"
                descr="Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit atque
          ad ex eveniet quis modi, sit accusamus soluta ratione aut impedit quae
          officia, voluptatum, cumque tenetur a aspernatur magnam!"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className=" hidden absolute bottom-6 right-4 z-40 w-[420px]  lg:flex items-center justify-between">
          <div>
            <BsArrowLeft className="text-white text-2xl md:text-5xl cursor-pointer prev" />
          </div>

          <div>
            <BsArrowRight className="text-white text-2xl md:text-5xl cursor-pointer next" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 hidden lg:block">
        <h1 className="font-bold text-[#f9f9f9] text-[100px] md:text-[300px]">
          Fashion
        </h1>
      </div>
      <div className="hidden lg:block absolute right-0 top-0 h-screen w-full md:w-[490px] bg-[#da6400]"></div>
    </div>
  );
};

export default Home;
