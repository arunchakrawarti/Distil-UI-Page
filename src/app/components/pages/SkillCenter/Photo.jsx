"use client";
import React from "react";
import { motion } from "framer-motion";
import PhotoCard from "../../atoms/PhotoCard";
import CardDataJson from "../../../../../public/db/CardData.json";

const Photo = () => {
  return (
    <div className="bg-[#FFF8EB] overflow-hidden">
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
       

        {/* Animated card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {CardDataJson.CardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2, // stagger animation
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }} // lift on hover
            >
              <PhotoCard
                img={card.img}
                title={card.title}
                description={card.description}
                company={card.company}
                location={card.location}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photo;
