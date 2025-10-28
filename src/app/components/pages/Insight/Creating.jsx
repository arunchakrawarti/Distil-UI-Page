"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Creating = () => {
  return (
    <div className="relative w-full py-16 md:py-24 bg-pink-50 overflow-hidden">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/Jion.png"
          alt="Distil Education background with mandala"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* ✅ Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto px-4 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-['Reddit_Sans'] font-bold text-4xl sm:text-[32px] leading-tight text-blue-950 mb-4"
        >
          Join <span className="text-red-600">Distil Education</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-['Reddit_Sans'] font-normal text-md leading-relaxed text-gray-700 mb-8"
        >
          Join Distil Education and be part of a community where learning meets
          opportunity. Here, you don’t just study—you gain real skills, earn
          while you learn, and prepare for a career that lasts. With the right
          guidance and support at every step, Distil Education is where your
          journey begins and your future takes shape.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.05,
            background: "linear-gradient(90deg, #2F3192, #EC131D)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="px-12 py-3 text-white font-semibold rounded-lg shadow-lg 
                     bg-gradient-to-r from-[#EC131D] to-[#2F3192] 
                     transition-all duration-300"
        >
          Join Our Group
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Creating;
