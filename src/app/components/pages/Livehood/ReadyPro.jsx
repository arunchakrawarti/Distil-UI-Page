"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ReadyPro = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-[1120px] h-[348px] mx-auto rounded-xl overflow-hidden shadow-2xl bg-gray-200 group"
      >
        {/* ✅ Animated Background Image */}
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/img/Live7.jpg"
            fill
            alt="Students walking in a university setting"
            className="object-cover object-center"
            priority
          />
        </motion.div>

        {/* ✅ Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* ✅ Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-snug text-white mb-4"
          >
            Ready to Transform Your Career?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed text-white max-w-lg mb-8"
          >
            Join Distil's vibrant ecosystem of growth, learning, and endless
            opportunities. Your journey to a brighter future starts here.
          </motion.p>

          {/* ✅ Animated Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#f3f3f3",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-lg 
                       hover:bg-gray-100 transition duration-300 flex items-center justify-center"
          >
            Get Started Today <span className="ml-2 text-xl">→</span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReadyPro;
