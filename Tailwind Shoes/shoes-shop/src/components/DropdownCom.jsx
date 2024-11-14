import { IoIosArrowDown } from "react-icons/io";
import React from "react";

export default function DropdownCom({ title, options }) {
  return (
    <div className="relative">
      <select
        defaultValue="" // which will helps to reset value empty and how title again
        className="appearance-none w-24 border border-gray-300 p-4 bg-white"
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0  pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
