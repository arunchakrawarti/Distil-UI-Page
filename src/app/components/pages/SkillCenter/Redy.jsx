// import React from 'react';

// const Redy = () => {
//   return (
//     <div className="text-center bg-[#FFEFEB] px-4 sm:px-6 lg:px-0 py-16">
//       <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl leading-snug sm:leading-tight md:leading-[50px] tracking-normal">
//         Ready to Start Your Journey?
//       </h1>
//       <p className="font-sans mt-5 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-7 md:leading-8 lg:max-w-3xl md:max-w-2xl text-gray-700 mx-auto text-center">
//         Download our comprehensive prospectus to learn more about our courses, facilities, and how Distil can help to learn  you achieve your career aspirations. Your future begins here.
//       </p>
//       <button className="mt-8 sm:mt-10 px-6 py-3 rounded-md text-white bg-gradient-to-r from-[#EC131D] to-[#2F3192] text-base sm:text-lg">
//         Download Prospectus
//       </button>
//     </div>
//   );
// };

// export default Redy;



"use client";
import React from "react";
import { motion } from "framer-motion";

const Ready = () => {
  return (
    <div className="text-center bg-[#FFEFEB] px-4 sm:px-6 lg:px-0 py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}         
        whileInView={{ opacity: 1, y: 0 }}      
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}              
      >
        {/* Heading */}
        <motion.h1
          className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl leading-snug sm:leading-tight md:leading-[50px] text-blue-950"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Ready to Start Your Journey?
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="font-sans mt-5 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-7 md:leading-8 text-gray-700 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Download our comprehensive prospectus to learn more about our courses, facilities,
          and how Distil can help you achieve your career aspirations. Your future begins here.
        </motion.p>

        {/* Button */}
        <motion.button
          className="mt-10 px-8 py-3 rounded-md text-white font-semibold bg-gradient-to-r 
                     from-[#EC131D] to-[#2F3192] hover:from-[#d2111a] hover:to-[#25257f] 
                     transition-all duration-300 transform hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          Download Prospectus
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Ready;
