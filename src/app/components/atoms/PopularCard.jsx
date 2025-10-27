import Image from 'next/image'
import React from 'react'
import { ChevronRight } from 'lucide-react'; 

const PopularCard = ({ img, title, description, month }) => {
    return (
        <div className='w-full h-[430px] overflow-hidden rounded-xl shadow-lg bg-white flex flex-col'>
           
            <div className="relative h-48 w-full">
                <Image
                    src={img}
                    alt='popularcard'
                    className='object-cover'
                    fill 
                />
            </div>

            <div className='p-6 flex flex-col flex-1'>
                <h1 className="font-serif font-bold text-[20px] leading-[28px] tracking-[-0.5px] text-gray-900 mb-2">
                    {title}
                </h1>

                <p className="font-sans font-normal text-[16px] leading-[20px] tracking-[0px] text-gray-600 mb-4 flex-1">
                    {description}
                </p>

                {month && (
                    <span className='inline-block bg-gray-200 text-gray-800 text-xs w-[70px] font-medium px-3 py-1 rounded-full'>
                        {month}
                    </span>
                )}

                <div className="mt-6 flex justify-end">
                    <a href="#" className='flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-150'>
                        Learn More
                        <ChevronRight className='ml-1 w-4 h-4' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PopularCard
