import React from "react";
import { FaOpencart, FaSearch } from "react-icons/fa";

const Card = ({ img, descr, price }) => {
  const addToCart = () => alert("Added to cart");

  return (
    <div className="relative flex flex-col items-center sm:w-60 md:w-80 justify-center transition-all duration-300 ease-linear group">
      <img src={img} alt="" className="w-80 h-[480px]" />
      <div className="absolute flex items-center justify-center top-0 left-0 w-0 h-0 cursor-pointer bg-black opacity-70 transition-all duration-300 ease-linear group-hover:h-[480px] group-hover:w-full">
        <div className="items-center hidden group-hover:flex justify-center border-[1px] border-gray-600 w-[40px] h-[40px] rounded-full md:w-[70px] md:h-[70px] transition-all duration-300 delay-700 ease-linear">
          <FaOpencart
            onClick={addToCart}
            className="text-xl md:text-3xl text-white"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center h-16 md:h-20 p-5 bg-white opacity-80">
        <p className="text-gray-600 text-lg md:text-xl">{descr}</p>
        <p className="text-lg md:text-xl font-bold text-black">{price}</p>
      </div>
    </div>
  );
};

export default Card;
