import React from "react";
import Card4 from "../../atoms/Card4";

const OurCore = () => {
  const arr = [
    {
      img: "/img/Live1.png",
      label: "Job Seeker Support",
      description:
        "Comprehensive guidance from resume building to interview preparation, ensuring job seekers are market-ready and confident for their desired roles.",
      bgColor: "#FFE6DF",
    },
    {
      img: "/img/Live2.png",
      label: "AMI Deployment",
      description:
        "Leveraging our Assistant Manager of Instruction (AMI) system for personalized learning paths and efficient skill development, bridging the gap to employment.",
      bgColor: "#DFF7FF",
    },
    {
      img: "/img/Live3.png",
      label: "HR & Payroll Administration",
      description:
        "Streamlined and compliant HR and payroll services for businesses, ensuring smooth operations and employee satisfaction, managed by experts.",
      bgColor: "#EDE8FF",
    },
  ];

  return (
    <div className="lg:py-20 md:py-10 sm:py-10 px-4">
      <h1 className="font-merri font-bold text-[36px] leading-[100%] text-center text-blue-950">
        Our Core Livelihood Services
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 flex-wrap">
        {arr.map((item, i) => (
          <Card4
            key={i}
            img={item.img}
            label={item.label}
            description={item.description}
            bgColor={item.bgColor}
            cardWidth="100%"        // ✅ Full width on small screens
            cardMaxWidth="352px"    // ✅ Max width for large screens
            cardHeight="280px"      // Fixed height
          />
        ))}
      </div>
    </div>
  );
};

export default OurCore;
