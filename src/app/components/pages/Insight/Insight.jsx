// import Image from 'next/image'
// import React from 'react'

// const Insight = () => {
//   return (
//     <div className='bg-[#FFE6DF] mt-23'>
//       <div className='flex flex-col lg:flex-row items-center lg:items-start mx-auto max-w-[1120px]  gap-6 lg:gap-10 lg:py-10 sm:py-10 md:py-15 px-4 sm:px-6'>
//         {/* Left Content */}
//         <div className='flex-1'>
//           <h1 className='font-serif font-bold text-[45px] mt-20 leading-[55px]'>
//            Insights & Resources
//           </h1>
//           <p className='font-sans font-normal text-[18px] leading-[28px] mt-8'>
//             Explore our knowledge hub, company blogs, success stories, detailed case studies, media contacts, and data repositories. Gain a deeper understanding of our impact and expertise.
//           </p>
//           <button
//             className="mt-10 px-6 sm:px-8 py-3 text-white font-semibold rounded-lg shadow-lg 
//                        bg-gradient-to-r from-red-600 to-purple-800 
//                        hover:from-red-700 hover:to-purple-900 
//                        transition duration-300 w-full sm:w-auto text-center"
//           >
//             Explore Resources →
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="flex-1 lg:mt-0 overflow-hidden rounded-xl">
//   <Image
//     src="/img/Insight.png"
//     height={406}
//     width={528}
//     alt="Skill.png"
//     className="w-full h-auto object-cover rounded-xl transition-transform duration-700 ease-in-out hover:scale-105"
//   />
// </div>

//       </div>
//     </div>
//   )
// }

// export default Insight



"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Insight = () => {
  return (
    <div className="bg-[#FFE6DF] mt-23 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start mx-auto max-w-[1120px] gap-6 lg:gap-10 lg:py-10 sm:py-10 md:py-15 px-4 sm:px-6">
        
        {/* Left Content with motion */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="font-serif font-bold text-[45px] mt-20 leading-[55px] text-blue-950">
            Insights & Resources
          </h1>

          <p className="font-sans font-normal text-[18px] leading-[28px] mt-8 text-gray-700">
            Explore our knowledge hub, company blogs, success stories, detailed
            case studies, media contacts, and data repositories. Gain a deeper
            understanding of our impact and expertise.
          </p>

          <motion.button
            className="mt-10 px-6 sm:px-8 py-3 text-white font-semibold rounded-lg shadow-lg 
                       bg-gradient-to-r from-red-600 to-purple-800 
                       hover:from-red-700 hover:to-purple-900 
                       transition duration-300 w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05, boxShadow: "0px 6px 20px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Resources →
          </motion.button>
        </motion.div>

        {/* Right Image with smooth zoom-in motion */}
        <motion.div
          className="flex-1 lg:mt-0 overflow-hidden rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-xl"
          >
            <Image
              src="/img/Insight.png"
              height={406}
              width={528}
              alt="Insight Section"
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Insight;
