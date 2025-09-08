import React from 'react';

const AboutSection = () => {
  const skills = [
    { name: 'HTML', icon: '🌐' },
    { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'ReactJS', icon: '⚛️' },
    { name: 'ReduxJS', icon: '🌀' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'NodeJS', icon: '🟢' },
    { name: 'ExpressJS', icon: '🚂' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Oracle', icon: '💠' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Odoo', icon: '🗂️' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Agile', icon: '⚙️' },
    { name: 'GitHub', icon: '🐱' },
  ];

  return (
    <div id="skills" className="bg-black min-h-screen p-2 sm:p-4 pt-3 sm:pt-10 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-[#E6CFA9] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#E6CFA9] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#E6CFA9] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-4">
            <div className="relative">
              <div className="text-[#E6CFA9] text-xs md:text-sm font-medium tracking-wide uppercase relative inline-block">
                Skills & Technologies
                <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#E6CFA9] to-transparent"></div>
              </div>
            </div>
           
            <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
              Here are some of the{' '}
              <span className="text-[#E6CFA9] relative">
                technologies
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#E6CFA9] via-[#E6CFA9] to-transparent opacity-60"></div>
              </span>{' '}
              I work with regularly.
            </h1>
          </div>

          {/* Right Column - Description */}
          <div className="space-y-4 text-white text-sm leading-relaxed lg:mt-8">
            <div className="p-6 border border-[#E6CFA9]/20 bg-gradient-to-br from-[#E6CFA9]/5 to-transparent backdrop-blur-sm rounded-lg">
              <p className="mb-4">
                I specialize in building scalable web applications using modern technologies
                and frameworks. From front-end design to back-end development, I ensure a seamless
                and efficient experience.
              </p>
             
              <p>
                My goal is to deliver clean, maintainable code while leveraging tools like GitHub,
                Agile methodologies, and design platforms like Figma to collaborate effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Skills / Technologies Grid */}
        {/* Skills / Technologies Grid */}
<div className="mt-8 lg:mt-12">
  <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-0.5 bg-[#E6CFA9]/20 p-0.5 rounded-lg overflow-hidden">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="aspect-square flex items-center justify-center bg-black text-white hover:bg-gradient-to-br hover:from-[#E6CFA9] hover:to-[#D4B896] hover:text-black transition-all duration-500 group text-[10px] sm:text-xs md:text-sm relative overflow-hidden"
      >
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E6CFA9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Subtle border glow effect */}
        <div className="absolute inset-0 border border-[#E6CFA9]/20 group-hover:border-[#E6CFA9]/40 transition-colors duration-500"></div>

        <div className="text-center relative z-10 transform group-hover:scale-110 transition-transform duration-300">
          <div className="flex flex-col items-center space-y-1 md:flex-row md:space-y-0 md:space-x-2">
            <span className="text-base sm:text-lg md:text-xl group-hover:animate-pulse">
              {skill.icon}
            </span>
            <span className="font-semibold text-[10px] sm:text-xs md:text-sm group-hover:font-bold transition-all duration-300">
              {skill.name}
            </span>
          </div>
        </div>

        {/* Subtle shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      </div>
    ))}
  </div>
</div>


        {/* Decorative element */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-[#E6CFA9] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#E6CFA9]/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-[#E6CFA9]/30 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;