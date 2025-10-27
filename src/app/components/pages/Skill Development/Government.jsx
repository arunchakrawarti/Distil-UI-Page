import Image from 'next/image'
import React from 'react'

const Government = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col mt-10 lg:flex-row items-center lg:items-start mx-auto max-w-[1120px] gap-6 lg:gap-10 py-5 px-4 sm:px-6'>
        
        {/* Right Image */}
       <div className="flex-1">
  <div className="overflow-hidden rounded-xl shadow-md">
    <Image
      src="/img/Skill1.png"
      height={406}
      width={528}
      alt="Skill.png"
      className="w-full h-auto object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
    />
  </div>
</div>

        {/* Left Content */}
        <div className='flex-1 mt-6 lg:mt-0'>
          <h1 className='font-merri font-bold text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-snug md:leading-tight tracking-normal text-blue-950 mt-5'>
            Government <br/>
            <span className='text-red-600'>Skilling Initiatives</span>
          </h1>
          <p className='font-roboto font-normal text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 md:leading-6 tracking-normal align-middle mt-4'>
            We partner with various government schemes and ministries to implement large-scale skilling programs, ensuring national development goals are met by fostering skilled professionals.
          </p>
          <div className='font-roboto font-normal text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 md:leading-6 tracking-normal align-middle mt-4 space-y-3'>
            <p>Aligning with National Skill Development Mission (NSDM)</p>
            <p>Implementing Pradhan Mantri Kaushal Vikas Yojana (PMKVY)</p>
            <p>Developing skills for Make in India and Digital India initiatives</p>
            <p>Customized programs addressing regional skill gaps</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Government
