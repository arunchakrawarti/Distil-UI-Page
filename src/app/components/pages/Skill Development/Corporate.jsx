import Image from 'next/image'
import React from 'react'

const Corporate = () => {
  return (
    <div className='bg-white'>
      <div className='flex flex-col lg:flex-row items-center lg:items-start mx-auto max-w-[1120px] gap-6 lg:gap-10 py-5 px-4 sm:px-6'>
        
        
        {/* Right Image */}
<div className='flex-1 mt-6 lg:mt-0'>
          <h1 className='font-merri font-bold text-2xl sm:text-3xl md:text-4xl leading-tight sm:leading-snug md:leading-tight tracking-normal text-blue-950 mt-5'>
            Corporate 
 
 <br/>
            <span className='text-red-600'>Upskilling Programs</span>
          </h1>
          <p className='font-roboto font-normal text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 md:leading-6 tracking-normal align-middle mt-4'>
           We empower organizations to future-proof their Professionals by providing advanced training modules for existing employees, enhancing productivity and fostering continuous growth.
          </p>
          <div className='font-roboto font-normal text-sm sm:text-base md:text-[16px] leading-6 sm:leading-7 md:leading-6 tracking-normal align-middle mt-4 space-y-3'>
            <p>Leadership development and management training</p>
            <p>Digital transformation and technology adoption skills</p>
            <p>Customized solutions for employee skill enhancement</p>
            <p>Certification programs for professional advancement</p>
          </div>
        </div>

        <div className="flex-1">
  <div className="overflow-hidden rounded-xl shadow-md">
    <Image
      src="/img/Skill3.png"
      height={406}
      width={528}
      alt="Skill.png"
      className="w-full h-auto object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-105"
    />
  </div>
</div>


        {/* Left Content */}
        

      </div>
    </div>
  )
}

export default Corporate
