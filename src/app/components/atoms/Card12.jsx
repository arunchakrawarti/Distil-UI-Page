import Image from 'next/image';
import React from 'react';


const Card12 = ({ img, title, description, date, buttonText, tag }) => {
  return (
    
    <div className='w-[296px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md'>
     
      <div className='relative'>
        <Image
          src={img}
          height={192}
          width={296}
          alt={title || 'Content image'}
          
          className='h-[192px] w-full object-cover'
        />
       
        {tag && (
          <div className='absolute left-0 top-4 bg-red-600 px-3 py-1 text-sm font-semibold uppercase ml-2 rounded-2xl tracking-wider text-white'>
            {tag}
          </div>
        )}
      </div>

      {/* Content area */}
      <div className='p-6'>
        <h1 className="mb-2 font-['Open Sans'] text-2xl font-semibold leading-tight tracking-[-0.45px] text-blue-950">
          {title}
        </h1>
        <p className="mb-4 font-['Open Sans'] text-sm font-normal leading-relaxed text-gray-700">
          {description}
        </p>
        
      
        <div className='flex items-center justify-between pt-2'>
          <p className="font-['Open Sans'] text-xs font-normal leading-4 text-gray-700">
            {date}
          </p>
          
          
          <button className="flex items-center font-['Open Sans'] text-sm font-medium leading-relaxed text-gray-700 transition duration-150 hover:text-blue-600">
            {buttonText || 'Read More'}
            {/* Simple right arrow character */}
            <span className='ml-2 text-xl leading-none'>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card12;