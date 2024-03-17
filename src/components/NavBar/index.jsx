import React, { useState } from "react";
import { menu, close, logo, logo_shoaib,svg } from "../../assets";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full h-[80px] z-10 bg-white drop-shadow-lg sticky top-0">
      <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto fixed ">
        <div className="flex items-center">
          <img
            src={logo_shoaib}
            alt="logo"
            className="sm:ml-10 ss:ml-10 md:ml-3  w-full h-[80px]"
          />
        </div>
        <div className="flex items-center ">
          <ul className="hidden md:flex">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex sm:mr-10 md:mr-10 ">
          <button className="border-none bg-transparent text-black mr-4">
            Login
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div
          className="md:hidden"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <img
            src={!toggle ? menu : close}
            alt="menu"
            className="w-[20px] h-[20px] object-contain mr-10"
          />
        </div>
      </div>
      <ul
        className={
          toggle ? "absolute bg-white w-full px-8  md:hidden " : "hidden"
        }
      >
        <li>Home</li>
        <li>About</li>
        <li>Support</li>
        <li>Platform</li>
        <li>Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-black mr-4  mb-4 py-3 px-8 ">
            Login
          </button>
          <button className="px-8 py-3 ">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
