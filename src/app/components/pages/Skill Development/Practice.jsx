import React from "react";
import Card4 from "../../atoms/Card4";

const Practice = () => {
  const arr = [
    {
      img: "/img/Prac1.png",
      label: "Earn While You Learn",
      description:
        "Gain skills and financial independence simultaneously through our integrated training and employment models.",
      button: "Learn More →",
      bgColor: "#FFE6DF",
    },
    {
      img: "/img/Prac2.png",
      label: "Structured Apprenticeships",
      description:
        "Immersive, on-the-job training programs designed to develop expertise under industry mentorship.",
      button: "Learn More →",
      bgColor: "#DFF7FF",
    },
    {
      img: "/img/Prac3.png",
      label: "Industry Tie-ups",
      description:
        "Direct placements and training opportunities vast network of corporate partners, ensuring career progression.",
      button: "Learn More →",
      bgColor: "#EDE8FF",
    },
  ];

  return (
    <div className="lg:py-20 md:py-10 sm:py-10 px-4">
      <h1 className="font-merri font-bold text-[36px] leading-[100%] text-center text-blue-950">
        Practical Pathways:
        <br />
        <span className="text-red-600">
          Earn While You Learn & Apprenticeships
        </span>
      </h1>

      <p className="font-opensans font-normal text-[18px] leading-[28px] text-center max-w-[672px] mx-auto mt-4 text-gray-700">
        Our innovative programs combine theoretical knowledge with practical work experience, allowing participants to earn a livelihood while acquiring valuable skills and certifications.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 flex-wrap">
        {arr.map((item, i) => (
          <Card4
            key={i}
            img={item.img}
            label={item.label}
            description={item.description}
            button={item.button}
            bgColor={item.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Practice;
