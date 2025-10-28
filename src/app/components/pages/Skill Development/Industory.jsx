"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Industory = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col mt-20 lg:flex-row items-center lg:items-start mx-auto max-w-[1120px] gap-6 lg:gap-10 py-5 px-4 sm:px-6">
        
        {/* Left Content with animation */}
        <motion.div
          className="flex-1 mt-6 lg:mt-0"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="font-merri font-bold text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-snug md:leading-tight tracking-normal text-blue-950 mt-5">
            Industry-Based & <br />
            <span className="text-red-600">CSR Skilling</span>
          </h1>
          <p className="font-roboto font-normal text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 md:leading-6 tracking-normal align-middle mt-4">
            Collaborating with leading corporations, we design and deliver
            industry-specific training that meets the evolving demands of
            various sectors, contributing to corporate social responsibility
            goals.
          </p>
          <div className="font-roboto font-normal text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 md:leading-6 tracking-normal align-middle mt-4 space-y-3">
            <p>Tailored training modules for specific industry needs</p>
            <p>Enhancing employability through practical, hands-on experience</p>
            <p>Supporting corporate social responsibility (CSR) mandates</p>
            <p>Bridging the gap between academic learning and industry requirements</p>
          </div>
        </motion.div>

        {/* Right Image with animation */}
        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-xl shadow-md">
            <Image
              src="/img/Skill2.png"
              height={406}
              width={528}
              alt="Skill.png"
              className="w-full h-auto object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Industory;
