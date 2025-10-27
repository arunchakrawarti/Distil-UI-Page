import Image from "next/image";
import React from "react";

const Build = () => {
  const videoStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  return (
    <div className="relative w-full overflow-hidden  py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* LEFT CONTENT */}
        <div className="relative w-full lg:w-1/2 mb-10 -mt-10 lg:mb-0">
          <h1 className=" font-serif font-bold text-[36px] leading-[40px] tracking-[0px] text-gray-900 md:ml-10 lg:ml-20">
            Building India’s Largest <br className="hidden md:block" />
            <span className="inline-block mt-1">
              Livelihood Based Skilling &
            </span>{" "}
            <br className="hidden md:block" />
            Education Platform
          </h1>

          <p className="mt-4  text-base md:text-lg text-gray-600 max-w-xl md:ml-10 lg:ml-20">
            Empowering youth through work integrated learning, skilling, and
            career pathways.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:ml-10 lg:ml-20">
            <button
              className="px-[4rem] py-3 text-white font-semibold rounded-lg shadow-lg 
                         bg-gradient-to-r from-red-600 to-purple-800 
                         hover:from-red-700 hover:to-purple-900 
                         transition duration-300 w-full sm:w-auto text-center"
            >
              Explore Programs
            </button>

            <button
              className="relative p-0.5 rounded-lg overflow-hidden w-full sm:w-auto 
                         bg-gradient-to-r from-red-600 to-purple-800"
            >
              <span
                className="block bg-white text-base font-semibold rounded-lg px-[4rem] py-3 
                             hover:bg-gray-50 transition duration-300"
              >
                <span className="bg-gradient-to-r from-red-600 to-purple-800 bg-clip-text text-transparent">
                  Partner With Us
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex relative w-full lg:w-1/2 justify-center -mt-20 items-center mr-10 h-auto">
          <video
            src="/img/viedo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto rounded-xl"
            style={videoStyle}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4  grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6">
        <div className="shadow rounded-[10px] p-6 bg-[#FFF3E3]  flex flex-col items-center text-center">
          <Image
            src="/img/Icon1.png"
            height={30}
            width={30}
            alt="Icon1.png"
            className="mb-4 mt-4"
          />
          <p className="font-[Reddit Sans] font-semibold text-[17px] leading-[25.5px]">
            Vocational <br /> Skilling & Placements
          </p>
        </div>

        <div className="shadow rounded-[10px] p-6 bg-[#FFEEEE] flex flex-col items-center text-center">
          <Image
            src="/img/Icon2.png"
            height={30}
            width={30}
            alt="Icon2.png"
            className="mb-5 mt-4"
          />
          <p className="font-[Reddit Sans] font-semibold text-[17px] leading-[25.5px]">
            Training <br /> Centers & Courses
          </p>
        </div>

        <div className="shadow rounded-[10px] p-6 bg-[#E4FAFF] flex flex-col items-center text-center">
          <Image
            src="/img/Icon3.png"
            height={40}
            width={40}
            alt="Icon3.png"
            className="mb-5 mt-4"
          />
          <p className="font-[Reddit Sans] font-semibold text-[17px] leading-[25.5px]">
            People <br /> Intensive Projects
          </p>
        </div>

        <div className="shadow rounded-[10px] p-6 bg-[#ECE7FF] flex flex-col items-center text-center">
          <Image
            src="/img/Icon4.png"
            height={40}
            width={40}
            alt="Icon4.png"
            className="mb-5 mt-4"
          />
          <p className="font-[Reddit Sans] font-semibold text-[17px] leading-[25.5px]">
            Professionals <br /> Staffing & Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Build;
