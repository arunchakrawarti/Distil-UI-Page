import React from 'react'
import Card5 from '../../atoms/Card5';


const OurEstimation = () => {
    
    let arr = [
        {
            "img": "/img/Edu2.png",
            "title": "Orchid University",
            "description": "A flagship institution focusing on interdisciplinary studies, research, and innovation. Orchid University aims to cultivate critical thinking and leadership skills.",
            "button": "Learn More"
        },
        {
            "img": "/img/Edu3.png",
            "title": "Distil Pharmacy College",
            "description": "Dedicated to producing highly skilled pharmacists and pharmaceutical scientists. Our college offers state-of-the-art labs and a curriculum aligned with industry demands.",
            "button": "Learn More"
        },
        {
            "img": "/img/Edu4.png",
            "title": "PPP Institutes Network",
            "description": "A growing network of Public-Private Partnership institutes, designed to bridge skill gaps and enhance employability through collaborative educational models.",
            "button": "Learn More"
        },
        {
            "img": "/img/Edu5.png",
            "title": "Distil School Programs",
            "description": "Innovative school education programs focusing on foundational literacy, numeracy, and 21st-century skills, preparing younger generations for future success.",
            "button": "Learn More"
        },
        {
            "img": "/img/Edu6.png",
            "title": "Vocational Training Hubs",
            "description": "Specialized centers offering practical, trade-specific training in high-demand sectors, ensuring immediate employment opportunities post-graduation.",
            "button": "Learn More"
        },
        {
            "img": "/img/Edu7.png",
            "title": "Research & Innovation",
            "description": "A dedicated hub fostering groundbreaking research and technological innovation across various disciplines, participating in academic and industrial advancement.",
            "button": "Learn More"
        }
    ];

    return (
        <div className='py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
            
           
            <div className='max-w-4xl mx-auto mb-10'>
                <h1 className="font-serif font-bold text-[36px] leading-[1.1] tracking-tight text-center text-blue-950">
                    Our Esteemed <span className='text-red-600'>Educational Institutions</span>
                </h1>
                <p className="font-sans font-normal text-[18px] leading-[28px] tracking-[0px] text-center mt-4 text-gray-700">
                    We proudly operate and partner with a network of institutions committed to academic excellence and holistic development. Each institution is a beacon of specialized learning, fostering innovation and talent.
                </p>
            </div>

           
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {arr.map((card, index) => (
                    
                    <Card5
                        key={index}
                        img={card.img}
                        title={card.title}
                        description={card.description}
                        button={card.button}
                    />
                ))}
            </div>

        </div>
    )
}

export default OurEstimation