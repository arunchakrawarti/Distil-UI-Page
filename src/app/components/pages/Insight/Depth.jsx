import React from "react";
import Card4 from "../../atoms/Card4";

const Depth = () => {
  const arr = [
    {
      img: "/img/Insight7.png",
      label: "Government Skilling Project: Uttar Pradesh",
      description:
        "A detailed analysis of our collaboration with the UP government to skill over 50,000 youth in critical trades.",
      button: "Read More →",
      bgColor: "#FFE6DF",
    },
    
    {
      img: "/img/Insight6.png",
      label: "Corporate Upskilling: Tech Giant Partnership",
      description:
        "How Distil designed and delivered a bespoke upskilling program for a major tech firm, boosting employee productivity.",
      button: "Read More →",
      bgColor: "#EDE8FF",
    },
    {
      img: "/img/Insight77.png",
      label: "Rural Employability: Rajasthan Model",
      description:
        "Our innovative approach to enhancing employability for rural youth in Rajasthan, focusing on literacy and vocational skills.",
      button: "Read More →",
      bgColor: "#DFF7FF",
    },
  ];

  return (
    <div className="lg:py-20 md:py-10 sm:py-10 px-4">
      <h1 className="font-merri font-bold text-[36px] leading-[100%] text-center text-blue-950">
       In-Depth 
        <br />
        <span className="text-red-600">
          Case Studies
        </span>
      </h1>

     

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 flex-wrap">
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

export default Depth;
