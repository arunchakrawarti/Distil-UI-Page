// import Image from 'next/image'
// import React from 'react'

// const Card7 = ({ img, title, profile, description, identification }) => {
//   return (
    
//     <div className='flex flex-col items-center justify-center p-6 w-full h-full text-center'>
      
//       {/* Profile Image */}
//       <div className='mb-4'>
//         <Image
//           src={img}
//           height={96}
//           width={96}
//           alt='Profile Image'
//           className='rounded-full object-cover w-[96px] h-[96px]'
//         />
//       </div>

//       {/* Statistic/Title */}
//       <h1 className='font-serif font-bold text-[48px] leading-[48px] tracking-tight bg-gradient-to-r from-red-600 to-purple-800 bg-clip-text text-transparent mb-1'>
//         {title}
//       </h1>
      
//       <hr className='border border-gray-300 mt-5 w-[300px]'/>
//       <span className="font-sans font-normal text-[18px] mt-5 leading-[28px] tracking-[0.45px] uppercase text-gray-700 mb-6">
//         {profile}
//       </span>

//       {/* Description / Testimonial */}
//       <p className="font-sans font-normal italic text-[16px] leading-[26px] tracking-normal text-gray-800 max-w-xl mx-auto">
//         {description}
//       </p>
      
//       {/* Identification / Name */}
//       <h3 className="font-sans font-semibold text-[14px] leading-[20px] tracking-normal text-red-600 mt-2">
//         {identification}
//       </h3>
//     </div>
//   )
// }

// export default Card7


import Image from 'next/image'
import React from 'react'

const Card7 = ({
  img,
  title,
  profile,
  description,
  identification,
  conversion,
  paragarph,
  cardWidth = "auto",
  cardHeight = "auto"
}) => {
  return (
    <div
      className='flex flex-col items-center justify-center p-6 text-center bg-white rounded-xl'
      style={{
        width: cardWidth,    // Dynamic width
        height: cardHeight,  // Dynamic height
      }}
    >
      {/* Profile Image */}
      {img && (
        <div className='mb-4 w-[96px] h-[96px] overflow-hidden rounded-full'>
          <Image
            src={img}
            height={96}
            width={96}
            alt='Profile Image'
            className='object-cover w-full h-full'
          />
        </div>
      )}

      {/* Statistic/Title */}
      {title && (
        <h1 className='font-serif font-bold text-[48px] leading-[48px] tracking-tight bg-gradient-to-r from-red-600 to-purple-800 bg-clip-text text-transparent mb-1'>
          {title}
        </h1>
      )}

      {/* Profile */}
      {profile && (
        <span className="font-sans font-normal text-[18px] mt-5 leading-[28px] tracking-[0.45px] uppercase text-gray-700 mb-6">
          {profile}
        </span>
      )}

      {/* Description */}
      {description && (
        <p className="font-sans font-normal italic text-[16px] leading-[26px] tracking-normal text-gray-800 max-w-full md:max-w-xl mx-auto">
          {description}
        </p>
      )}
      
      {/* Identification */}
      {identification && (
        <h3 className="font-sans font-semibold text-[14px] leading-[20px] tracking-normal text-red-600 mt-2">
          {identification}
        </h3>
      )}
       {conversion && (
        <h3 className="font-sans font-semibold text-[14px] leading-[20px] tracking-normal text-black mt-2">
          {conversion}
        </h3>
      )}
      {paragarph && (
        <h3 className="font-sans font-semibold text-[14px] leading-[20px] tracking-normal text-gray-500 mt-2">
          {paragarph}
        </h3>
      )}
      
    </div>
  )
}

export default Card7
