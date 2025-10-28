"use client";
import React from "react";
import { motion } from "framer-motion";
import Card7 from "../../atoms/Card7";

const Trainees = () => {
  const arr = [
    {
      img: "/img/Distil17.png",
      description:
        "“Distil transformed my career. The practical training and placement support were exceptional. I secured a job even before completing my course!”",
      conversion: "Priya Sharma",
      paragarph: "Digital Marketing Specialist",
    },
    {
      img: "/img/Distil18.png",
      description:
        "“The hands-on experience at Distil's automotive center was invaluable. I now confidently work with advanced vehicle systems, thanks to their expert instructors.”",
      conversion: "Rajesh Kumar",
      paragarph: "Automotive Technician",
    },
    {
      img: "/img/Distil19.png",
      description:
        "“Distil's commitment to job placement truly sets them apart. They guided me through every step, from skill development to interview preparation.”",
      conversion: "Rohit Mehra",
      paragarph: "Healthcare Assistant",
    },
  ];

  return (
    <div className="bg-[#FFF8EB] py-16 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Heading animation */}
        <motion.h2
          className="font-serif font-bold text-[36px] leading-[40px] tracking-tight text-center text-blue-950 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Impactful Journeys, Real Stories
        </motion.h2>

        {/* Cards animation grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {arr.map((item, i) => (
            <motion.div
              key={i}
              className="w-full max-w-[352px] h-auto sm:h-[352px] shadow-lg rounded-xl bg-white"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.2, // stagger effect
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Card7
                img={item.img}
                description={item.description}
                paragarph={item.paragarph}
                conversion={item.conversion}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainees;
