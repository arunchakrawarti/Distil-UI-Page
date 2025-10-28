// import React from "react";
// import Card4 from "../../atoms/Card4";

// const Practice = () => {
//   const arr = [
//     {
//       img: "/img/Prac1.png",
//       label: "Earn While You Learn",
//       description:
//         "Gain skills and financial independence simultaneously through our designed to integrated training and employment models.",
//       button: "Learn More →",
//       bgColor: "#FFE6DF",
//     },
//     {
//       img: "/img/Prac2.png",
//       label: "Structured Apprenticeships",
//       description:
//         "Immersive, on-the-job training programs designed to develop expertise under industry mentorship.",
//       button: "Learn More →",
//       bgColor: "#DFF7FF",
//     },
//     {
//       img: "/img/Prac3.png",
//       label: "Industry Tie-ups",
//       description:
//         "Direct placements and training opportunities designed to vast network of corporate partners, ensuring career progression.",
//       button: "Learn More →",
//       bgColor: "#EDE8FF",
//     },
//   ];

//   return (
//     <div className="lg:py-20 md:py-10 sm:py-10 px-4">
//       <h1 className="font-merri font-bold text-[36px] leading-[100%] text-center text-blue-950">
//         Practical Pathways:
//         <br />
//         <span className="text-red-600">
//           Earn While You Learn & Apprenticeships
//         </span>
//       </h1>

//       <p className="font-opensans font-normal text-[18px] leading-[28px] text-center max-w-[672px] mx-auto mt-4 text-gray-700">
//         Our innovative programs combine theoretical knowledge with practical work experience, allowing participants to earn a livelihood while acquiring valuable skills and certifications.
//       </p>

//       <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 flex-wrap">
//         {arr.map((item, i) => (
//           <Card4
//             key={i}
//             img={item.img}
//             label={item.label}
//             description={item.description}
//             button={item.button}
//             bgColor={item.bgColor}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Practice;



"use client";
import React from "react";
import Card4 from "../../atoms/Card4";
import { motion } from "framer-motion";

const Practice = () => {
  const arr = [
    {
      img: "/img/Prac1.png",
      label: "Earn While You Learn",
      description:
        "Gain skills and financial independence our integrated simultaneously through our integrated training and employment models.",
      button: "Learn More →",
      bgColor: "#FFE6DF",
    },
    {
      img: "/img/Prac2.png",
      label: "Structured Apprenticeships",
      description:
        "Immersive, on-the-job training programs  designed to develop expertise under industry mentorship.",
      button: "Learn More →",
      bgColor: "#DFF7FF",
    },
    {
      img: "/img/Prac3.png",
      label: "Industry Tie-ups",
      description:
        "Direct placements and training opportunities via our vast network of corporate partners, ensuring career progression.",
      button: "Learn More →",
      bgColor: "#EDE8FF",
    },
  ];

  return (
    <section className="lg:py-20 md:py-10 sm:py-10 px-4 overflow-hidden">
      {/* Heading Animation */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-merri font-bold text-[36px] leading-[100%] text-center text-blue-950"
      >
        Practical Pathways:
        <br />
        <span className="text-red-600">
          Earn While You Learn & Apprenticeships
        </span>
      </motion.h1>

      {/* Paragraph Animation */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-opensans font-normal text-[18px] leading-[28px] text-center max-w-[672px] mx-auto mt-4 text-gray-700"
      >
        Our innovative programs combine theoretical knowledge with practical work experience, allowing participants to earn a livelihood while acquiring valuable skills and certifications.
      </motion.p>

      {/* Cards Animation (Staggered Entry) */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {arr.map((item, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card4
              img={item.img}
              label={item.label}
              description={item.description}
              button={item.button}
              bgColor={item.bgColor}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Practice;
