import React from "react";
import Button from "./sharedComponents/Button";

const Explore = () => {
  return (
    <div className="relative space-y-6 md:space-y-0 w-full my-9 md:my-14 overflow-hidden md:space-x-10 p-8 lg:p-14 flex flex-col md:flex-row items-center justify-center">
      <div className="relative w-64 h-80 md:w-[460px] md:h-[650px]">
        <img
          src="/img/m2.jpg"
          alt=""
          className="z-40 absolute bottom-20 -left-9 w-20 h-28 md:w-[160px] md:h-[250px]"
        />
        <img
          src="/img/m1.jpg"
          alt=""
          className="z-40 w-64 h-80 md:w-[460px] md:h-[650px]"
        />
      </div>
      <div></div>

      <div className="z-40 md:w-[500px] space-y-4 md:space-y-7 text-left">
        <div>
          <h1 className="font-bold text-2xl md:text-5xl text-black">
            Explore Our New Collection
          </h1>
        </div>
        <div>
          <p className="z-30 text-black text-base font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
            impedit enim itaque? Sint accusamus, a blanditiis quibusdam
            praesentium suscipit laborum facilis aliquid accusantium sed
            molestias at recusandae optio! Culpa, at!
          </p>
        </div>
        <div>
          <Button link="/home" name="Explore more" />
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2">
        <h1 className="font-bold text-[#f9f9f9] text-[100px] md:text-[300px]">
          WeFashion
        </h1>
      </div>
    </div>
  );
};

export default Explore;
