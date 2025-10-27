// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Header = () => {
//   return (
//     <div className="h-[80px] w-full flex items-center justify-between px-6 lg:px-20 shadow shadow-gray-300">
//       <div className="flex-shrink-0">
//         <Image
//           src="/img/distilimg.png"
//           height={54}
//           width={130}
//           alt="distilimg.png"
//         />
//       </div>

//       <ul className="hidden lg:flex gap-9 text-lg h-[80px] items-center">
//         <Link href="/">
//         <li className="font-[var(--font-reddit-sans)] font-bold">Home</li>
//         </Link>
//         <Link href="/SkillDevelomet">
//         <li className="font-[var(--font-reddit-sans)] leading-6 tracking-normal">
//           Skill Development
//         </li>
//         </Link>
//         <Link href="/EducationInstitution">
//         <li className="font-[var(--font-reddit-sans)] leading-6 tracking-normal">
//           Education & Institutional Operation
//         </li>
//         </Link>
       
//         <Link href="/Livehoodpage">
//         <li className="font-[var(--font-reddit-sans)] leading-6 tracking-normal">
//           Livehood
//         </li>
//         </Link>
       
//         <Link href="/SkillCenter">
//         <li className="font-[var(--font-reddit-sans)] leading-6 tracking-normal">
//           Distil Skilling
//         </li>
//         </Link>
//         <Link href="/Admission">
//         <li className="font-[var(--font-reddit-sans)] leading-6 tracking-normal">
//           Admission
//         </li>
//         </Link>
//         <Link href="/Insight">
//         <li className="font-[var(--font-reddit-sans)] leading-6 tracking-normal">
//           Insight & Resources
//         </li>
//         </Link>
//       </ul>

//       <div className="w-[150px] h-[48px] rounded-[7px] px-4 py-2 bg-gradient-to-r from-[#EC131D] to-[#2F3192] flex items-center justify-center">
//         <button className="font-[var(--font-reddit-sans)] text-lg leading-9 tracking-[0.5px] text-white">
//           Login/Register
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;



"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for menu icons
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // to detect active route

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Skill Development", href: "/SkillDevelomet" },
    { name: "Education & Institutional Operation", href: "/EducationInstitution" },
    { name: "Livehood", href: "/Livehoodpage" },
    { name: "Distil Skilling", href: "/SkillCenter" },
    { name: "Admission", href: "/Admission" },
    { name: "Insight & Resources", href: "/Insight" },
  ];

  return (
    <div className="h-[80px] w-full flex items-center justify-between px-6 lg:px-20 shadow shadow-gray-300 relative bg-white z-50">
      {/* Left section: menu icon + logo */}
      <div className="flex items-center gap-3">
        {/* Menu Icon for small & medium screens */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo */}
        <Image
          src="/img/distilimg.png"
          height={54}
          width={130}
          alt="distil logo"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-9 text-lg h-[80px] items-center">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            <li
              className={`font-[var(--font-reddit-sans)] leading-6 tracking-normal cursor-pointer ${
                pathname === link.href ? "font-bold" : "font-normal"
              }`}
            >
              {link.name}
            </li>
          </Link>
        ))}
      </ul>

      {/* Login/Register Button */}
      <div className="hidden lg:flex w-[150px] h-[48px] rounded-[7px] px-4 py-2 bg-gradient-to-r from-[#EC131D] to-[#2F3192] items-center justify-center">
        <button className="font-[var(--font-reddit-sans)] text-lg leading-9 tracking-[0.5px] text-white">
          Login/Register
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col items-start gap-4 p-6 text-lg">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                onClick={() => setIsOpen(false)} // close on click
              >
                <li
                  className={`font-[var(--font-reddit-sans)] leading-6 tracking-normal ${
                    pathname === link.href ? "font-bold" : "font-normal"
                  }`}
                >
                  {link.name}
                </li>
              </Link>
            ))}

            {/* Mobile login button */}
            <div className="w-full mt-4">
              <button className="w-full h-[48px] rounded-[7px] bg-gradient-to-r from-[#EC131D] to-[#2F3192] text-white font-[var(--font-reddit-sans)] text-lg">
                Login/Register
              </button>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
