import React from 'react'

const Ready = () => {
  return (
    <div className="bg-[#FFEFEB] w-full  mx-auto py-20  px-4 sm:px-6 lg:px-8">
      <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-snug sm:leading-snug md:leading-[48px] tracking-[-1.2px] text-center mb-6">
       Ready to Transform Education Together?
      </h1>
      <p className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed sm:leading-7 md:leading-[28px] text-center max-w-3xl mx-auto mb-8">
       Partner with Distil to create impactful educational programs and empower the next generation of learners and professionals.
      </p>
      <div className="flex justify-center">
        <button
          className="px-10 py-4 gap-2 rounded-md bg-gradient-to-r from-red-600 to-purple-800 
                     hover:from-red-700 hover:to-purple-900 transition duration-300 text-white font-medium"
        >
          Partner With Us
        </button>
      </div>
    </div>
  )
}

export default Ready
