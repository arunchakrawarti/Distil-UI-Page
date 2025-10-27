import Image from 'next/image'
import React from 'react'

const Digital = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 mt-10 lg:px-50 py-12 gap-8">
      
     
       <div className="w-full lg:w-[608px] flex mt-10 justify-center">
        <Image
          src="/img/Edu1.png"
          height={390}
          width={608}
          alt="Edu.png"
          className="lg:w-[408px] md:w-auto sm:w-auto shadow-md rounded-xl h-[370px] object-cover"
        />
      </div>
      <div className="w-full lg:w-[608px] flex flex-col gap-6">
        <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[36px] leading-snug text-blue-950">
          Digital University & 
 <br/><span className="text-red-600">Learning Platforms</span>
        </h1>
        <p className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[28px]">
         Embracing the future of learning, Distil’s Digital University provides flexible, accessible, and high-quality online education. Our platforms leverage AI-driven personalization, interactive content, and virtual labs to deliver an immersive learning experience, breaking geographical barriers to education.
        </p>
        <ul className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[28px] list-disc list-inside space-y-2">
          <li>Flexible online degree and certification courses</li>
          <li>AI-powered personalized learning paths</li>
          <li>Interactive virtual classrooms and labs</li>
          <li>Accessible education for remote learners</li>
          <li>Continuous skill upgrades and professional development</li>
        </ul>
      </div>

     
     

    </div>
  )
}

export default Digital
