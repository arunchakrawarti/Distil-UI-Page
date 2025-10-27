import React from 'react';
import Image from 'next/image';

const ReportCard = ({ title, description, format, bgColor, iconImgSrc }) => {
  return (
    <div
      className="
        w-full sm:w-[240px] md:w-[256px] lg:w-[260px]
        h-[250px]
        p-6 rounded-xl shadow-lg
        flex flex-col justify-between
        transition-transform duration-200 hover:scale-[1.02]
      "
      style={{ backgroundColor: bgColor }}
    >
      {/* Top Section */}
      <div>
        <div className="w-10 h-10 rounded-lg flex items-center justify-center p-2">
          <Image
            src={iconImgSrc}
            width={28}
            height={28}
            alt="Document Icon"
            className="object-contain"
          />
        </div>

        <h3 className="font-[var(--font-open-sans)] font-semibold text-[18px] leading-[23px] tracking-[-0.45px] text-gray-900 mt-4 mb-2">
          {title}
        </h3>

        <p className="font-[var(--font-open-sans)] font-normal text-[14px] leading-[20px] text-gray-700">
          {description}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-4">
        <span
          className="py-1 px-3 text-xs font-semibold rounded-full text-white"
          style={{ backgroundColor: iconImgSrc ? '#EF4444' : bgColor }}
        >
          {format}
        </span>

        <button className="flex items-center font-['Open Sans'] text-sm font-semibold text-gray-700 transition duration-150 hover:text-blue-600">
          Download <span className="ml-1 text-base">→</span>
        </button>
      </div>
    </div>
  );
};

export default ReportCard;
