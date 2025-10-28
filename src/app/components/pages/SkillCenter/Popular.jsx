// import React from "react";
// import PopularCard from "../../atoms/PopularCard";
// import popularData from "../../../../../public/db/popularData.json";

// const Popular = () => {
//   return (
//     <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
//       <h1 className="font-serif font-bold text-[28px] sm:text-[32px] md:text-[36px] leading-[32px] sm:leading-[36px] md:leading-[40px] text-center text-blue-950 mb-12">
//         Popular <span className="text-red-600"> Courses</span>
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
//         {popularData.poplarData.map((item, i) => (
//           <PopularCard key={i} {...item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Popular;



"use client";
import React from "react";
import { motion } from "framer-motion";
import PopularCard from "../../atoms/PopularCard";
import popularData from "../../../../../public/db/popularData.json";

const Popular = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white overflow-hidden">
      {/* Animated Heading */}
      <motion.h1
        className="font-serif font-bold text-[28px] sm:text-[32px] md:text-[36px] leading-[32px] sm:leading-[36px] md:leading-[40px] text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <span className="text-blue-950">Popular</span>{" "}
        <span className="text-red-600">Courses</span>
      </motion.h1>

      {/* Animated Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {popularData.poplarData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.2, // stagger animation
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            <PopularCard {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
