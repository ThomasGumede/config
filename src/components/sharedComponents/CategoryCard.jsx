import React from "react";
import { FaSearch } from "react-icons/fa";

const CategoryCard = ({ img, name, onclick = () => alert("clickeddd") }) => {
  return (
    <div className="w-[] h-[] md:w-[396px] md:h-[370px] cursor-pointer relative group">
      <div>
        <img src={`${img}`} alt="" className="w-full h-[370px]" />
      </div>
      <div className="absolute bottom-7 left-0 w-min p-2 text-center bg-white opacity-70">
        <p className="text-lg text-black font-bold">{name}</p>
      </div>
      <div className="absolute flex items-center justify-center top-0 left-0 w-0 h-0 cursor-pointer bg-black opacity-70 transition-all duration-300 ease-linear group-hover:h-full group-hover:w-full">
        <div className="items-center hidden group-hover:flex justify-center border-[1px] border-gray-600 w-[40px] h-[40px] rounded-full md:w-[70px] md:h-[70px] transition-all duration-300 delay-700 ease-linear">
          <FaSearch onClick={onclick} className=" md:text-3xl text-white" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
