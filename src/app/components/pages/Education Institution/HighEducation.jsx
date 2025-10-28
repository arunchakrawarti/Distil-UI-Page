// import Image from 'next/image'
// import React from 'react'

// const HighEducation = () => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 mt-10 lg:px-50 py-12 gap-8">
      
//       {/* Text Content */}
//       <div className="w-full lg:w-[608px] flex flex-col gap-6">
//         <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[36px] leading-snug text-blue-950">
//           Higher Education <span className="text-red-600">Initiatives</span>
//         </h1>
//         <p className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[28px]">
//           Distil Education & Technology is at the forefront of shaping higher education, integrating cutting-edge technology with comprehensive curriculum development. We focus on creating industry-ready professionals through skill-based learning and strategic academic collaborations, ensuring our graduates are equipped for global challenges.
//         </p>
//         <ul className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[28px] list-disc list-inside space-y-2">
//           <li>Industry-aligned Bachelor's and Master's programs</li>
//           <li>Advanced research and development opportunities</li>
//           <li>Global academic partnerships for exchange programs</li>
//           <li>Emphasis on practical skills and experiential learning</li>
//           <li>Career guidance and placement support services</li>
//         </ul>
//       </div>

//       {/* Image */}
//       <div className="w-full lg:w-[608px] flex mt-10 justify-center">
//         <div className="overflow-hidden rounded-xl shadow-md">
//           <Image
//             src="/img/Edu.png"
//             height={390}
//             width={608}
//             alt="Edu.png"
//             className="lg:w-[408px] md:w-auto sm:w-auto h-[370px] object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
//           />
//         </div>
//       </div>

//     </div>
//   )
// }

// export default HighEducation



"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HighEducation = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 mt-10 lg:px-50 py-12 gap-8 overflow-hidden">
      
      {/* Left Text Content */}
      <motion.div
        className="w-full lg:w-[608px] flex flex-col gap-6"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[36px] leading-snug text-blue-950"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          Higher Education <span className="text-red-600">Initiatives</span>
        </motion.h1>

        <motion.p
          className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[28px] text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Distil Education & Technology is at the forefront of shaping higher
          education, integrating cutting-edge technology with comprehensive
          curriculum development. We focus on creating industry-ready
          professionals through skill-based learning and strategic academic
          collaborations, ensuring our graduates are equipped for global
          challenges.
        </motion.p>

        <motion.ul
          className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[28px] list-disc list-inside space-y-2 text-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <li>Industry-aligned Bachelor's and Master's programs</li>
          <li>Advanced research and development opportunities</li>
          <li>Global academic partnerships for exchange programs</li>
          <li>Emphasis on practical skills and experiential learning</li>
          <li>Career guidance and placement support services</li>
        </motion.ul>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="w-full lg:w-[608px] flex mt-10 justify-center"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-xl shadow-md"
        >
          <Image
            src="/img/Edu.png"
            height={390}
            width={608}
            alt="Edu.png"
            className="lg:w-[408px] md:w-auto sm:w-auto h-[370px] object-cover rounded-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HighEducation;
