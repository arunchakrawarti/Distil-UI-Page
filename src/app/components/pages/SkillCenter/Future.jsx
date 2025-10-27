// import Image from 'next/image'
// import React from 'react'

// const Future = () => {
//   return (
//     <div className='bg-[#FFE6DF] mt-23'>
//       <div className='flex flex-col lg:flex-row items-center lg:items-start mx-auto max-w-[1120px]  gap-6 lg:gap-10 lg:py-25 sm:py-10 md:py-15 px-4 sm:px-6'>
//         {/* Left Content */}
//         <div className='flex-1'>
//           <h1 className='font-serif font-bold text-[45px] leading-[55px]'>
//             Empowering Futures at Distil Skilling Centers
//           </h1>
//           <p className='font-sans font-normal text-[18px] leading-[28px] mt-4'>
//             Discover our state-of-the-art skilling centers across India, designed to provide comprehensive, industry-aligned training for a brighter tomorrow. From digital skills to vocational trades, we prepare you for success.
//           </p>
//           <button
//             className="mt-5 px-6 sm:px-8 py-3 text-white font-semibold rounded-lg shadow-lg 
//                        bg-gradient-to-r from-red-600 to-purple-800 
//                        hover:from-red-700 hover:to-purple-900 
//                        transition duration-300 w-full sm:w-auto text-center"
//           >
//             Explore App →
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className='flex-1 mt-6 lg:mt-0'>
//           <Image
//             src="/img/Distil.png"
//             height={406}
//             width={528}
//             alt='Skill.png'
//             className='w-full h-auto object-cover rounded-xl'
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Future


import Image from 'next/image'
import React from 'react'

const Future = () => {
  return (
    <div className='bg-[#FFE6DF] mt-23'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start mx-auto max-w-[1120px] gap-6 lg:gap-10 lg:py-25 sm:py-10 md:py-15 px-4 sm:px-6'>
        
        {/* Left Content */}
        <div className='flex-1'>
          <h1 className='font-serif font-bold text-[45px] leading-[55px] text-blue-950'>
            Empowering Futures at Distil Skilling Centers
          </h1>
          <p className='font-sans font-normal text-[18px] leading-[28px] mt-4 text-gray-700'>
            Discover our state-of-the-art skilling centers across India, designed to provide comprehensive, industry-aligned training for a brighter tomorrow. From digital skills to vocational trades, we prepare you for success.
          </p>
          <button
            className="mt-5 px-6 sm:px-8 py-3 text-white font-semibold rounded-lg shadow-lg 
                       bg-gradient-to-r from-red-600 to-purple-800 
                       hover:from-red-700 hover:to-purple-900 
                       transition duration-300 w-full sm:w-auto text-center"
          >
            Explore App →
          </button>
        </div>

        {/* Right Image with hover scaling */}
        <div className='flex-1 mt-6 lg:mt-0 overflow-hidden rounded-xl group'>
          <Image
            src="/img/Distil.png"
            height={406}
            width={528}
            alt='Skill.png'
            className='w-full h-auto object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-110'
          />
        </div>
      </div>
    </div>
  )
}

export default Future
