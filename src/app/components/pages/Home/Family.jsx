"use client";
import Image from "next/image";
import React, { useState } from "react";

const Family = () => {
  // --- Family Section Data ---
  const companies = [
    { initial: "D", name: "Distil Education & Technology Pvt Ltd", color: "red" },
    { initial: "V", name: "VONE India Service Pvt Ltd", color: "orange" },
    { initial: "D", name: "Distil India Ventures Pvt Ltd", color: "red" },
    { initial: "A", name: "Antodya Skills Foundation", color: "red" },
    { initial: "P", name: "Peace of Dream Foundation", color: "orange" },
    { initial: "D", name: "Distil Foundation", color: "red" },
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "red":
        return { bg: "bg-red-100", text: "text-red-700" };
      case "orange":
        return { bg: "bg-orange-100", text: "text-orange-700" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-700" };
    }
  };

  // --- People Section Data ---
  const sections = {
  "Industry Engagement": {
    title: (
      <>
        Industry <span className="text-red-600">Engagement</span>
      </>
    ),
    points: [
      "Collaborate with Industry on Role-Based Skill Requirements",
      "Analyze Functional Requirements, Role Volumes & Compensation Trends",
      "Assess Work Conditions for Learning Suitability",
      "Establish EducationLinked Partnership Programs",
    ],
    image1: { src: "/img/Peopleimg.png", alt: "Peopleimg.png", width: 438, height: 332 },
    image2: { src: "/img/People1img.png", alt: "People1img.png", width: 354, height: 610 },
  },
  "Academic Alignment": {
    title: (
      <>
        Academic <span className="text-red-600">Alignment</span>
      </>
    ),
    points: [
      "Conduct sector-specific Skill Gap Assessment",
      "Co-create Course Modules with University Partners",
      "Integrate National Schemes into learning pathways",
      "Onboard Trainers & Facilitators",
    ],
    image1: { src: "/img/people21.png", alt: "people21.png", width: 438, height: 332 },
    image2: { src: "/img/people22.png", alt: "people22.png", width: 354, height: 610 },
  },
  "Learner Recruitment": {
    title: (
      <>
        Learner <span className="text-red-600">Recruitment</span>
      </>
    ),
    points: [
      "Engage Youth via College Outreach, Job Fairs, and Other Platforms",
      "Pre-Screen candidates using Psychometrics and Background Checks",
      "Provide Career Counseling Based on Sectoral Pathways",
      "Assign with Industry Partner based on Screening and Assessments",
    ],
    image1: { src: "/img/people31.png", alt: "people31.png", width: 438, height: 332 },
    image2: { src: "/img/people32.png", alt: "people32.png", width: 354, height: 610 },
  },
  "Professionals Mobilisation": {
    title: (
      <>
        Workforce <span className="text-red-600">Mobilisation</span>
      </>
    ),
    points: [
      "Arrange Lodging, Travel and Bank Setup",
      "Facilitate Higher Education & WorkIntegrated Orientation",
      "Initiate Trainee Onboarding and Digital Attendance Tracking",
      "Enrolment with University for Training Commencement",
    ],
    image1: { src: "/img/people41.png", alt: "people41.png", width: 438, height: 332 },
    image2: { src: "/img/people42.png", alt: "people42.png", width: 354, height: 610 },
  },
  "Upskilling & Supervision": {
    title: (
      <>
        Upskilling & <span className="text-red-600">Supervision</span>
      </>
    ),
    points: [
      "Real-time Tracking (Attendance, Output, Performance)",
      "Daily Classes & BiAnnual Assessments",
      "Payroll & Compliance Management",
      "Grievance Addressal, Attrition Forecasting & Redeployment",
    ],
    image1: { src: "/img/people51.png", alt: "people51.png", width: 438, height: 332 },
    image2: { src: "/img/people52.png", alt: "people52.png", width: 354, height: 610 },
  },
};


  const [activeTab, setActiveTab] = useState("Industry Engagement");
  const activeData = sections[activeTab];
  const tabNames = Object.keys(sections);

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* ---------- FAMILY SECTION ---------- */}
      <div className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative">
        <h1 className="text-center text-white font-bold text-3xl md:text-4xl mb-8">
          Our Family of Companies
        </h1>
        <p className="text-center text-gray-300 text-base md:text-lg mb-12">
          Together, we create opportunities and build lasting impact worldwide
        </p>

        {/* Floating White Card (6 Pillars) */}
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 
                        relative z-20 -mb-[12vh]">
          <h2 className="text-center font-bold text-xl md:text-2xl text-gray-800 mb-2">
            The 6 Strong Pillars Behind Us
          </h2>
          <p className="flex items-center justify-center text-lg md:text-xl text-gray-600 mb-8">
            <span className="flex-grow border-t border-gray-300"></span>
            <span className="mx-4">
              Helped <span className="font-semibold text-blue-600">12.5L+</span> trainees placed
            </span>
            <span className="flex-grow border-t border-gray-300"></span>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10">
            {companies.map((company, index) => {
              const { bg, text } = getColorClasses(company.color);
              return (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 py-8 rounded-lg border border-gray-200 bg-gray-100 shadow-sm hover:bg-gray-200 transition duration-300"
                >
                  <div
                    className={`flex-shrink-0 w-14 h-14 flex items-center justify-center 
                                 rounded-lg text-4xl font-extrabold ${bg} ${text}`}
                  >
                    {company.initial}
                  </div>
                  <span className="flex-grow text-gray-800 font-bold text-base md:text-lg">
                    {company.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button
              className="inline-flex items-center justify-center px-12 py-3 
                         bg-blue-900 text-white font-semibold text-lg rounded-lg shadow-md
                         hover:bg-blue-800 transition duration-300"
            >
              View More
            </button>
          </div>
        </div>
      </div>

      {/* ---------- PEOPLE SECTION ---------- */}
      <div className="relative w-full z-10">
        <div className="max-w-[1290px] mx-auto bg-white rounded-2xl shadow-lg p-8 mt-16">
          <h1 className="text-center font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[110%] text-blue-950 mb-10">
            Why People love <span className="text-red-600">Distil Education?</span>
          </h1>

          <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden">
            {/* Tabs */}
            <div className="flex flex-row overflow-x-auto lg:flex-col w-full lg:w-[300px] bg-white  border-gray-200">
              {tabNames.map((name) => (
                <button
                  key={name}
                  className={`flex-1 lg:w-[290px] px-4 lg:px-8 py-4 text-left text-sm sm:text-base md:text-lg font-semibold transition-all duration-300
                    ${
                      activeTab === name
                        ? "bg-red-600 text-white  shadow-inner"
                        : "bg-white text-gray-800 hover:bg-gray-100 border-b border-gray-200"
                    }`}
                  onClick={() => setActiveTab(name)}
                >
                  {name}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row flex-grow bg-gray-100 p-6 lg:p-10">
              {activeData && (
                <>
                  <div className="w-full lg:w-[500px] lg:pr-10 mb-10 lg:mb-0">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-gray-800">
                      {activeData.title}
                    </h2>
                    <div className="space-y-4 mb-8 text-gray-700 ml-2 text-sm sm:text-base md:text-lg">
                      {activeData.points.map((point, index) => (
                        <p key={index} className="flex items-start">
                          <span className="mr-3 font-extrabold text-lg sm:text-xl leading-none">
                            &bull;
                          </span>
                          {point}
                        </p>
                      ))}
                    </div>

                    <Image
                      src={activeData.image1.src}
                      height={activeData.image1.height}
                      width={activeData.image1.width}
                      alt={activeData.image1.alt}
                      className="rounded-lg shadow-xl object-cover w-full h-auto"
                    />
                  </div>

                  <div className="flex justify-center items-center w-full lg:w-[354px]">
                    <Image
                      src={activeData.image2.src}
                      height={activeData.image2.height}
                      width={activeData.image2.width}
                      alt={activeData.image2.alt}
                      className="rounded-lg shadow-xl object-cover w-full h-auto"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;


