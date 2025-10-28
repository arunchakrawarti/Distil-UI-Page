"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Future = () => {
  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#FFE6DF] mt-24 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start mx-auto max-w-[1120px] gap-6 lg:gap-10 py-10 lg:py-20 px-4 sm:px-6">
        
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={textVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="font-serif font-bold text-[36px] sm:text-[45px] leading-[44px] sm:leading-[55px] text-blue-950">
            Empowering Futures at Distil Skilling Centers
          </h1>
          <p className="font-sans font-normal text-[18px] sm:text-[20px] leading-[28px] mt-4 text-gray-700">
            Discover our state-of-the-art skilling centers across India, designed to provide comprehensive, industry-aligned training for a brighter tomorrow. From digital skills to vocational trades, we prepare you for success.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 px-8 py-3 text-white font-semibold rounded-lg shadow-lg 
                       bg-gradient-to-r from-red-600 to-purple-800 
                       hover:from-red-700 hover:to-purple-900 
                       transition duration-300 w-full sm:w-auto"
          >
            Explore App →
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 mt-6 lg:mt-0 overflow-hidden rounded-xl"
          variants={imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image
            src="/img/Distil.png"
            height={406}
            width={528}
            alt="Skill.png"
            className="w-full h-auto object-cover rounded-xl 
                       transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Future;
