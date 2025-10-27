import Image from 'next/image'
import React from 'react'

const Careers = () => {
  return (
    <div className='bg-[#FFE6DF] mt-23 rounded-md max-w-[1120px] m-auto'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start mx-auto w-full gap-6 lg:gap-10 lg:py-15 sm:py-10 md:py-15 px-4 sm:px-6'>

        {/* Left Content */}
        <div className='flex-1'>
          <h1 className='font-serif font-bold text-[45px] leading-[48px]'>
            Empowering Careers, Building Futures
          </h1>
          <p className='font-sans font-normal text-[20px] leading-[28px] mt-4'>
            At Distil Education & Technology, we believe in connecting talent with opportunity. 
            Our comprehensive livelihood programs are designed to guide job seekers, deploy advanced 
            instructional support, streamline HR, and ensure successful career transitions, 
            all with a touch of Indian aspiration.
          </p>
          <button
            className="mt-5 px-6 sm:px-8 py-3 text-white font-semibold rounded-lg shadow-lg 
                       bg-gradient-to-r from-red-600 to-purple-800 
                       hover:from-red-700 hover:to-purple-900 
                       transition duration-300 w-full sm:w-auto text-center"
          >
            Explore Opportunities →
          </button>
        </div>

        {/* Right Image with Scaling */}
        <div className='flex-1 mt-6 lg:mt-0 flex justify-center lg:justify-end'>
          <div className="overflow-hidden rounded-xl"> 
            <Image
              src="/img/Live.png"
              height={396}
              width={297}
              alt='Skill.png'
              className='w-[396px] h-[297px] object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110'
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Careers
