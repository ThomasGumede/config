import React from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 space-y-7 md:space-y-0 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-7 items-center  md:justify-center px-6 md:px-12 py-7 m-2 bg-[#da6400]">
      <div className="flex flex-col items-start h-full justify-between">
        <div className="text-center">
          <a
            href="http://"
            className="font-bold text-white font-sans2 text-lg md:text-xl"
          >
            WeFashion
          </a>
        </div>

        <div>
          <p className="text-base text-white">C 2020 South Africa</p>
          <p className="text-base text-white">All RightS Reserved</p>
        </div>
      </div>
      <div className="block space-y-5">
        <p>
          <a href="/" className="text-lg font-semibold text-white">
            About Us
          </a>
        </p>
        <p>
          <a href="/" className="text-base text-white">
            Home
          </a>
        </p>
        <p>
          <a href="/" className="text-base text-white">
            Product
          </a>
        </p>
        <p>
          <a href="/" className="text-base text-white">
            Categories
          </a>
        </p>
        <p>
          <a href="/" className="text-base text-white">
            Blog
          </a>
        </p>
      </div>
      <div className="block space-y-5">
        <p>
          <a href="/" className="text-lg font-semibold text-white">
            Guide
          </a>
        </p>
        <p>
          <a href="/" className="text-base text-white">
            Terms & Conditions
          </a>
        </p>
        <p>
          <a href="/" className="text-base text-white">
            Special Offers
          </a>
        </p>
        <p>
          <a href="/" className="text-base text-white">
            Delivery Time
          </a>
        </p>
        <p>
          <a href="/" className="text-base font-medium text-[#e9e6e6]">
            FAQs
          </a>
        </p>
      </div>
      <div className="block space-y-5">
        <p>
          <a href="/" className="text-lg font-semibold text-white">
            NewsLetter
          </a>
        </p>

        <div className="space-y-4">
          <div>
            <p>
              <a href="/" className="text-base text-white">
                Subscribe To Our Newsletter
              </a>
            </p>
          </div>
          <div className="flex items-center justify-between p-3 h-11 bg-white">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="outline-none h-11 w-32 md:w-40 text-gray-600 p-3 bg-transparent"
            />
            <div className>
              <BsArrowRight className="text-[#da6400] text-xl cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-5 mt-5">
          <div>
            <FaTwitter className="text-white cursor-pointer text-xl" />
          </div>
          <div>
            <FaInstagram className="text-white cursor-pointer text-xl" />
          </div>
          <div>
            <FaYoutube className="text-white cursor-pointer text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
