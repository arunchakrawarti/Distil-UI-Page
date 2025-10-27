import Image from 'next/image'
import React from 'react'

const Card5 = ({ img, title, description, button }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-[358px] mx-auto gap-4">
      
      {/* Image with hover scale */}
      <div className="w-full h-[192px] relative overflow-hidden rounded-md">
        <Image
          src={img}
          alt="photo"
          fill
          className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Title */}
      <h2 className="font-serif font-bold text-[24px] leading-[32px] tracking-[-0.6px] text-red-600">
        {title}
      </h2>

      {/* Description */}
      <p className="font-sans font-normal text-[16px] leading-[24px] tracking-[0px] text-left">
        {description}
      </p>

      {/* Button */}
      <button className="w-full max-w-[358px] h-[40px] bg-[linear-gradient(126.5deg,#EC131D_0%,#2F3192_100%)] rounded-[6px] border border-gray-300 text-white font-medium hover:opacity-90 transition duration-300">
        {button}
      </button>
    </div>
  )
}

export default Card5
