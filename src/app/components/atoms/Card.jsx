import React from "react";

const Card = ({ no, title, description, className, noBgColor }) => {
  const dynamicNoColor = "text-gray-800"; 

  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col items-center justify-start text-center ${className} w-full max-w-[280px] mx-auto sm:mx-0`}
    >
      <div
        className={`w-16 h-16 mb-4 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-extrabold 
        ${noBgColor} ${dynamicNoColor} border border-gray-200 shadow-xl`}
      >
        {no}
      </div>

      <h1 className="font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug mb-2 text-gray-800">
        {title}
      </h1>

      <p className="font-medium text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};

export default Card;
