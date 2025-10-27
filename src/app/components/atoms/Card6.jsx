import Image from 'next/image'
import React from 'react'

const Card6 = ({ img, title }) => {
    return (
        // The card is centered, has a white background, rounded corners, and a subtle shadow/border.
        <div className='bg-white h-[167px] w-full max-w-[355px] mx-auto rounded-lg border border-gray-100 shadow-sm flex flex-col justify-center items-center p-4'>
            
            {/* Image (Icon) */}
            <div className='mb-3'>
                <Image
                    src={img}
                    height={44}
                    width={44}
                    alt='Statistic Icon'
                />
            </div>
            
            {/* Title/Statistic Text */}
            <h1 className="font-serif font-normal text-[20px] leading-[28px] tracking-[0px] text-center text-gray-800 px-2">
                {title}
            </h1>

        </div>
    )
}

export default Card6