import React from 'react';
import AboutImage from '../assets/about.jpg'


const AboutSection = () => {
  return (
    <section id="about" className="bg-black min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 py-14">
  {/* Right Content - Image */}
  <div className="lg:w-1/2 w-full mt-12 lg:mt-0 flex justify-center hidden lg:flex">
    <img 
      src={AboutImage}
      alt="Rana" 
      className="w-90 h-130 object-cover rounded-lg"
    />
  </div>
  {/* Left Content - Text */}
<div className="lg:w-1/2 w-full text-left lg:pr-12">
        {/* Main Title */}
        <div className="mb-8 lg:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-white">About </span>
            <span className="text-[#E6CFA9]">Me</span>
          </h1>
          <p className="text-white text-base md:text-lg max-w-xl leading-relaxed">
            A passionate full-stack developer specializing in both MERN and PERN stacks.
          </p>
        </div>

        {/* Personal Information */}
        <div className="space-y-4 mb-8 max-w-md">
          <div className="flex justify-between items-center border-b border-gray-800 pb-2">
            <span className="text-white font-medium">Name:</span>
            <span className="text-[#EEE6CA]">Rana Salameh</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-800 pb-2">
            <span className="text-white font-medium">Date of birth:</span>
            <span className="text-[#EEE6CA]">March 06, 2002</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-800 pb-2">
            <span className="text-white font-medium">Address:</span>
            <span className="text-[#EEE6CA]">Amman, Jordan</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-800 pb-2">
            <span className="text-white font-medium">Email:</span>
            <span className="text-[#EEE6CA]">rnasalameh@gmail.com</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-800 pb-2">
            <span className="text-white font-medium">Phone:</span>
            <span className="text-[#EEE6CA]">+962775326828</span>
          </div>
        </div>

        {/* Project Count */}
        <div className="mb-6">
          <div className="flex items-center">
            <span className="text-3xl md:text-4xl font-bold" style={{ color: '#E6CFA9' }}>
              10
            </span>
            <span className="text-white text-lg md:text-xl ml-3 font-medium">
              Projects completed
            </span>
          </div>
        </div>

        {/* Download Button */}
        <div>
          <a href='/Rana Salameh - Full Stack Web Developer.pdf' download>
            <button 
              className="px-4 py-2 rounded-full font-semibold text-black text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#E6CFA9' }}
            >
              DOWNLOAD CV
            </button>
          </a>
        </div>
      </div>
</section>

  );
};

export default AboutSection;