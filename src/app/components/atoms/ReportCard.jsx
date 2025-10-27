// import React from 'react';
// // Assuming you have an Icon component or use a library like lucide-react/react-icons
// // For simplicity, we'll use a placeholder icon (FaFileAlt from react-icons, common setup)

// // NOTE: You may need to install react-icons or use a different icon library.
// // For now, we'll use a simple colored box as a placeholder for the icon.
// const FileIcon = ({ colorClass }) => (
//   <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
//     {/* Placeholder for a file/document icon (e.g., PDF icon) */}
//     <span className='text-white text-xl'>📄</span> 
//   </div>
// );

// const ReportCard = ({ title, description, format, iconBgClass }) => {
//   return (
//     // Card Container: fixed width, rounded, shadow, and specific background color
//     <div className={`w-[260px] h-[260px] p-6 rounded-xl shadow-lg flex flex-col justify-between ${iconBgClass.replace('-900', '-50')}`}>
      
//       {/* Top Section: Icon and Title */}
//       <div>
//         <FileIcon colorClass={iconBgClass} />
//         <h3 className="font-['Merriweather'] font-semibold text-base text-gray-900 mt-4 mb-2">
//           {title}
//         </h3>
        
//         {/* Description */}
//         <p className="font-['Open Sans'] font-normal text-xs leading-relaxed text-gray-700">
//           {description}
//         </p>
//       </div>

//       {/* Bottom Section: Format Tag and Download Link */}
//       <div className='flex items-center justify-between mt-4'>
//         {/* Format Tag (e.g., PDF, DOCX) */}
//         <span className={`py-1 px-3 text-xs font-semibold rounded-full ${iconBgClass.replace('-900', '-300')} text-white`}>
//           {format}
//         </span>
        
//         {/* Download Link */}
//         <button className="flex items-center font-['Open Sans'] text-sm font-semibold text-gray-700 transition duration-150 hover:text-blue-600">
//           Download 
//           <span className='ml-1 text-base'>↓</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReportCard;


import React from 'react';
import Image from 'next/image';
const ReportCard = ({ title, description, format, bgColor, iconImgSrc }) => {
  return (
    <div className='w-[260px] h-[260px] p-6 rounded-xl shadow-lg flex flex-col justify-between' style={{ backgroundColor: bgColor }}>
      
      
      <div>
       
        <div className='w-10 h-10 rounded-lg flex items-center justify-center p-2'> 
          <Image
            src={iconImgSrc}
            width={28} 
            height={28} 
            alt="Document Icon"
            className="object-contain"
          />
        </div>
        
        <h3 className="font-[var(--font-open-sans)] font-semibold text-[18px] leading-[23px] tracking-[-0.45px] text-gray-900 mt-4 mb-2">
          {title}
        </h3>
        
        {/* Description */}
        <p className="font-[var(--font-open-sans)] font-normal text-[14px] leading-[20px] tracking-[0px] text-gray-700">
          {description}
        </p>
      </div>

     
      <div className='flex items-center justify-between mt-4'>
       
        <span className='py-1 px-3 text-xs font-semibold rounded-full text-white' style={{ backgroundColor: iconImgSrc ? '#6B7280' : bgColor }}>
          {format}
        </span>
        
        {/* Download Link */}
        <button className="flex items-center font-['Open Sans'] text-sm font-semibold text-gray-700 transition duration-150 hover:text-blue-600">
          Download 
          <span className='ml-1 text-base'>→</span>
        </button>
      </div>
    </div>
  );
};

export default ReportCard;