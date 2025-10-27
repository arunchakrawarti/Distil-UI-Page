import Image from 'next/image'
import React from 'react'

const ReadyPro = () => {
  return (
   
    <div className='py-16 px-4 sm:px-6 lg:px-8'>
      
      
      <div className='relative w-full max-w-[1120px] h-[348px] mx-auto rounded-xl overflow-hidden shadow-2xl'>
        
        
        <Image
          src="/img/Live7.jpg" 
          fill={true} 
          alt='Students walking in a university setting'
          className='object-cover'
        />

        
        <div className='absolute inset-0 bg-black bg-opacity-40'></div>
        
        
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-10'>
          
         
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-snug text-white mb-4">
            Ready to Transform Your Career?
          </h1>
          
          
          <p className="font-sans font-normal text-base sm:text-lg md:text-[18px] leading-relaxed text-white max-w-lg mb-8">
            Join Distil's vibrant ecosystem of growth, learning, and endless opportunities. Your journey to a brighter future starts here.
          </p>

         
          <button
            className="px-8 py-3 bg-white text-gray-800 font-semibold rounded-lg shadow-lg 
                       hover:bg-gray-100 transition duration-300 flex items-center justify-center"
          >
            Get Started Today 
            <span className='ml-2 text-xl'>→</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReadyPro