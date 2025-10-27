import React from "react";
import Card4 from "../../atoms/Card4";

const Seamless = () => {
  const arr = [
    {
      img: "/img/Live4.png",
      label: "Career Guidance & Mentorship",
      description:
        "Personalized counseling and mentorship to help you identify your strengths, define career goals, tailored programs for upskilling tailored programs for upskilling and tailored programs for upskilling path to success.",
    },
    {
      img: "/img/Live5.png",
      label: "Employability Enhancement",
      description:
        "Focus on essential soft skills, industry-specific knowledge, and professional etiquette to make you a highly sought-after candidate.",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <h1 className="font-serif font-bold text-[36px] leading-[40px] text-center text-blue-950 mb-4">
        Seamless Career Transitions
      </h1>

      {/* Paragraph */}
      <p className="font-sans font-normal text-[18px] leading-[28px] text-center text-gray-600 max-w-3xl mx-auto mb-12">
        We empower individuals to navigate their career paths with confidence,
        offering tailored programs for upskilling, reskilling, and ensuring
        sustainable employability in a dynamic job market.
      </p>

      {/* Cards */}
      <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center gap-8 flex-wrap">
        {arr.map((item, i) => (
          <Card4
            key={i}
            img={item.img}
            label={item.label}
            description={item.description}
            cardWidth="100%"          // ✅ Mobile & tablet full width
            cardHeight="auto"         // ✅ Height adjusts based on content
            cardMaxWidth="512px"      // ✅ Max width on large screens
          />
        ))}
      </div>
    </div>
  );
};

export default Seamless;
