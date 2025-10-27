// import Image from 'next/image'
// import React from 'react'

// const Join = () => {
//   return (
//     <div>
//       <Image
//       src="/img/Jion.png"
//      height={503}
//      width={1530}
//      alt='Jion.png'
//       />
//       <h1 className="font-['Reddit_Sans'] font-bold text-[32px] leading-[48px] tracking-[0%] text-center align-middle">Join Distil Education</h1>
//       <p className="font-['Reddit_Sans'] font-normal text-[16px] leading-[100%] tracking-[0%] text-center align-middle">Join Distil Education and be part of a community where learning meets opportunity. Here, you don’t just study—you gain real skills, earn while you learn, and prepare for a career that lasts. With the right guidance and support at every step, Distil Education is where your journey begins and your future takes shape.</p>
//       <button className="bg-[linear-gradient(126.5deg,#EC131D_0%,#2F3192_100%)]">Join Our Group</button>
//     </div>
//   )
// }

// export default Join


import Image from 'next/image';
import React from 'react';

const Join = () => {
  return (
    <div className="relative w-full py-16 md:py-24 bg-pink-50">
      
      <Image
        src="/img/Jion.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        alt="Distil Education background with mandala"
        className="z-0"
      />
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        
        <h1 
          className="font-['Reddit_Sans'] font-bold text-4xl sm:text-[32px] leading-tight text-blue-950 mb-4"
        >
          Join <span className='text-red-600'>Distil Education</span>
        </h1>
        
        <p 
          className="font-['Reddit_Sans'] font-normal text-md leading-relaxed text-gray-700 mb-8"
        >
          Join Distil Education and be part of a community where learning meets opportunity. Here, you don’t just study—you gain real skills, earn while you learn, and prepare for a career that lasts. With the right guidance and support at every step, Distil Education is where your journey begins and your future takes shape.
        </p>
        
        <button 
          className="px-12 py-3 text-white font-semibold rounded-lg shadow-lg transition duration-300 
                     bg-gradient-to-r from-[#EC131D] to-[#2F3192] 
                     hover:from-[#2F3192] hover:to-[#EC131D]" 
        >
          Join Our Group
        </button>
      </div>
    </div>
  );
}

export default Join;