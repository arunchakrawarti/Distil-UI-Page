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
        width: cardWidth,
        height: cardHeight,
      }}
    >
      {/* Profile Image with scaling effect */}
      {img && (
        <div className='mb-4 w-[96px] h-[96px] overflow-hidden rounded-full group'>
          <Image
            src={img}
            height={96}
            width={96}
            alt='Profile Image'
            className='object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110'
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
