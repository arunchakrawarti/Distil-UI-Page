// import Image from 'next/image'
// import React from 'react'

// const Careers = () => {
//   return (
//     <div className='bg-[#FFE6DF] mt-23 rounded-md max-w-[1120px] m-auto'>
//       <div className='flex flex-col lg:flex-row items-center lg:items-start mx-auto w-full gap-6 lg:gap-10 lg:py-15 sm:py-10 md:py-15 px-4 sm:px-6'>

//         {/* Left Content */}
//         <div className='flex-1'>
//           <h1 className='font-serif font-bold text-[45px] leading-[48px]'>
//             Empowering Careers, Building Futures
//           </h1>
//           <p className='font-sans font-normal text-[20px] leading-[28px] mt-4'>
//             At Distil Education & Technology, we believe in connecting talent with opportunity. 
//             Our comprehensive livelihood programs are designed to guide job seekers, deploy advanced 
//             instructional support, streamline HR, and ensure successful career transitions, 
//             all with a touch of Indian aspiration.
//           </p>
//           <button
//             className="mt-5 px-6 sm:px-8 py-3 text-white font-semibold rounded-lg shadow-lg 
//                        bg-gradient-to-r from-red-600 to-purple-800 
//                        hover:from-red-700 hover:to-purple-900 
//                        transition duration-300 w-full sm:w-auto text-center"
//           >
//             Explore Opportunities →
//           </button>
//         </div>

//         {/* Right Image with Scaling */}
//         <div className='flex-1 mt-6 lg:mt-0 flex justify-center lg:justify-end'>
//           <div className="overflow-hidden rounded-xl border-2"> 
//             <Image
//               src="/img/Live.png"
//               height={396}
//               width={297}
//               alt='Skill.png'
//               className='w-[396px] h-[297px] object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110'
//             />
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Careers


"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Careers = () => {
  return (
    <div className="bg-[#FFE6DF] mt-24 rounded-md max-w-[1120px] mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 py-10 lg:py-16 px-4 sm:px-6">

        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="font-serif font-bold text-[36px] sm:text-[45px] leading-[44px] sm:leading-[48px] text-blue-950"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Empowering Careers, Building Futures
          </motion.h1>

          <motion.p
            className="font-sans font-normal text-[18px] sm:text-[20px] leading-[28px] mt-4 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At Distil Education & Technology, we believe in connecting talent with opportunity.
            Our comprehensive livelihood programs are designed to guide job seekers, deploy advanced
            instructional support, streamline HR, and ensure successful career transitions — 
            all with a touch of Indian aspiration.
          </motion.p>

          <motion.button
            className="mt-6 px-8 py-3 text-white font-semibold rounded-lg shadow-lg 
                       bg-gradient-to-r from-red-600 to-purple-800 
                       hover:from-red-700 hover:to-purple-900 
                       transition duration-300 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Explore Opportunities →
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 mt-8 lg:mt-0 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="overflow-hidden rounded-xl border-2"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/img/Live.png"
              height={396}
              width={297}
              alt="Empowering Careers"
              className="w-[396px] h-[297px] object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
