import React from 'react';
import SuccessCard from '../../atoms/SucessCard';


const Success = () => {
  const storiesData = [
    {
      img: "/img/Insight0.png",
      title: "From Village to Corporate: Priya's Journey",
      description: "Priya, from a small village, transformed her career prospects through Distil's IT training and now thrives in a leading tech company.",
    },
    {
      img: "/img/Insight9.png",
      title: "Skilled for Success: Raj's Entrepreneurial Leap",
      description: "After completing a vocational course, Raj launched his own successful automotive repair business, creating jobs in his community.",
    },
    {
      img: "/img/Insight8.png",
      title: "Empowering Educators: Sunita's Impact",
      description: "Sunita, a teacher, enhanced her digital teaching skills with Distil, now mentoring hundreds of students with modern techniques.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1120px]">
        {/* Section Title */}
        <h1 className="font-[var(--font-merriweather)] font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight text-center text-blue-950 mb-12">
          Our Success <span className="text-red-600">Stories</span>
        </h1>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {storiesData.map((story, index) => (
            <SuccessCard
              key={index}
              img={story.img}
              title={story.title}
              description={story.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Success;
