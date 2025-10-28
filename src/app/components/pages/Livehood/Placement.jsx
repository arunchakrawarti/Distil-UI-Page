// import React from 'react'
// import Card7 from '../../atoms/Card7'

// const Placement = () => {
//   const arr = [
//     { title: "90+", profile: "Placement Rate" },
//     { title: "100+", profile: "Industry Sectors" },
//     { title: "12+", profile: "Years of Excellence" }
//   ]

//   return (
//     <div className="flex flex-wrap justify-center gap-8 py-12">
//       {arr.map((item, i) => (
//         <div 
//           key={i} 
//           className="shadow-lg rounded-xl w-full sm:w-[356px]" 
//         >
//           <Card7
//             title={item.title}
//             profile={item.profile}
//             cardWidth="100%"    
//             cardHeight="156px"
//           />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Placement



"use client";
import React from "react";
import { motion } from "framer-motion";
import Card7 from "../../atoms/Card7";

const Placement = () => {
  const arr = [
    { title: "90+", profile: "Placement Rate" },
    { title: "100+", profile: "Industry Sectors" },
    { title: "12+", profile: "Years of Excellence" },
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
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-8 py-12 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {arr.map((itemData, i) => (
        <motion.div
          key={i}
          variants={item}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="shadow-lg rounded-xl w-full sm:w-[356px] bg-white"
        >
          <Card7
            title={itemData.title}
            profile={itemData.profile}
            cardWidth="100%"
            cardHeight="156px"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Placement;
