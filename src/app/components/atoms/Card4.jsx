// import Image from "next/image";
// import React from "react";

// const Card4 = ({ img, label, description, button, bgColor }) => {
//   return (
//     <div
//       className={`h-auto w-full sm:w-[320px] md:w-[355px] rounded-xl p-6 shadow-md flex flex-col justify-between`}
//       style={{ backgroundColor: bgColor }}
//     >
//       <div>
//         <Image src={img} height={40} width={40} alt="icon" />
//         <h1 className="font-merri font-bold text-[24px] leading-[32px] mt-4 text-blue-950">
//           {label}
//         </h1>
//         <p className="font-opensans font-normal text-[16px] leading-[26px] mt-3 text-gray-700">
//           {description}
//         </p>
//       </div>

//       <div className="bg-gradient-to-tr from-[#EC131D] to-[#2F3192] w-[141px] h-[40px] rounded-[6px] text-white text-center font-opensans font-semibold flex items-center justify-center mt-5 cursor-pointer hover:opacity-90 transition">
//         {button}
//       </div>
//     </div>
//   );
// };

// export default Card4;

import Image from "next/image";
import React from "react";
const Card4 = ({
  img,
  label,
  description,
  button,
  bgColor,
  buttonColor,
  cardWidth = "100%",      // Mobile & tablet me full width
  cardMaxWidth = "355px",  // Desktop max width
  cardHeight = "auto",
}) => {
  return (
    <div
      className="rounded-xl p-6 shadow-md flex flex-col justify-between"
      style={{
        backgroundColor: bgColor || "#FFFFFF",
        width: cardWidth,       // Dynamic width
        maxWidth: cardMaxWidth, // Max width for large screens
        height: cardHeight,     // Dynamic height
      }}
    >
      {/* Content */}
      <div>
        <Image src={img} height={40} width={40} alt="icon" />
        <h1 className="font-serif font-bold text-[24px] leading-[32px] mt-4 text-blue-950 text-left">
          {label}
        </h1>
        <p className="font-sans font-normal text-[16px] leading-[26px] mt-3 text-gray-700">
          {description}
        </p>
      </div>

      {/* Button */}
      {button && (
        <div
          className="w-[141px] h-[40px] rounded-[6px] text-white text-center font-sans font-semibold flex items-center justify-center mt-5 cursor-pointer hover:opacity-90 transition"
          style={{
            background: buttonColor
              ? buttonColor
              : "linear-gradient(126.5deg, #EC131D 0%, #2F3192 100%)",
          }}
        >
          {button}
        </div>
      )}
    </div>
  );
};


export default Card4;
