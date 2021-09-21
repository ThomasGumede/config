import React from "react";
import CategoryCard from "./sharedComponents/CategoryCard";

const Categories = () => {
  return (
    <div className="w-full space-y-7 my-7 md:my-14 p-7 md:p-14">
      <div>
        <h1 className="text-xl md:text-3xl font-bold text-black">
          Hot Categories
        </h1>
      </div>

      <div className="grid gap-y-7 justify-center items-center gap-x-7 sm:grid-cols-2 lg:grid-cols-3">
        <CategoryCard img="/img/dress.jpg" name="#Dresses" />
        <CategoryCard img="/img/shu.jpg" name="#Shoes" />
        <CategoryCard img="/img/t.jpg" name="#Tops" />
        <CategoryCard img="/img/bag.jpg" name="#Bags" />
        <CategoryCard img="/img/bikins.jpg" name="#Bikins" />

        <div className="w-[] h-[] md:w-[396px] md:h-[370px] cursor-pointer p-0 relative flex items-center justify-center">
          <div className="bg-[#da6400] flex justify-center items-center z-40 absolute w-full h-full top-0 opacity-50 left-0">
            <p
              onClick={() => alert("i was clicked")}
              className="text-2xl md:text-5xl text-white font-bold"
            >
              SEE ALL
            </p>
          </div>
          <img src="/img/more.jpg" alt="" className="w-full h-[370px]" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
