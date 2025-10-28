"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Community = () => {
  return (
    <div className="bg-white mt-20 py-10 px-4 sm:px-6 lg:px-8">
      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-[1120px] gap-8 lg:gap-12">

        {/* Left Image with animation */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/img/Skill4.png"
            alt="Community Skilling"
            width={500}
            height={406}
            className="rounded-[12px] w-full mr-10 max-w-[456px] h-[350px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </motion.div>

        {/* Right Content with animation */}
        <motion.div
          className="w-full lg:w-1/2 text-left"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="font-[Merriweather] font-bold text-[28px] sm:text-[32px] md:text-[36px] leading-[120%] text-blue-950">
            Community Skilling & <br />
            <span className="text-red-600">Rural Empowerment</span>
          </h1>

          <p className="font-[Open_Sans] font-normal text-[16px] sm:text-[18px] leading-[28px] text-gray-800 mt-4">
            Our grassroots programs focus on uplifting underserved communities by
            providing vocational skills that lead to local employment opportunities
            and entrepreneurship, driving inclusive development.
          </p>

          <div className="font-[Open_Sans] font-normal text-[16px] leading-[28px] text-gray-800 mt-5 space-y-2">
            <p>✅ Vocational training for rural youth and women</p>
            <p>✅ Promoting traditional crafts and local industries</p>
            <p>✅ Digital literacy and basic computer skills for community members</p>
            <p>✅ Entrepreneurship development for sustainable livelihoods</p>
          </div>

          <button
            className="mt-6 px-6 sm:px-8 py-3 text-white lg:px-20 font-semibold rounded-md shadow-lg 
                       bg-gradient-to-r from-red-600 to-purple-800 
                       hover:from-red-700 hover:to-purple-900 
                       transition duration-300 w-full sm:w-auto text-center"
          >
            Learn More →
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;
