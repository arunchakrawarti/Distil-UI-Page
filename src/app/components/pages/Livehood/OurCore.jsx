"use client";
import React from "react";
import { motion } from "framer-motion";
import Card4 from "../../atoms/Card4";

const OurCore = () => {
  const arr = [
    {
      img: "/img/Live1.png",
      label: "Job Seeker Support",
      description:
        "Comprehensive guidance from resume building to interview preparation, ensuring job seekers are market-ready and confident for their desired roles.",
      bgColor: "#FFE6DF",
    },
    {
      img: "/img/Live2.png",
      label: "AMI Deployment",
      description:
        "Leveraging our Assistant Manager of Instruction (AMI) system for personalized learning paths and efficient skill development, bridging the gap to employment.",
      bgColor: "#DFF7FF",
    },
    {
      img: "/img/Live3.png",
      label: "HR & Payroll Administration",
      description:
        "Streamlined and compliant HR and payroll services for businesses, ensuring smooth operations and employee satisfaction, managed by experts.",
      bgColor: "#EDE8FF",
    },
  ];

  // Animation variants for staggered entrance
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
    <div className="lg:py-20 md:py-10 sm:py-10 px-4 overflow-hidden">
      {/* Heading with Fade-in */}
      <motion.h1
        className="font-merri font-bold text-[36px] leading-[100%] text-center text-blue-950"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Our Core Livelihood Services
      </motion.h1>

      {/* Animated Cards */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 flex-wrap"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {arr.map((itemData, i) => (
          <motion.div key={i} variants={item}>
            <Card4
              img={itemData.img}
              label={itemData.label}
              description={itemData.description}
              bgColor={itemData.bgColor}
              cardWidth="100%"
              cardMaxWidth="352px"
              cardHeight="280px"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurCore;
