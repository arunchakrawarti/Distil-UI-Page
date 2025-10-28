"use client";
import React from "react";
import { motion } from "framer-motion";
import Card from "../../atoms/Card";

const stats = [
  { value: "Min. 8Hrs/ Week", description: "Learning Hours per Trainee" },
  { value: ">50,000 hours", description: "of learning time monthly" },
  { value: "40+ Trainers", description: "for course & curriculum delivery" },
];

const Design = () => {
  const learningSteps = [
    {
      No: "1",
      title: "Industry as a Campus",
      description: `Start Earning, While\nLearning`,
      bgColor: "bg-[#FFF3E3]",
    },
    {
      No: "2",
      title: "Multi Delivery Mechanism",
      description: `Start Earning, While\nLearning`,
      bgColor: "bg-[#FFEEEE]",
    },
    {
      No: "3",
      title: "Mentorships & Check-ins",
      description: `Guided learning\nContinuous Feedback`,
      bgColor: "bg-[#E4FAFF]",
    },
    {
      No: "4",
      title: "Assessment & Certification",
      description: `Skilled, Certified\nEmployable`,
      bgColor: "bg-[#ECE7FF]",
    },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative max-w-[1330px] mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-16 overflow-hidden">
      {/* Heading Section */}
      <motion.div
        className="text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-blue-900 tracking-wide">
          Our Learning Cycle
        </h1>
        <p className="text-xl lg:text-4xl tracking-wide sm:text-2xl md:text-3xl font-extrabold text-red-600 my-2">
          Designed to shape your career journey.
        </p>
        <span className="font-sans text-sm sm:text-base md:text-lg tracking-wide text-gray-700 block mt-2">
          A step-by-step journey that transforms learning into career success.
        </span>
      </motion.div>

      {/* Cards Grid Section */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-16"
      >
        {learningSteps.map((itemData) => (
          <motion.div key={itemData.No} variants={item}>
            <Card
              className={itemData.bgColor}
              no={itemData.No}
              title={itemData.title}
              description={itemData.description}
              noBgColor="bg-white"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col lg:flex-row justify-center items-stretch gap-6 sm:gap-8 lg:gap-10 w-full max-w-6xl -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-22 z-10"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white rounded-xl shadow-lg border border-gray-100 min-h-[160px] flex-1 text-center"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 whitespace-pre-line">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 sm:mt-10 px-12 lg:px-24 sm:px-20 py-2 lg:py-4 sm:py-3 bg-blue-900 text-white font-semibold text-base sm:text-lg rounded-lg shadow-xl hover:bg-blue-800 transition duration-300"
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Design;
