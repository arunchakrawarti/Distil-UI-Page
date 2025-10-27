// components/Footer.js
import Image from 'next/image';
import React from 'react';

const aboutLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Programs', href: '#' },
  { name: 'Volunteers', href: '#' },
  { name: 'Partners', href: '#' },
  { name: 'Contact Us', href: '#' },
];

const usefulLinks = [
  { name: 'F.A.Q', href: '#' },
  { name: 'News', href: '#' },
  { name: 'Reports', href: '#' },
  { name: 'Terms of Use', href: '#' },
  { name: 'Privacy Policy', href: '#' },
];

const languages = [
  'English', 'Hindi', 'Urdu', 'Tamil', 'Telugu', 
  'Kannada', 'Malayalam', 'Spanish', 'Swahili', 'Arabic'
];

const Footer = () => {
  return (
    <footer className="bg-black mt-20  text-white py-10 md:py-16">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="w-full  p-6 flex flex-col md:flex-row lg:flex-row space-y-5 justify-between ">

          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2 text-blue-400">♦</span> 
              EMPOWERNEXT
            </h3>
            <p className="font-inter font-normal text-base leading-6 tracking-[0.5px] mb-4 w-[40vh]">
              Tincidunt luctus porta amet lectus ar ultricies nec sed enim. Sed sit egestas enim consectetur donec faucibus...
            </p>
            <p className="text-sm mb-1">
              <span className="font-semibold">Phone:</span> 9992229999
            </p>
            <p className="text-sm">
              <span className="font-semibold">Address:</span> 123 Address st,
              <br />
              Address city, India
            </p>
          </div>

          <div>
            <h4 className="font-teachers font-semibold text-[20px] leading-[24px] tracking-[0] mb-4">LANGUAGE</h4>
            <ul className=" space-y-2 font-inter font-normal text-base leading-6 tracking-[0.5px]">
              {languages.map((lang) => (
                <li key={lang}>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    {lang}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-teachers font-semibold text-[20px] leading-[24px] tracking-[0] mb-4">About Us</h4>
            <ul className=" space-y-2 font-inter font-normal text-base leading-6 tracking-[0.5px]">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-teachers font-semibold text-[20px] leading-[24px] tracking-[0] mb-4">Useful Links</h4>
            <ul className=" space-y-2 font-inter font-normal text-base leading-6 tracking-[0.5px]">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-800 flex justify-center">
        <div className="flex space-x-3">
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
    </footer>
  );
};

export default Footer;