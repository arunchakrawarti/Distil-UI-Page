// import React from "react";
// import ReportCard from "../../atoms/ReportCard";

// const Repository = () => {
//   const reportsData = [
//     {
//       title: "Annual Impact Report 2023",
//       description:
//         "Comprehensive report detailing our outreach, programs, and socio-economic impact across India.",
//       format: "PDF",
//       bgColor: "#FEF8F0",
//       iconImgSrc: "/img/Insight6.png",
//     },
//     {
//       title: "Skill Gap Analysis: IT Sector",
//       description:
//         "An in-depth research on skill deficits in the Indian IT sector and recommendations for training.",
//       format: "PDF",
//       bgColor: "#FFE6DF",
//       iconImgSrc: "/img/Insight6.png",
//     },
//     {
//       title: "Youth Employability Study: 2024",
//       description:
//         "A study on the employment trend and challenges faced by Indian youth.",
//       format: "DOCX",
//       bgColor: "#EDE8FF",
//       iconImgSrc: "/img/Insight6.png",
//     },
//     {
//       title: "Digital Literacy: Rural Outreach Data",
//       description:
//         "Statistical insights from our digital literacy programs, focus on rural and marginalized groups.",
//       format: "XLSX",
//       bgColor: "#DFF7FF",
//       iconImgSrc: "/img/Insight6.png",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <h1 className="font-['Merriweather'] font-bold text-3xl sm:text-4xl text-center text-gray-900 mb-12">
//           Data Repository & Reports
//         </h1>

//         {/* Grid layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//           {reportsData.map((report, index) => (
//             <div
//               key={index}
//               className="w-full flex justify-center items-stretch"
//             >
//               <ReportCard
//                 title={report.title}
//                 description={report.description}
//                 format={report.format}
//                 bgColor={report.bgColor}
//                 iconImgSrc={report.iconImgSrc}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Repository;




"use client";
import React from "react";
import { motion } from "framer-motion";
import ReportCard from "../../atoms/ReportCard";

const Repository = () => {
  const reportsData = [
    {
      title: "Annual Impact Report 2023",
      description:
        "Comprehensive report detailing our outreach, programs, and socio-economic impact across India.",
      format: "PDF",
      bgColor: "#FEF8F0",
      iconImgSrc: "/img/Insight6.png",
    },
    {
      title: "Skill Gap Analysis: IT Sector",
      description:
        "An in-depth research on skill deficits in the Indian IT sector and recommendations for training.",
      format: "PDF",
      bgColor: "#FFE6DF",
      iconImgSrc: "/img/Insight6.png",
    },
    {
      title: "Youth Employability Study: 2024",
      description:
        "A study on the employment trend and challenges faced by Indian youth.",
      format: "DOCX",
      bgColor: "#EDE8FF",
      iconImgSrc: "/img/Insight6.png",
    },
    {
      title: "Digital Literacy: Rural Outreach Data",
      description:
        "Statistical insights from our digital literacy programs, focus on rural and marginalized groups.",
      format: "XLSX",
      bgColor: "#DFF7FF",
      iconImgSrc: "/img/Insight6.png",
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* Animated Title */}
        <motion.h1
          className="font-['Merriweather'] font-bold text-3xl sm:text-4xl text-center text-blue-950 mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Data Repository & <span className="text-red-600">Reports</span>
        </motion.h1>

        {/* Animated Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {reportsData.map((report, index) => (
            <motion.div
              key={index}
              className="w-full flex justify-center items-stretch"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <ReportCard
                title={report.title}
                description={report.description}
                format={report.format}
                bgColor={report.bgColor}
                iconImgSrc={report.iconImgSrc}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Repository;
