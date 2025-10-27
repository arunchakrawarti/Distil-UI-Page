import Image from 'next/image'
import React from 'react'

const Empowing = () => {
  return (
    <div className='bg-[#FFE6DF]'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start mx-auto max-w-[1120px]  gap-6 lg:gap-10 lg:py-25 sm:py-10 md:py-15 px-4 sm:px-6'>
        {/* Left Content */}
        <div className='flex-1'>
          <h1 className='font-merri font-bold text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-snug md:leading-tight tracking-normal mt-5'>
            Empowering India's Future: Skill Development & Capacity Building
          </h1>
          <p className='font-roboto font-normal text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 md:leading-6 tracking-normal align-middle mt-4'>
            Distil Education & Technology is at the forefront of transforming lives through comprehensive skill development. We empower individuals with practical knowledge, industry-relevant training, and pathways to sustainable livelihoods, driving economic growth and social equity across India.
          </p>
          <button
            className="mt-5 px-6 sm:px-8 py-3 text-white font-semibold rounded-lg shadow-lg 
                       bg-gradient-to-r from-red-600 to-purple-800 
                       hover:from-red-700 hover:to-purple-900 
                       transition duration-300 w-full sm:w-auto text-center"
          >
            Explore Programs →
          </button>
        </div>

        {/* Right Image */}
        <div className='flex-1 mt-6 lg:mt-0'>
          <Image
            src="/img/Skill.png"
            height={406}
            width={528}
            alt='Skill.png'
            className='w-full h-auto object-cover rounded-xl'
          />
        </div>
      </div>
    </div>
  )
}

export default Empowing
