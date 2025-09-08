import React, { useState, useEffect } from 'react';
import image from '../assets/rana.jpg'

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-black min-h-[85vh] pt-10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#EEE6CA] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#E6CFA9] rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-[#EEE6CA] rounded-full animate-pulse delay-700"></div>
      </div>

      {/* Hero Content */}
      <div className={`flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 py-14 lg:py-20 max-w-6xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          {/* Animated accent line */}
          <div className="relative mb-5">
            <div className="w-14 h-0.5 bg-[#EEE6CA] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
          </div>
         
          {/* Enhanced greeting with typing effect simulation */}
          <div className="mb-4">
            <p className={`text-[#E6CFA9] text-lg md:text-xl font-medium tracking-wide transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
              Hello, I'm <span className="relative">
                Rana
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#E6CFA9] to-[#EEE6CA] transform scale-x-0 animate-pulse delay-500"></span>
              </span>
            </p>
          </div>
         
          {/* Enhanced main heading with gradient text effect */}
          <div className="mb-8">
            <h1 className={`text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <span className="block">Full Stack</span>
              <span className="block bg-gradient-to-r from-white via-[#EEE6CA] to-white bg-clip-text text-transparent">
                Web Developer
              </span>
              <span className="block text-[#E6CFA9] text-2xl md:text-3xl lg:text-4xl font-normal mt-2">
                based in Jordan
              </span>
            </h1>
          </div>
         
          {/* Enhanced scroll indicator with better animation */}
          <a href="#about" className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center text-[#E6CFA9] text-sm font-medium cursor-pointer group hover:scale-105 transition-transform">
              <div className="relative">
                <div className="w-6 h-6 border border-[#E6CFA9] rounded-full flex items-center justify-center mr-3 group-hover:bg-[#E6CFA9] group-hover:text-black transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[#EEE6CA] scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                  <svg className="w-3 h-3 relative z-10 transform group-hover:-translate-y-0.5 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                {/* Animated ring effect */}
                <div className="absolute top-0 left-0 w-6 h-6 border border-[#E6CFA9] rounded-full animate-ping opacity-20"></div>
              </div>
              <span className="group-hover:text-[#EEE6CA] transition-colors duration-300 relative">
                Scroll for more
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#EEE6CA] group-hover:w-full transition-all duration-300"></span>
              </span>
            </div>
          </a>
        </div>

        {/* Right Content - Enhanced Image Section */}
        <div className={`lg:w-1/2 lg:pl-40 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="relative group">
            {/* Enhanced decorative elements */}
            <div className="absolute -top-6 left-0 flex space-x-2">
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#E6CFA9] to-transparent animate-pulse"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#EEE6CA] to-transparent animate-pulse delay-300"></div>
            </div>
            <div className="absolute -top-3 left-0 flex space-x-2">
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-[#EEE6CA] animate-pulse delay-150"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#E6CFA9] animate-pulse delay-450"></div>
            </div>
            
            <div className="absolute -bottom-6 right-0 flex space-x-2 justify-end">
              <div className="w-12 h-0.5 bg-gradient-to-l from-[#EEE6CA] to-transparent animate-pulse delay-200"></div>
              <div className="w-16 h-0.5 bg-gradient-to-l from-[#E6CFA9] to-transparent animate-pulse delay-500"></div>
            </div>
            <div className="absolute -bottom-3 right-0 flex space-x-2 justify-end">
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#E6CFA9] animate-pulse delay-100"></div>
              <div className="w-24 h-0.5 bg-gradient-to-l from-transparent to-[#EEE6CA] animate-pulse delay-400"></div>
            </div>

            {/* Enhanced Profile Image Container */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-lg overflow-hidden relative transform group-hover:scale-105 transition-transform duration-500">
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-[#E6CFA9] via-[#EEE6CA] to-[#E6CFA9] p-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full rounded-lg bg-black"></div>
                </div>
                
                <img
                  src={image}
                  alt="Rana - Full Stack Developer"
                  className="w-full h-full object-cover relative z-20 filter group-hover:brightness-110 transition-all duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Corner accent elements */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-[#EEE6CA] opacity-60"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-[#E6CFA9] opacity-60"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-[#E6CFA9] opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-[#EEE6CA] opacity-60"></div>
              </div>

              {/* Floating elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border border-[#E6CFA9] rounded-full bg-black/50 backdrop-blur-sm opacity-60 animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#EEE6CA] rounded-full opacity-40 animate-pulse delay-1500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default HeroSection;