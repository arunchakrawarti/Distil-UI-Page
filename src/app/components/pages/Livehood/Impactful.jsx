// import React from 'react'
// import Card7 from '../../atoms/Card7';

// const Impactful = () => {
//     const arr = [
//         {
//             img: "/img/Live6.png",
//             title: "250K+",
//             profile: "TRAINEES PLACED",
//             description:
//                 "“Distil provided me with the skills and confidence I needed to land my dream job. Their support was invaluable.”",
//             identification: "- Priya Sharma, Software Developer",
//         },
//         {
//             img: "/img/Live7.png",
//             title: "1500+",
//             profile: "CORPORATE PARTNERS",
//             description:
//                 "“Our collaboration with Distil has significantly streamlined our hiring process, bringing us top-tier talent efficiently.”",
//             identification: "- Rajesh Kumar, HR Director",
//         }
//     ];

//     return (
//         <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
//             <h2 className="font-serif font-bold text-[36px] leading-[40px] tracking-tight text-center text-blue-950 mb-12">
//                 Impactful Journeys, Real Stories
//             </h2>

//             {/* Responsive grid with visible gap */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] justify-items-center">
//                 {arr.map((item, i) => (
//                     <div
//                         key={i}
//                         className="
//                             shadow-lg rounded-xl bg-white p-4 
//                             w-full max-w-[544px] h-[397px]
//                             flex items-center justify-center
//                         "
//                     >
//                         <Card7
//                             img={item.img}
//                             title={item.title}
//                             profile={item.profile}
//                             description={item.description}
//                             identification={item.identification}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Impactful;



"use client";
import React from "react";
import { motion } from "framer-motion";
import Card7 from "../../atoms/Card7";

const Impactful = () => {
  const arr = [
    {
      img: "/img/Live6.png",
      title: "250K+",
      profile: "TRAINEES PLACED",
      description:
        "“Distil provided me with the skills and confidence I needed to land my dream job. Their support was invaluable.”",
      identification: "- Priya Sharma, Software Developer",
    },
    {
      img: "/img/Live7.png",
      title: "1500+",
      profile: "CORPORATE PARTNERS",
      description:
        "“Our collaboration with Distil has significantly streamlined our hiring process, bringing us top-tier talent efficiently.”",
      identification: "- Rajesh Kumar, HR Director",
    },
  ];

  return (
    <motion.div
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <motion.h2
        className="font-serif font-bold text-[36px] leading-[40px] tracking-tight text-center text-blue-950 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Impactful Journeys, Real Stories
      </motion.h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] justify-items-center">
        {arr.map((item, i) => (
          <motion.div
            key={i}
            className="shadow-lg rounded-xl bg-white p-4 w-full max-w-[544px] h-[397px] flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.3 + 0.3, // small delay for each card
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <Card7
              img={item.img}
              title={item.title}
              profile={item.profile}
              description={item.description}
              identification={item.identification}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Impactful;
