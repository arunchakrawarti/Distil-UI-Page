import React from 'react';

const Impact = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 lg:py-20 md:py-15 sm:py-10 bg-[#FFF8EB]">
      <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-[40px] leading-tight text-center text-blue-950">
        Our Impact
        <br />
        <span className="text-red-600 text-lg md:text-xl lg:text-[40px]">
          Transforming Lives Across India
        </span>
      </h1>

      <p className="font-sans font-normal text-base md:text-[18px] leading-7 md:leading-8 text-center max-w-xl mx-auto mt-5">
        Distil's dedication to skill development has led to significant milestones, empowering individuals and strengthening communities.
      </p>

      <div className="flex flex-col sm:flex-row mt-10 justify-around items-center gap-8">
        <div className="text-center">
          <span className="font-serif font-bold text-4xl md:text-[48px] leading-[48px] bg-[linear-gradient(126.5deg,#EC131D_0%,#2F3192_100%)] bg-clip-text text-transparent block">
            500K+
          </span>
          <p className="font-serif font-normal text-base md:text-[20px] leading-7 md:leading-8 mt-2">
            Trainees Skilled Annually
          </p>
        </div>

        <div className="text-center">
          <span className="font-serif font-bold text-4xl md:text-[48px] leading-[48px] bg-[linear-gradient(126.5deg,#EC131D_0%,#2F3192_100%)] bg-clip-text text-transparent block">
            90%+
          </span>
          <p className="font-serif font-normal text-base md:text-[20px] leading-7 md:leading-8 mt-2">
            Placement Rate
          </p>
        </div>

        <div className="text-center">
          <span className="font-serif font-bold text-4xl md:text-[48px] leading-[48px] bg-[linear-gradient(126.5deg,#EC131D_0%,#2F3192_100%)] bg-clip-text text-transparent block">
            350+
          </span>
          <p className="font-serif font-normal text-base md:text-[20px] leading-7 md:leading-8 mt-2">
            Industry Partners
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
