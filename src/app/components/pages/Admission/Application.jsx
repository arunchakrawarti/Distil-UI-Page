import React from 'react';

const Application = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-0 py-10">
      
      {/* Heading Section */}
      <div className="max-w-[1050px] mx-auto">
        <h1 className="font-rounded text-blue-950 font-extrabold text-3xl sm:text-4xl md:text-[42px] leading-snug sm:leading-tight md:leading-[54px] tracking-normal">
          Application Form For <span className="text-red-600">Admission</span>
        </h1>
        <p className="text-gray-600 mt-4 sm:mt-5 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-7 md:leading-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ratione in deleniti sed fuga porro, rem laudantium quia quas nobis iure culpa quidem quisquam distinctio ullam est earum architecto nesciunt.
        </p>
      </div>

      {/* Upload Section */}
      <div className="mt-10 sm:mt-12 py-8 sm:py-12  bg-[#FFF1F1] max-w-[1050px] mx-auto text-center rounded-xl">
        <h6 className="font-rounded font-extrabold text-[16px] sm:text-[16px] leading-[22px] tracking-[0px]">
          Photo of the Student
        </h6>
        <button className="mt-3 sm:mt-4 px-8 sm:px-12 py-3 rounded-full border border-red-600 bg-white text-red-500 shadow font-bold hover:bg-red-50 transition">
          Upload PDF/Doc
        </button>
      </div>

    </div>
  );
};

export default Application;
