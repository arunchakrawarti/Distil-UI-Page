import Image from 'next/image';
import React from 'react';
import { ChevronRight } from 'lucide-react';

const PhotoCard = ({ img, title, description, company, location }) => {
    return (
        <div className='w-full sm:max-w-[320px] md:max-w-[352px] h-auto sm:h-[468px] overflow-hidden rounded-xl shadow-lg bg-white flex flex-col'>
            
            {/* Image */}
            <div className="relative h-48 w-full">
                <Image
                    src={img} 
                    alt={title}
                    className='object-cover'
                    fill 
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
            </div>

            {/* Content */}
            <div className='p-6 flex flex-col flex-1'>
                <h1 className="font-serif font-bold text-[17px] leading-[28px] tracking-[-0.5px] text-gray-900 mb-2">
                    {title}
                </h1>

                <p className="font-sans font-normal text-[16px] leading-[24px] text-gray-600 mb-4 flex-1">
                    {description}
                </p>

                {/* Company & Location with Icons */}
                <div className='flex flex-wrap gap-2 mb-4'>
                    {company && (
                        <div className='flex items-center text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='mr-1.5 w-4 h-4 text-gray-500'>
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            {company}
                        </div>
                    )}
                    {location && (
                        <div className='flex items-center text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='mr-1.5 w-4 h-4 text-gray-500'>
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            {location}
                        </div>
                    )}
                </div>

                <div className="mt-auto flex justify-end">
                    <a href="#" className='flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 transition duration-150'>
                        View Details
                        <ChevronRight className='ml-1 w-4 h-4' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PhotoCard;
