import React from "react";
import { axiosObj } from "../lib/axios";

const FloatingInput = ({ type = "text", name, label, value, onChange }) => {
    
  return (
    <div className="relative w-full h-11">
      <input
        className="peer mt-3 pl-2 rounded-[7px]  text-sm text-gray-700 focus:outline-none focus:border-blue-500 w-full h-full border border-gray-300
         bg-white "
        type={type}
        name={name}
        id={name}
        placeholder=" "
        onChange = {onChange}
      />

      <label
        htmlFor={name}
        className="absolute left-3 top-[76%] -translate-y-1/2 text-gray-400 text-sm
        bg-white
         transition-all
    duration-300
    ease-in-out
    
    peer-focus:top-3 peer-focus:text-xs peer-focus:text-blue-500 peer-focus:z-1 peer-not-placeholder-shown:top-0 peer-[&:not(:placeholder-shown)]:text:xs"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
