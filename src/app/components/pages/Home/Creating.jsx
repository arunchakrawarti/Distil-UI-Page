"use client";
import React from "react";
import { motion } from "framer-motion";
import Card1 from "../../atoms/Card1";

const Creating = () => {
  const arr = [
    { img1: "/img/impact1.png", title: "2.5+ Trainees Placed" },
    { img1: "/img/impact2.png", title: "550+ Clients Served" },
    { img1: "/img/impact3.png", title: "10+ Academic Partnerships" },
    { img1: "/img/impact4.png", title: "10L+ Lives Impacted till Date" },
    { img1: "/img/impact5.png", title: "30+ Training Staff" },
    { img1: "/img/impact6.png", title: "30+ Training Staff" },
  ];

  // Parent container animation
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Each card animation
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-[#FFF6F6] py-10 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="font-roboto font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[120%]">
          <span className="text-[#2F3192]">Creating Lasting</span>{" "}
          <span className="text-[#EC131D]">Impact</span>
        </h1>

        <h3 className="font-roboto font-bold text-[20px] sm:text-[24px] md:text-[28px] leading-[150%] mt-3">
          Transforming education into careers, <br /> creating impact for every learner.
        </h3>

        <p className="font-teachers font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[150%] mt-6 max-w-5xl mx-auto text-[#333]">
          At Distil, impact means more than just education—it’s about transformation.
          By helping students learn valuable skills, earn while they study, and connect
          with real-world opportunities, we empower them to build confident careers and
          independent lives. Every success story is proof that when access meets opportunity,
          true change begins.
        </p>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-y-8 sm:gap-x-8 sm:w-fit sm:mx-auto"
        >
          {arr.map((itemData, i) => (
            <motion.div key={i} variants={item}>
              <Card1 img={itemData.img1} title={itemData.title} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Creating;
