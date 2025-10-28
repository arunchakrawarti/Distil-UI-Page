"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Join = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative w-full py-16 md:py-24 bg-pink-50 overflow-hidden">
      {/* Background Image with Motion */}
      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        className="absolute inset-0"
      >
        <Image
          src="/img/Jion.png"
          alt="Distil Education background with mandala"
          fill
          className="object-cover z-0"
          quality={100}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-['Reddit_Sans'] font-bold text-4xl sm:text-[32px] leading-tight text-blue-950 mb-4"
        >
          Join <span className="text-red-600">Distil Education</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          variants={fadeUp}
          viewport={{ once: true }}
          className="font-['Reddit_Sans'] font-normal text-md leading-relaxed text-gray-700 mb-8"
        >
          Join Distil Education and be part of a community where learning meets
          opportunity. Here, you don’t just study—you gain real skills, earn
          while you learn, and prepare for a career that lasts. With the right
          guidance and support at every step, Distil Education is where your
          journey begins and your future takes shape.
        </motion.p>

        <motion.button
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          variants={fadeUp}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="px-12 py-3 text-white font-semibold rounded-lg shadow-lg transition duration-300 
                     bg-gradient-to-r from-[#EC131D] to-[#2F3192] 
                     hover:from-[#2F3192] hover:to-[#EC131D]"
        >
          Join Our Group
        </motion.button>
      </div>
    </div>
  );
};

export default Join;
