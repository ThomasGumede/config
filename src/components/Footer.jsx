import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 space-y-7 md:space-y-0 xsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-between px-6 md:px-12 py-7 m-2 bg-[#da6400]">
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
            FAQ
          </a>
        </p>
      </div>
      <div className="block space-y-5">
        <p>
          <a href="/" className="text-lg font-semibold text-white">
           NewsLetter
          </a>
        </p>
        <p>
          <a href="/" className="text-base text-white">
            Subscribe To Our Newsletter
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
            FAQ
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
