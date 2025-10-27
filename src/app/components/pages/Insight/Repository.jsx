// // import React from 'react';
// // import ReportCard from '../../atoms/ReportCard';
// // // Assuming ReportCard is imported from its location
// //  // Adjust path as necessary

// // const Repository = () => {
// //   // Define data for the four reports, including color classes
// //   const reportsData = [
// //     {
// //       title: 'Annual Impact Report 2023',
// //       description: 'Comprehensive report detailing our outreach, programs, and socio-economic impact across India.',
// //       format: 'PDF',
// //       iconBgClass: 'bg-yellow-800', // Light Yellow/Beige background
// //     },
// //     {
// //       title: 'Skill Gap Analysis: IT Sector',
// //       description: 'An in-depth research on skill deficits in the Indian IT sector and recommendations for training.',
// //       format: 'PDF',
// //       iconBgClass: 'bg-pink-800', // Light Pink background
// //     },
// //     {
// //       title: 'Youth Employability Study: 2024',
// //       description: 'A study on the employment trend and challenges faced by Indian youth.',
// //       format: 'DOCX',
// //       iconBgClass: 'bg-teal-700', // Light Teal/Mint background
// //     },
// //     {
// //       title: 'Digital Literacy: Rural Outreach Data',
// //       description: 'Statistical insights from our digital literacy programs, focus on rural and marginalized groups.',
// //       format: 'XLSX',
// //       iconBgClass: 'bg-purple-800', // Light Purple background
// //     },
// //   ];

// //   return (
// //     <section className='py-20 bg-gray-50'>
// //       {/* Main container with fixed max-width and centered */}
// //       <div className='mx-auto px-4' style={{ maxWidth: '1120px' }}>

// //         {/* Section Title */}
// //         <h1 className="font-['Merriweather'] font-bold text-4xl text-center text-gray-900 mb-12">
// //           Data Repository & Reports
// //         </h1>
        
// //         {/* Reports Grid: Responsive layout for the four cards */}
// //         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
// //           {reportsData.map((report, index) => (
// //             <ReportCard
// //               key={index}
// //               title={report.title}
// //               description={report.description}
// //               format={report.format}
// //               iconBgClass={report.iconBgClass}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Repository;



// import React from 'react';
// import ReportCard from '../../atoms/ReportCard';


// const Repository = () => {
//   // Data with exact colors matching the image, and new icon image paths
//   const reportsData = [
//     {
//       title: 'Annual Impact Report 2023',
//       description: 'Comprehensive report detailing our outreach, programs, and socio-economic impact across India.',
//       format: 'PDF',
//       bgColor: '#FEF8F0',    // Light Beige Card BG
//       iconImgSrc: '/img/Insight6.png', // Placeholder path for an orange PDF icon
//     },
//     {
//       title: 'Skill Gap Analysis: IT Sector',
//       description: 'An in-depth research on skill deficits in the Indian IT sector and recommendations for training.',
//       format: 'PDF',
//       bgColor: '#FFE6DF',    // Light Pink Card BG
//       iconImgSrc: '/img/Insight6.png', // Placeholder path for a pink PDF icon
//     },
//     {
//       title: 'Youth Employability Study: 2024',
//       description: 'A study on the employment trend and challenges faced by Indian youth.',
//       format: 'DOCX',
//       bgColor: '#EDE8FF',    // Light Teal Card BG
//       iconImgSrc: '/img/Insight6.png', // Placeholder path for a teal DOCX icon
//     },
//     {
//       title: 'Digital Literacy: Rural Outreach Data',
//       description: 'Statistical insights from our digital literacy programs, focus on rural and marginalized groups.',
//       format: 'XLSX',
//       bgColor: '#DFF7FF',    // Light Lavender Card BG
//       iconImgSrc: '/img/Insight6.png', // Placeholder path for a lavender XLSX icon
//     },
//   ];

//   return (
//     <section className='py-20 bg-white'>
//       {/* Main container with fixed max-width and centered */}
//       <div className='mx-auto px-4' style={{ maxWidth: '1120px' }}>

//         {/* Section Title */}
//         <h1 className="font-['Merriweather'] font-bold text-4xl text-center text-gray-900 mb-12">
//           Data Repository & Reports
//         </h1>
        
//         {/* Reports Grid: Centered and responsive */}
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
//           {reportsData.map((report, index) => (
//             <ReportCard
//               key={index}
//               title={report.title}
//               description={report.description}
//               format={report.format}
//               bgColor={report.bgColor}
//               iconImgSrc={report.iconImgSrc} // Pass the image source
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Repository;



import React from "react";
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
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1 className="font-['Merriweather'] font-bold text-3xl sm:text-4xl text-center text-gray-900 mb-12">
          Data Repository & Reports
        </h1>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reportsData.map((report, index) => (
            <div
              key={index}
              className="w-full flex justify-center items-stretch"
            >
              <ReportCard
                title={report.title}
                description={report.description}
                format={report.format}
                bgColor={report.bgColor}
                iconImgSrc={report.iconImgSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Repository;
