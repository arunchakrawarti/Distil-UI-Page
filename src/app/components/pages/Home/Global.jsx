"use client"
import React, { useRef, useEffect } from 'react';

// --- Card3 Component (Moved here for single-file structure) ---
const Card3 = ({ img }) => {
    return (
        <div className='relative w-full h-[300px] sm:h-[400px] rounded-lg shadow-xl overflow-hidden'>
            <img
                src={img}
                alt='global image'
                className='w-full h-full object-cover rounded-lg' 
            />
        </div>
    )
}



const Global = () => {
    const containerRef = useRef(null);
    const scrollDirection = useRef(1);
    const scrollSpeed = 1.0; 

    let arr = [
        { img: "/img/global1.png" },
        { img: "/img/global2.png" },
        { img: "/img/global3.png" },
        { img: "/img/global4.png" },
        { img: "/img/global5.png" },
        { img: "/img/global6.png" },
    ]

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const interval = setInterval(() => {
            if (scrollDirection.current === 1) {
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
                    scrollDirection.current = -1;
                }
            }
            else if (scrollDirection.current === -1) {
                if (container.scrollLeft <= 1) {
                    scrollDirection.current = 1;
                }
            }
            
            container.scrollLeft += scrollDirection.current * scrollSpeed;

        }, 15);

        return () => clearInterval(interval);
    }, []); 
    
    const scrollbarStyles = `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
    `;

    return (
        <div className="py-10 bg-white">
            <style>{scrollbarStyles}</style>
            
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="font-['Reddit_Sans'] font-bold text-[32px] leading-[100%] tracking-[0%] text-blue-950">
                    Global Footprint & <span className='text-red-700'>Presence</span>
                </h1>
                <p className="font-['Reddit_Sans'] font-medium text-[16px] sm:text-[18px] leading-[24px] tracking-[0%] mt-4 max-w-4xl mx-auto">
                    Distil Education’s impact extends beyond India’s borders, with partnerships and skilling initiatives reaching Mauritius, Africa, and other emerging markets. With 21+ regional offices covering 80% of India’s industrial clusters and global collaborations in education and Professionals mobility, Distil is building bridges across continents—creating opportunities for youth to learn, earn, and thrive in both local and international economies.
                </p>
            </div>

           
            <div className='relative max-w-7xl mx-auto mt-10 px-0 sm:px-6 lg:px-8'>
                
               
                <div className='hidden sm:block absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none'></div>
                
               
                <div className='hidden sm:block absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none'></div>

               
                <div
                    ref={containerRef}
                    className='
                        flex 
                        overflow-x-scroll 
                        hide-scrollbar
                        space-x-4 sm:space-x-6 lg:space-x-8 
                        px-4 sm:px-0
                    '
                >
                    {arr.map((item, i) => (
                        <div key={i} className='
                            flex-shrink-0 
                            w-[calc(100%/3 - 16px)] sm:w-[calc(100%/3 - 20px)] lg:w-[calc(100%/3 - 28px)]
                        '>
                            <Card3 img={item.img} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Global
