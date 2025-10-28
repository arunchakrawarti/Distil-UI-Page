"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Partner = () => {
  return (
    <section className="relative w-full max-w-[1200px] mx-auto h-[300px] sm:h-[340px] md:h-[384px] mt-20 rounded-[20px] overflow-hidden group">
      {/* ✅ Background Image with Motion */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/img/Skill6.png"
          alt="Partner Section Background"
          fill
          className="object-cover opacity-90"
        />
      </motion.div>

      {/* ✅ Overlay Layer */}
      <motion.div
        className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* ✅ Text & Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-serif font-bold text-[22px] leading-[120%] sm:text-[28px] md:text-[36px]"
        >
          Partner with Distil <br />
          <span className="text-red-500">
            Empowering Tomorrow&apos;s Professionals
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-sans font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] mt-4 max-w-[90%] sm:max-w-[80%] md:max-w-2xl"
        >
          Join us in our mission to build a skilled and employable India. Explore
          partnership opportunities or get in touch with our team.
        </motion.p>

        {/* ✅ Animated Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f3f3f3",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-black px-5 lg:px-10 sm:px-6 py-2 sm:py-3 rounded-md font-sans font-semibold text-[13px] sm:text-[14px] hover:bg-gray-100"
          >
            Become a Partner →
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#fafafa",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="border border-white bg-white text-black px-5 sm:px-6 py-2 sm:py-3 rounded-md font-sans font-semibold text-[13px] sm:text-[14px] lg:px-10"
          >
            Contact Our Team →
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Partner;
