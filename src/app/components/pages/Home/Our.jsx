import React from 'react';

const Our = () => {
  
  const journeyPoints = [
    'Distil Education is one of the fastest growing work integrated education platform committed to transforming India’s youth through skill development, vocational training, and employment facilitation',
    'Founded in 2017 by Arjun Mishra – a first-generation entrepreneur from rural Chhattisgarh - Distil was born out of a grassroots initiative to bridge the gap between education and employability mismatch amongst college students',
    'Over the years, Distil has grown into a national platform with a presence across 400+ Locations, 21+ Regional Offices, and a workforce of over 500+ Employees and 40+ Trainers',
    'The organization has trained more than 70,000 Students and enabled employment for over 2 Lac workers, with a strong focus on youth from Rural and Tier 2 & 3 cities',
    'Distil partners with industry, academia, and government to deliver practical, job-focused training through initiatives like Learn & Earn, Apprenticeship Programs (NAPS & NATS), Work-Integrated Learning, and PPP Colleges',
    'With over 550+ Corporate Clients and 100+ Active Partnerships, Distil continues to align education with industry needs, empowering youth with relevant skills and access to meaningful careers',
  ];

  return (
    <section className="relative lg:-mt-50  w-full min-h-[600px] flex items-center justify-center overflow-hidden">
      
     
      <div className="absolute inset-0 -z-10">
        <video 
          src="/img/viedo1.mp4" 
          autoPlay 
          loop     
          muted    
          playsInline 
          className="w-full h-full object-cover" 
        />
        
        <div className="absolute inset-0  opacity-40"></div> 
      </div>

      
      <div className="relative z-10 container mx-auto p-4 md:p-8 lg:p-12 flex justify-end">
        
        <div className=" bg-opacity-85 p-6 md:p-8 lg:p-10 rounded-lg shadow-xl max-w-lg lg:max-w-xl xl:max-w-2xl text-white">
          
         
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 pb-2 inline-block">
            Our Journey
          </h1>

         
          <div className="space-y-4">
            {journeyPoints.map((point, index) => (
              <p key={index} className="text-gray-300 font-normal text-[17px] leading-[24px]  ">
                
                <span className="text-red-600 text-xl mr-2 font-bold">&raquo;</span>
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Our;




