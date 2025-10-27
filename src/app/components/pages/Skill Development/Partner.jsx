import Image from "next/image";
import React from "react";

const Partner = () => {
  return (
    <div className="relative w-full max-w-[1200px] mx-auto h-[300px] sm:h-[340px] md:h-[384px] mt-20 rounded-[20px] overflow-hidden group">
      {/* Background Image */}
      <Image
        src="/img/Skill6.png"
        alt="Partner Section Background"
        fill
        className="object-cover opacity-90 transition-transform duration-700 ease-in-out group-hover:scale-105"
      />

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />

      {/* Text & Buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="font-serif font-bold text-[22px] leading-[120%] sm:text-[28px] md:text-[36px]">
          Partner with Distil <br />
          <span className="text-red-500">Empowering Tomorrow's Professionals</span>
        </h1>

        <p className="font-sans font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] mt-4 max-w-[90%] sm:max-w-[80%] md:max-w-2xl">
          Join us in our mission to build a skilled and employable India. Explore
          partnership opportunities or get in touch with our team.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button className="bg-white text-black px-5 lg:px-10 sm:px-6 py-2 sm:py-3 rounded-md font-sans font-semibold text-[13px] sm:text-[14px] hover:bg-gray-100 transition-all">
            Become a Partner →
          </button>
          <button className="border border-white bg-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-sans font-semibold text-[13px] sm:text-[14px] text-black lg:px-10 transition-all">
            Contact Our Team →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
