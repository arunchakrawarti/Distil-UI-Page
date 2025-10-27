import Image from 'next/image';
import React from 'react';

const Media = () => {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1120px]">
        {/* Heading */}
        <h1 className="font-serif font-bold text-center text-3xl sm:text-4xl md:text-5xl mb-12 text-blue-950">
          Media & <span className="text-red-600">Press</span>
        </h1>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="flex-1 w-full lg:w-1/2">
            <p className="font-[var(--font-open-sans)] font-normal text-base sm:text-lg leading-6 sm:leading-7 md:leading-relaxed text-gray-700 mb-8">
              For all media inquiries, press releases, or interview requests, please reach out to our dedicated media relations team. We are happy to provide insights into <strong>Distil Education & Technology's</strong> initiatives, impact, and future plans.
            </p>

            {/* Contact: Head of PR */}
            <div className="mb-6">
              <h3 className="font-[var(--font-open-sans)] font-semibold text-lg sm:text-xl leading-7 text-blue-950 mb-1">
                Head of Public Relations
              </h3>
              <p className="font-[var(--font-open-sans)] font-normal text-base sm:text-lg text-gray-800">
                Anjali Sharma
              </p>
              <p className="font-[var(--font-open-sans)] font-normal text-sm sm:text-base text-gray-600 flex items-center mt-1">
                <span className="mr-2 text-base sm:text-xl">✉️</span>
                anjalisharma@distil.edu.in
              </p>
              <p className="font-[var(--font-open-sans)] font-normal text-sm sm:text-base text-gray-600 flex items-center">
                <span className="mr-2 text-base sm:text-xl">📞</span>
                +91-9876543210
              </p>
            </div>

            {/* Contact: Media Relations Manager */}
            <div>
              <h3 className="font-[var(--font-open-sans)] font-semibold text-lg sm:text-xl leading-7 text-blue-950 mb-1">
                Media Relations Manager
              </h3>
              <p className="font-[var(--font-open-sans)] font-normal text-base sm:text-lg text-gray-800">
                Rahul Verma
              </p>
              <p className="font-[var(--font-open-sans)] font-normal text-sm sm:text-base text-gray-600 flex items-center mt-1">
                <span className="mr-2 text-base sm:text-xl">✉️</span>
                rahul.verma@distil.edu.in
              </p>
              <p className="font-[var(--font-open-sans)] font-normal text-sm sm:text-base text-gray-600 flex items-center">
                <span className="mr-2 text-base sm:text-xl">📞</span>
                +91-9988776655
              </p>
            </div>
          </div>

          {/* Right Section: Image */}
          {/* <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/img/Insight5.png"
              alt="Interviewer speaking to interviewee"
              width={528}
              height={406}
              className="max-w-full  h-auto sm:h-[320px] md:h-[360px] lg:h-[320px] object-cover mt-10 rounded-xl shadow-lg"
            />
          </div> */}

          <div className="flex-1 w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0 group">
  <div className="overflow-hidden rounded-xl shadow-lg mt-10">
    <Image
      src="/img/Insight5.png"
      alt="Interviewer speaking to interviewee"
      width={528}
      height={406}
      className="
        max-w-full h-auto sm:h-[320px] md:h-[360px] lg:h-[320px]
        object-cover rounded-xl
        transition-transform duration-500 ease-in-out
        group-hover:scale-110
      "
    />
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Media;
