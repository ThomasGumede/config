import { useState } from "react";
import { CgMenuRight, CgMenuLeft } from "react-icons/cg";
import { FaOpencart, FaSearch } from "react-icons/fa";
import NavItem from "./sharedComponents/NavItem";

const Header = () => {
  const [show, setShow] = useState(false);

  const onclick = () => {
    show === false ? setShow(true) : setShow(false);
  };

  window.onscroll = () => {
    setShow(false);
  };

  return (
    <nav className="z-50 top-0 left-0 w-full px-2 py-3 md:px-10">
      <div className="flex items-center justify-between m-auto">
        {/* Logo */}
        <div className="text-center">
          <a
            href="http://"
            className="font-bold text-black font-sans2 text-2xl md:text-3xl"
          >
            WeFashion
          </a>
        </div>

        <ul
          className={`fixed top-0 z-50 bg-[#da6400] opacity-70 flex flex-col h-screen max-w-[370px] w-full items-center justify-center md:tablet 
          ${show === true ? "left-0" : "-left-full"} 
          transition-all duration-500 ease-linear`}
        >
          <NavItem href="#Home">Home</NavItem>
          <NavItem href="#Home">Categories</NavItem>
          <NavItem href="#Home">Trending</NavItem>
          <NavItem href="#Home">Blog</NavItem>

          {/* <li className="ml-7 my-4 md:my-0">
            
          </li> */}

          <li
            onClick={onclick}
            className="absolute top-5 right-8 text-3xl text-white md:hidden"
          >
            <CgMenuLeft
              onClick={onclick}
              className="absolute top-2 right-2 text-3xl text-white md:hidden"
            />
          </li>
        </ul>

        <div className="flex items-center space-x-6">
          <div
            className={`flex items-center p-2 justify-center space-x-6 border-[1px] border-gray-600 w-[40px] h-[40px] md:w-auto md:h-[50px] rounded-full transition-all duration-300 ease-linear`}
          >
            <FaSearch className="text-lg text-gray-600" />

            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="hidden md:block md:w-[270px] outline-none md:h-[40px] text-black text-base bg-transparent "
            />
          </div>

          <a
            href="#HOME"
            className="flex items-center justify-center border-[1px] border-gray-600 w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full transition-all duration-300 ease-linear"
          >
            <FaOpencart className="text-lg text-gray-600" />
          </a>
        </div>

        <CgMenuRight
          onClick={onclick}
          className={`text-3xl text-black md:hidden`}
        />
      </div>
    </nav>
  );
};

export default Header;
