import React from 'react';
// import Image from 'next/image'; // Image import removed as it's not used directly here
import Card12 from '../../atoms/Card12';

const placeholderImage1 = '/img/Insight1.png';
const placeholderImage2 = '/img/Insight2.png';
const placeholderImage3 = '/img/Insight3.png';
const placeholderImage4 = '/img/Insight4.png';

const Latest = () => {
  const cardsData = [
    {
      img: placeholderImage1,
      title: 'The Future of Digital Skilling in Rural India',
      description: 'Explore how technology is transforming skill development opportunities in',
      date: 'August 15, 2024',
      buttonText: 'Read More',
      tag: 'SKILLING',
    },
    {
      img: placeholderImage2,
      title: 'Bridging the Gap: Higher Education Meets Industry Needs',
      description: 'An in-depth look at how Distil is collaborating with universities to align',
      date: 'July 28, 2024',
      buttonText: 'Read More',
      tag: 'EDUCATION',
    },
    {
      img: placeholderImage3,
      title: 'Empowering Artisans: A Story of Sustainable Livelihoods',
      description: 'Discover the journey of local artisans who found new opportunities and',
      date: 'July 10, 2024',
      buttonText: 'Read More',
      tag: 'IMPACT',
    },
    {
      img: placeholderImage4,
      title: 'AI in Education: Transforming the Learning Experience',
      description: 'How artificial intelligence is being leveraged to create',
      date: 'June 25, 2024',
      buttonText: 'Read More',
      tag: 'TECHNOLOGY',
    },
    {
      img: placeholderImage1, 
      title: 'Next Gen Tech: The Rise of the Metaverse',
      description: 'Exploring how virtual worlds are shaping social and economic landscapes.',
      date: 'May 10, 2024',
      buttonText: 'Read More',
      tag: 'SKILLING',
    },
  ];

  return (
    <section className='py-16'>
     <h1 className="font-[var(--font-merriweather)] font-bold text-[36px] leading-[40px] tracking-[0px] text-center text-blue-950">
  Latest <span className='text-red-600'> Blogs</span>
</h1>

      <div className='mx-auto mt-10 px-4' style={{ maxWidth: '1120px' }}>
        <div className='flex space-x-8 overflow-x-auto pb-4'>
          {cardsData.map((card, index) => (
            <div key={index} className='flex-shrink-0 w-[296px]'>
              <Card12 
                img={card.img}
                title={card.title}
                description={card.description}
                date={card.date}
                buttonText={card.buttonText}
                tag={card.tag}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Latest;