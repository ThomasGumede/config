import React from "react";
// import {Link} from 'react-router-dom'

const Button = ({link, name}) => {
  return (
    <div className="">
        <a href={`${link}`} className="z-50 text-white flex items-center justify-center w-28 text-sm md:text-base md:w-36 hover:bg-transparent hover:text-[#da6400] border-2 border-[#da6400] bg-[#da6400] p-2 transition-all duration-300 ease-linear">
            {name}
        </a>
    </div>
  );
};

export default Button;
