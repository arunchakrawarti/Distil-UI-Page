import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-10 overflow-x-hidden">
      {/* Title */}
      <h1 className="font-['Reddit_Sans'] font-bold text-3xl sm:text-4xl leading-[48px] text-center text-[#2F3192]">
        Contact <span className="text-[#EC131D]">Us</span>
      </h1>
      <p className="font-['Reddit_Sans'] text-base sm:text-lg text-center text-[#000000] mt-2 max-w-xl">
        Any question or remarks? Just write us a message!
      </p>

      {/* Main Container */}
      <div className="mt-10 flex flex-col lg:flex-row shadow-lg rounded-2xl overflow-hidden w-full max-w-[1180px] bg-white">
        {/* Left Gradient Section */}
        <div className="bg-gradient-to-br from-[#EC131D] to-[#2F3192] text-white p-6 sm:p-10 w-full lg:w-[460px] flex flex-col justify-between rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
          <div>
            <h2 className="font-['Poppins'] font-semibold text-2xl sm:text-[28px] mb-2">
              Contact Information
            </h2>
            <p className="font-['Poppins'] text-base sm:text-lg">
              Say something to start a live chat!
            </p>

            {/* Contact Info */}
            <div className="mt-10 sm:mt-25 flex flex-col gap-6">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <Image src="/img/Call.png" alt="Call" width={24} height={24} />
                <p className="font-['Poppins'] text-sm sm:text-base">
                  +91 7908076253
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center mt-10 gap-3">
                <Image src="/img/email.png" alt="Email" width={24} height={24} />
                <p className="font-['Poppins'] text-sm sm:text-base">
                  demo@gmail.com
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start mt-10 gap-3">
                <Image
                  src="/img/location.png"
                  alt="Location"
                  width={24}
                  height={24}
                />
                <div className="font-['Poppins'] text-sm sm:text-base leading-tight">
                  <p>123 Demo address, Distil Education</p>
                  <p>123 Demo address, Distil Education</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8 sm:mt-25">
            <Image src="/img/bird.png" alt="Twitter" width={28} height={28} />
            <Image
              src="/img/instragram.png"
              alt="Instagram"
              width={28}
              height={28}
            />
            <Image src="/img/bird1.png" alt="LinkedIn" width={28} height={28} />
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex-1 bg-white p-6 sm:p-10">
          <form className="flex flex-col gap-6">
            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full">
                <label className="block font-['Poppins'] text-sm sm:text-base text-[#000000B2]">
                  First Name
                </label>
                <input
                  type="text"
                  className="border-b border-gray-400 w-full focus:outline-none py-1"
                />
              </div>
              <div className="w-full">
                <label className="block font-['Poppins'] text-sm sm:text-base text-[#000000B2]">
                  Last Name
                </label>
                <input
                  type="text"
                  className="border-b border-gray-400 w-full focus:outline-none py-1"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full">
                <label className="block font-['Poppins'] text-sm sm:text-base text-[#000000B2]">
                  Email
                </label>
                <input
                  type="email"
                  className="border-b border-gray-400 w-full focus:outline-none py-1"
                />
              </div>
              <div className="w-full">
                <label className="block font-['Poppins'] text-sm sm:text-base text-[#000000B2]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="border-b border-gray-400 w-full focus:outline-none py-1"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-['Poppins'] mt-10 text-sm sm:text-base text-[#000000B2]">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows={3}
                className="border-b border-gray-400 w-full focus:outline-none py-1 resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-[#2F3192] hover:bg-[#1f2175] text-white px-[5rem] py-3 rounded-lg font-['Poppins'] font-medium transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
