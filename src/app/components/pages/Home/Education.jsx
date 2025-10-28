"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="h-auto lg:h-[482px] w-full flex justify-center items-center px-4 py-10 overflow-hidden">
      <motion.div
        className="flex flex-col lg:flex-row gap-10 lg:gap-20 xl:gap-40 max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* --- Text Section --- */}
        <motion.div
          variants={fadeRight}
          className="w-full lg:w-[476px] self-center text-center lg:text-left h-auto lg:h-[282px] flex flex-col justify-center order-1 lg:order-2"
        >
          <h1 className="font-[var(--font-reddit-sans)] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 text-[#1E007B]">
            Turning Education Into{" "}
            <span className="text-[#FF0000]">Livelihood</span>
          </h1>
          <p className="font-[var(--font-roboto)] font-normal text-base sm:text-lg leading-7 text-gray-700">
            Founded in 2017, Distil Education began with a simple yet powerful
            mission — to ensure that every young person, regardless of background,
            has access to both education and livelihood. What started as a
            grassroots initiative has grown into a nationwide movement, impacting
            over a million lives, bridging the gap between classrooms and careers,
            and proving that learning and earning can go hand in hand.
          </p>
        </motion.div>

        {/* --- Cards Section --- */}
        <motion.div
          variants={fadeLeft}
          className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center order-2 lg:order-1"
        >
          {/* Founder Card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="h-[282px] w-full sm:w-[247px] bg-[#FFEEEE] text-center p-6 flex flex-col items-center justify-center rounded-lg shadow-xl border border-gray-200"
          >
            <Image
              src="/img/man1.png"
              height={123}
              width={123}
              className="mt-[-2rem] rounded-full object-cover"
              alt="Arjun Mishra"
            />
            <h1 className="font-[var(--font-reddit-sans)] font-bold text-base mt-4">
              Arjun Mishra
            </h1>
            <p className="font-[var(--font-reddit-sans)] font-medium text-sm text-gray-700">
              Founder & Director
            </p>
          </motion.div>

          {/* Co-Founder Card */}
          <motion.div
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="h-[282px] w-full sm:w-[247px] bg-[#ECE7FF] text-center p-6 flex flex-col items-center justify-center rounded-lg shadow-xl border border-gray-200"
          >
            <Image
              src="/img/man2.png"
              height={123}
              width={123}
              className="mt-[-2rem] rounded-full object-cover"
              alt="Vikas Shukla"
            />
            <h1 className="font-[var(--font-reddit-sans)] font-bold text-base mt-4">
              Vikas Shukla
            </h1>
            <p className="font-[var(--font-reddit-sans)] font-medium text-sm text-gray-700">
              Co-Founder & Director
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
