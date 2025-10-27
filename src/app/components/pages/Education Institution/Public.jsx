import React from 'react'
import Card6 from '../../atoms/Card6';


const Public = () => {
    let arr = [
        {
            img: "/img/Public.png",
            title: "Enabled over 50+ PPPs nationwide"
        },
        {
            img: "/img/Public1.png",
            title: "Enhanced employability for 200,000+ students"
        },
        {
            img: "/img/Public2.png",
            title: "Developed industry-relevant curriculum standards"
        }
    ];
    
    // Applying the light pink background as seen in the screenshot
    return (
        <div className='bg-[#FFEFEB] lg:py-20 sm:py-10 md:py-15 mt-10'> 
            
            {/* Header and Description Container */}
            <div className='max-w-5xl mx-auto px-4 sm:px-6 mb-10'>
                <h1 className="font-serif font-bold text-[36px] leading-[1.1] tracking-tight text-center text-blue-950">
                    Public-Private Partnership (PPP) Institutes
                </h1>
                <p className="font-sans font-normal text-[18px] leading-[28px] tracking-[0px] text-center mt-4 text-gray-700 max-w-4xl mx-auto">
                    Our unique PPP model fosters collaboration between government bodies, industry leaders, and educational institutions to create high-impact, sustainable skilling and education programs. These partnerships are crucial for national development.
                </p>
            </div>

            {/* Grid for Cards */}
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6'>
                {
                    arr.map((item, i) => {
                        return <Card6
                            key={i}
                            img={item.img}
                            title={item.title}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Public