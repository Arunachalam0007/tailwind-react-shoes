import nikeimg1 from "../assets/n1-min.png";
import React from "react";
import DropdownCom from "./DropdownCom";

export default function ShoesDetailsCom() {
  return (
    <div className="flex flex-col md:flex-row-reverse space-y-4">
      <div className="flex-1 lg:-mt-32 lg:ml-28  ">
        <div className="lg:h-full flex-center bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={nikeimg1} className=" animate-float"></img>
        </div>
      </div>
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">Nike Air Max 270</div>
        <div className="font-medium  md:text-xl">
          The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads
          with its vibrant color gradient.
        </div>
        <div className="flex space-x-6">
          <div className="font-extrabold text-3xl md:text-6xl">160 $</div>
          <DropdownCom title={"QTY"} options={[1, 2, 3, 4, 5, 6]}></DropdownCom>
          <DropdownCom
            title={"SIZE"}
            options={[41, 42, 43, 44, 45, 45, 47]}
          ></DropdownCom>
        </div>
        <div className="space-x-10">
          <button className="btn-ani h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            Add to bag
          </button>
          <a
            href="#"
            className="font-bold text-lg underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
