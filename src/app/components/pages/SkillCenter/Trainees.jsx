// import React from 'react'
// import Card7 from '../../atoms/Card7';


// const Trainees = () => {
//     const arr = [
//         {
//             img: "/img/Distil17.png",
//             description:
//                 "“Distil transformed my career. The practical training and placement support were exceptional. I secured a job even before completing my course!”",
//             conversion: "Priya Sharma",
//              paragarph:"Digital Marketing Specialist"
//         },
//         {
//             img: "/img/Distil18.png",
//             description:
//                 "“The hands-on experience at Distil's automotive center was invaluable. I now confidently work with advanced vehicle systems, thanks to their expert instructors.”",
//             conversion: "- Rajesh Kumar",
//             paragarph:"Automotive Technician"
//         },
//          {
//             img: "/img/Distil19.png",
//             description:
//                 "“Distil's commitment to job placement truly sets them apart. They guided me through every step, from skill development to interview preparation.”",
//             conversion: "- Rajesh Kumar",
//             paragarph:"Healthcare Assistant"
//         }
//     ];

//     return (
        
//         <div className='py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
            
           
//             <h2 className="font-serif font-bold text-[36px] leading-[40px] tracking-tight text-center text-blue-950 mb-12">
//                 Impactful Journeys, Real Stories
//             </h2>
            
           
//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
//     {arr.map((item, i) => (
//         <div key={i} className='h-[352px] shadow rounded-lg w-[352px]'>
//             <Card7
//                 img={item.img}
//                 description={item.description}
//                 identification={item.identification}
//                 paragarph={item.paragarph}
//                 conversion={item.conversion}
//             />
//         </div>
//     ))}
// </div>


//         </div>
//     )
// }

// export default Trainees

import React from 'react'
import Card7 from '../../atoms/Card7';

const Trainees = () => {
    const arr = [
        {
            img: "/img/Distil17.png",
            description:
                "“Distil transformed my career. The practical training and placement support were exceptional. I secured a job even before completing my course!”",
            conversion: "Priya Sharma",
            paragarph:"Digital Marketing Specialist"
        },
        {
            img: "/img/Distil18.png",
            description:
                "“The hands-on experience at Distil's automotive center was invaluable. I now confidently work with advanced vehicle systems, thanks to their expert instructors.”",
            conversion: "- Rajesh Kumar",
            paragarph:"Automotive Technician"
        },
         {
            img: "/img/Distil19.png",
            description:
                "“Distil's commitment to job placement truly sets them apart. They guided me through every step, from skill development to interview preparation.”",
            conversion: "- Rajesh Kumar",
            paragarph:"Healthcare Assistant"
        }
    ];

    return (
        <div className='bg-[#FFF8EB] py-16'>
            <div className='px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
                <h2 className="font-serif font-bold text-[36px] leading-[40px] tracking-tight text-center text-blue-950 mb-12">
                    Impactful Journeys, Real Stories
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                    {arr.map((item, i) => (
                        <div key={i} className='w-full max-w-[352px] h-auto sm:h-[352px] shadow rounded-lg bg-white'>
                            <Card7
                                img={item.img}
                                description={item.description}
                                identification={item.identification}
                                paragarph={item.paragarph}
                                conversion={item.conversion}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trainees;
