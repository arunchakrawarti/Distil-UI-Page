import Image from 'next/image';
import React from 'react';

const SuccessCard = ({ img, title, description }) => {
  return (
    <div className="relative w-full h-[288px] overflow-hidden rounded-xl shadow-lg group">
      
      {/* Image with scale animation */}
      <div className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110">
        <Image
          src={img}
          alt={title || 'Success Story Image'}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/30"></div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
        <h3 className="font-['Open Sans'] font-bold text-gray-200 text-2xl leading-tight mb-2">
          {title}
        </h3>
        <p className="font-['Open Sans'] font-normal text-sm text-gray-300 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SuccessCard;
