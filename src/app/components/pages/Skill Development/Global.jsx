import Image from "next/image";
import React from "react";

const Global = () => {
  return (
    <div className="bg-[#FFF8EB] py-20 px-4 sm:px-6 mt-20 lg:px-8">
      {/* Heading Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="font-[Merriweather] font-bold text-[28px] sm:text-[32px] md:text-[36px] leading-[120%] text-blue-950">
          Global Horizons <br />
          <span className="text-red-600">International Skill Mobility</span>
        </h1>

        <p className="font-[Open_Sans] font-normal text-[16px] sm:text-[18px] leading-[28px] text-gray-800 mt-4 px-2">
          Facilitating the movement of skilled Indian talent to global markets,
          we ensure our trainees meet international standards and succeed on the
          world stage.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-[1120px] gap-8 lg:gap-12 mt-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/img/Skill5.png"
            alt="Global Skill Program"
            width={528}
            height={406}
            className="rounded-[12px] w-[425px] mr-8 max-w-[428px] h-[310px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="font-sans font-bold text-[18px] leading-[28px] mt-5 text-blue-950">
            Global Standardized Training:{" "}
            <span className="font-normal text-gray-800">
              Programs aligned with international certifications and industry
              benchmarks.
            </span>
          </h2>

          <p className="font-sans font-bold text-[18px] leading-[28px] mt-4 text-blue-950">
            Overseas Placement Support:{" "}
            <span className="font-normal text-gray-800">
              Assistance with visas, relocation, and job matching in various
              countries.
            </span>
          </p>

          <p className="font-sans font-bold text-[18px] leading-[28px] mt-4 text-blue-950">
            Language and Cross-Cultural Training:{" "}
            <span className="font-normal text-gray-800">
              Preparing candidates for successful integration into diverse work
              environments.
            </span>
          </p>

          <p className="font-sans font-bold text-[18px] leading-[28px] mt-4 text-blue-950">
            International Alliances:{" "}
            <span className="font-normal text-gray-800">
              Partnerships with global employers and educational institutions.
            </span>
          </p>

          <button
            className="mt-6 px-6 sm:px-8 py-3 text-white font-semibold rounded-md shadow-lg 
                       bg-gradient-to-r from-red-600 to-purple-800 
                       hover:from-red-700 hover:to-purple-900 
                       transition duration-300 w-full sm:w-auto text-center"
          >
            View Global Opportunities →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Global;
