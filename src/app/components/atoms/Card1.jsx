import Image from "next/image";
import React from "react";

const Card1 = ({ img, title }) => {
  return (
    <div
      className="
        flex flex-col sm:flex-row items-center justify-center 
        p-4 sm:p-6 md:p-8 
        mx-auto
        group transition-all duration-300 cursor-pointer 
        max-w-[320px] sm:max-w-none
      "
    >
     
      <div className="relative transition-transform duration-300 group-hover:-translate-x-4 sm:group-hover:-translate-x-6">
       
        <div className="rounded-full p-2 bg-gray-300"> 
          <Image
            src={img}
            alt={title}
            height={140}
            width={140}
            className="
              object-contain rounded-full 
              bg-[linear-gradient(126.5deg,#EC131D_0%,#2F3192_100%)] 
              p-2
            "
          />
        </div>
      </div>

     
      <div
        className="
          ml-0 opacity-0 
          group-hover:ml-4 sm:group-hover:ml-6 
          group-hover:opacity-100 
          transition-all duration-300 ease-in-out
          text-center sm:text-left
        "
      >
        <h2 className="text-[#2F3192] font-roboto font-semibold text-lg sm:text-xl md:text-2xl mt-4 sm:mt-0 w-full sm:w-[160px]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card1;