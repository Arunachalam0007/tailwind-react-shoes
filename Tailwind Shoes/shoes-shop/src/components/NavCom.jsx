import { TbShoppingBag } from "react-icons/tb";
import { useState } from "react";
import React from "react";
import NIKELOGO from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import ShoesDetailsCom from "./ShoesDetailsCom";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export default function NavCom() {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(false);

  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
      {/*  LOGO  */}
      <a href="#">
        <NIKELOGO class="h-20 w-20" />
      </a>

      {/*  Hamburger Menu  */}
      <button
        onClick={() => setIsMobileMenuShow(!isMobileMenuShow)}
        className=" lg:hidden rounded-lg p-2 hover:bg-gray-200 focus:ring-2 focus:ring-grey-400"
      >
        <RxHamburgerMenu size={24}></RxHamburgerMenu>
      </button>

      {/*  Menu List  */}
      <div className={`${isMobileMenuShow && "hidden"} w-full lg:w-auto`}>
        <ul className=" lg:space-x-8 border border-gray-100 rounded-lg text-lg p-4  bg-gray-50 lg:flex flex-row lg:bg-transparent lg:border-transparent">
          {ROUTES.map((route, i) => {
            return (
              <li
                key={{ i }}
                className={`rounded cursor-pointer px-3 py-2 ${
                  i === 0
                    ? " bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-200 lg:hover:bg-transparent lg:hover:text-blue-500"
                } ${(i === 3 || i == 4) && "lg:text-white"}`}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Shopping Cart  */}
      <div className="cursor-pointer fixed left-4 bottom-4 lg:static lg:mr-4">
        <div className="btn-ani flex-center rounded-full bg-white h-12 w-12 shadow-md ">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
