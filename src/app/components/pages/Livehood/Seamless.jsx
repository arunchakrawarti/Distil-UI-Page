"use client";
import React from "react";
import { motion } from "framer-motion";
import Card4 from "../../atoms/Card4";

const Seamless = () => {
  const arr = [
    {
      img: "/img/Live4.png",
      label: "Career Guidance & Mentorship",
      description:
        "Personalized counseling and mentorship to help you identify your strengths, define career goals, and follow a tailored path to success through focused upskilling and your strengths, define career reskilling programs.",
    },
    {
      img: "/img/Live5.png",
      label: "Employability Enhancement",
      description:
        "Focus on essential soft skills, industry-specific knowledge, and professional etiquette to make you a highly sought-after candidate ready for the evolving job market.",
    },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto overflow-hidden">
      {/* Animated Heading */}
      <motion.h1
        className="font-serif font-bold text-[36px] leading-[40px] text-center text-blue-950 mb-4"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Seamless Career Transitions
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="font-sans font-normal text-[18px] leading-[28px] text-center text-gray-600 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        We empower individuals to navigate their career paths with confidence,
        offering tailored programs for upskilling, reskilling, and ensuring
        sustainable employability in a dynamic job market.
      </motion.p>

      {/* Animated Cards */}
      <motion.div
        className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-8 flex-wrap"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {arr.map((itemData, i) => (
          <motion.div key={i} variants={item} whileHover={{ scale: 1.05 }}>
            <Card4
              img={itemData.img}
              label={itemData.label}
              description={itemData.description}
              cardWidth="100%"
              cardHeight="auto"
              cardMaxWidth="550px"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Seamless;
