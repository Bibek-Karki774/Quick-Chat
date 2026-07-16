import React from "react";

const FloatingInput = ({ type = "text", name, label, value, onChange, error }) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm text-gray-600 mb-1">
        {label}
      </label>

      <input
        className={`w-full h-11 px-3 rounded-[7px] text-sm text-gray-700 bg-white
          border focus:outline-none
          ${error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-500"
          }`}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />

      <p className="text-red-500 text-xs min-h-4 mt-1">{error}</p>
    </div>
  );
};

export default FloatingInput;