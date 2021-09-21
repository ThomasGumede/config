import React from "react";

const Sale = () => {
  return (
    <div className="bg-heroImage object-cover w-full h-[500px] flex justify-center items-center">
      <div className="py-9 px-16 md:px-28 flex flex-col  justify-center items-center border-2 space-y-7 border-white">
        <h1 className="font-sans text-xl text-white">#WESHOPFESTIVAL</h1>
        <div className="w-[200px] md:w-[360px]">
          <h3 className="font-sans text-2xl md:text-5xl text-white font-semibold">
            UP TO 45% OFF ALL ITEM SALE
          </h3>
        </div>

        <div className="">
          <a
            href="/"
            className="z-50 text-black flex items-center justify-center text-sm md:text-base w-24 md:w-36 hover:bg-transparent hover:text-white border-2 border-white bg-white p-2 transition-all duration-300 ease-linear"
          >
            Shop now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sale;
