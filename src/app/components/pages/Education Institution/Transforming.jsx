"use client";
import React from "react";
import { motion } from "framer-motion";

const Transforming = () => {
  return (
    <div className="bg-[#FFEFEB] mt-23 w-full mx-auto py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Heading Animation */}
      <motion.h1
        className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-snug sm:leading-snug md:leading-[48px] tracking-[-1.2px] text-center mb-6 text-blue-950"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Transforming Education for a Brighter Future
      </motion.h1>

      {/* Paragraph Animation */}
      <motion.p
        className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed sm:leading-7 md:leading-[28px] text-center max-w-3xl mx-auto mb-8 text-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        At Distil, we are dedicated to revolutionizing education through
        innovation, strategic partnerships, and a deep commitment to student
        success. Explore our diverse initiatives designed to shape the leaders
        of tomorrow.
      </motion.p>

      {/* Button Animation */}
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 gap-2 rounded-md bg-gradient-to-r from-red-600 to-purple-800 
                     hover:from-red-700 hover:to-purple-900 transition duration-300 text-white font-medium shadow-lg"
        >
          Discover Our Impact
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Transforming;
