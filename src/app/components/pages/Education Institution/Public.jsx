// import React from 'react'
// import Card6 from '../../atoms/Card6';


// const Public = () => {
//     let arr = [
//         {
//             img: "/img/Public.png",
//             title: "Enabled over 50+ PPPs nationwide"
//         },
//         {
//             img: "/img/Public1.png",
//             title: "Enhanced employability for 200,000+ students"
//         },
//         {
//             img: "/img/Public2.png",
//             title: "Developed industry-relevant curriculum standards"
//         }
//     ];
    
//     // Applying the light pink background as seen in the screenshot
//     return (
//         <div className='bg-[#FFEFEB] lg:py-20 sm:py-10 md:py-15 mt-10'> 
            
//             {/* Header and Description Container */}
//             <div className='max-w-5xl mx-auto px-4 sm:px-6 mb-10'>
//                 <h1 className="font-serif font-bold text-[36px] leading-[1.1] tracking-tight text-center text-blue-950">
//                     Public-Private Partnership (PPP) Institutes
//                 </h1>
//                 <p className="font-sans font-normal text-[18px] leading-[28px] tracking-[0px] text-center mt-4 text-gray-700 max-w-4xl mx-auto">
//                     Our unique PPP model fosters collaboration between government bodies, industry leaders, and educational institutions to create high-impact, sustainable skilling and education programs. These partnerships are crucial for national development.
//                 </p>
//             </div>

//             {/* Grid for Cards */}
//             <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6'>
//                 {
//                     arr.map((item, i) => {
//                         return <Card6
//                             key={i}
//                             img={item.img}
//                             title={item.title}
//                         />
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default Public




"use client";
import React from "react";
import { motion } from "framer-motion";
import Card6 from "../../atoms/Card6";

const Public = () => {
  const arr = [
    {
      img: "/img/Public.png",
      title: "Enabled over 50+ PPPs nationwide",
    },
    {
      img: "/img/Public1.png",
      title: "Enhanced employability for 200,000+ students",
    },
    {
      img: "/img/Public2.png",
      title: "Developed industry-relevant curriculum standards",
    },
  ];

  return (
    <div className="bg-[#FFEFEB] lg:py-20 sm:py-10 md:py-15 mt-10 overflow-hidden">
      {/* Header Section */}
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 mb-10 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="font-serif font-bold text-[36px] leading-[1.1] tracking-tight text-blue-950">
          Public-Private Partnership (PPP) Institutes
        </h1>
        <p className="font-sans font-normal text-[18px] leading-[28px] text-gray-700 mt-4 max-w-4xl mx-auto">
          Our unique PPP model fosters collaboration between government bodies,
          industry leaders, and educational institutions to create high-impact,
          sustainable skilling and education programs. These partnerships are
          crucial for national development.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
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
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Card6 img={item.img} title={item.title} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Public;
