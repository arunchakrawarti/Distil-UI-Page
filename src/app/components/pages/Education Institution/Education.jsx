// import Image from 'next/image'
// import React from 'react'

// const Education = () => {
//   return (
//     <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 mt-10 lg:px-50 py-12 gap-10">

//       {/* Left Image with Hover Scale */}
//       <div className="w-full lg:w-[608px] flex mt-10 justify-center">
//         <div className="overflow-hidden rounded-xl shadow-md">
//           <Image
//             src="/img/Edu8.png"
//             height={390}
//             width={608}
//             alt="Edu.png"
//             className="lg:w-[508px] md:w-auto sm:w-auto h-[370px] object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110"
//           />
//         </div>
//       </div>

//       {/* Right Content */}
//       <div className="w-full lg:w-[608px] flex flex-col gap-6">
//         <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[36px] leading-snug text-blue-950">
//           Transforming
//           <br />
//           <span className="text-red-600">School Education</span>
//         </h1>

//         <p className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[28px]">
//           Distil believes in nurturing talent from an early age. Our school education programs integrate modern pedagogy with essential life skills, ensuring a strong foundation for lifelong learning and personal growth. We empower students to thrive in an evolving world.
//         </p>

//         <ul className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[28px] list-disc list-inside space-y-2">
//           <li>Curriculum development for K-12 segments</li>
//           <li>Teacher training and capacity building</li>
//           <li>Digital literacy and STEM integration</li>
//           <li>Holistic development and character building</li>
//           <li>Partnerships with government schools for outreach</li>
//         </ul>
//       </div>

//     </div>
//   )
// }

// export default Education


"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 mt-10 lg:px-50 py-12 gap-10 overflow-hidden">
      
      {/* Left Image with Animation */}
      <motion.div
        className="w-full lg:w-[608px] flex mt-10 justify-center"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="overflow-hidden rounded-xl shadow-md"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/img/Edu8.png"
            height={390}
            width={608}
            alt="Edu.png"
            className="lg:w-[508px] md:w-auto sm:w-auto h-[370px] object-cover rounded-xl transition-transform duration-500 ease-in-out"
          />
        </motion.div>
      </motion.div>

      {/* Right Content with Fade-in */}
      <motion.div
        className="w-full lg:w-[608px] flex flex-col gap-6"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[36px] leading-snug text-blue-950">
          Transforming
          <br />
          <span className="text-red-600">School Education</span>
        </h1>

        <p className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[28px]">
          Distil believes in nurturing talent from an early age. Our school
          education programs integrate modern pedagogy with essential life
          skills, ensuring a strong foundation for lifelong learning and
          personal growth. We empower students to thrive in an evolving world.
        </p>

        <ul className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[28px] list-disc list-inside space-y-2">
          <li>Curriculum development for K-12 segments</li>
          <li>Teacher training and capacity building</li>
          <li>Digital literacy and STEM integration</li>
          <li>Holistic development and character building</li>
          <li>Partnerships with government schools for outreach</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Education;
