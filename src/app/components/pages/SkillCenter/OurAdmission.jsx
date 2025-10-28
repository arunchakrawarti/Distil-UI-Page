"use client";
import React from "react";
import { motion } from "framer-motion";
import Card4 from "../../atoms/Card4";

const OurAdmission = () => {
  const arr = [
    {
      img: "/img/Distil1.png",
      label: "Explore Programs",
      description:
        "Discover a wide array of skill-based programs tailored to industry demands across various sectors.",
    },
    {
      img: "/img/Distil2.png",
      label: "Submit Application",
      description:
        "Fill out our online application form with your details and preferred course. It's quick and easy.",
    },
    {
      img: "/img/Distil3.png",
      label: "Attend Orientation",
      description:
        "Participate in an orientation session to understand the course structure and campus facilities.",
    },
    {
      img: "/img/Distil4.png",
      label: "Enroll & Begin",
      description:
        "Complete your enrollment formalities and start your journey towards a brighter future with Distil.",
    },
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-serif font-bold text-[28px] sm:text-[32px] md:text-[36px] leading-tight text-center text-blue-950 mb-10 sm:mb-12"
      >
        Our Admissions Process
      </motion.h1>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          sm:gap-8 
          justify-items-center
        "
      >
        {arr.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="
              w-full 
              max-w-[352px] 
              h-auto 
              sm:h-[220px] 
              flex 
              justify-center 
              items-center
            "
          >
            <Card4
              img={item.img}
              label={item.label}
              description={item.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurAdmission;

