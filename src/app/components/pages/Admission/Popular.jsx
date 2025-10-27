import React from "react";
import PopularCard from "../../atoms/PopularCard";
import popularData from "../../../../../public/db/popularData.json";

const Popular = () => {
  return (
    <div className="py-16 mt-23 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <h1 className="font-serif font-bold text-[28px] sm:text-[32px] md:text-[36px] leading-[32px] sm:leading-[36px] md:leading-[40px] text-center text-blue-950 mb-12">
        Popular <span className="text-red-600"> Courses</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {popularData.poplarData.map((item, i) => (
          <PopularCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
