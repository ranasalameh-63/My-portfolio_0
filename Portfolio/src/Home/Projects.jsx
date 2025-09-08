import React, { useState } from 'react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const projects = [
    { number: "01.", title: "BuildNest", description: "A web platform offering video tutorials & professional connections for home repairs.", link: "https://github.com/ranasalameh-63/BulidNest-Masterpiece.git", tech: ["React","Redux", "Tailwind CSS", "NodeJS","Express JS","MongoDB"] },
    { number: "02.", title: "Humind", description: "A digital platform for managing employee data, attendance, payroll, and leave.", link: "https://github.com/ranasalameh-63/Humind-Smart-HR-Dashboard.git", tech: ["React", "Tailwind CSS", "NodeJS","Express JS","MongoDB"] },
    { number: "03.", title: "Al-Joud", description: "online charity platform enabling secure, hassle-free donations to debtors and those in need.", link: "https://github.com/ranasalameh-63/Charity-website.git", tech: ["React JS", "Tailwind" ,"Node JS" , "Express JS" ,  "PostgreSQL"] },
    { number: "04.", title: "Hospital System", description: "Full-stack system with patient records, appointments, billing & staff schedules.", link: "https://github.com/ranasalameh-63/Lumera-Hospital-System.git", tech: ["NextJS", "Tailwind CSS", "NodeJS","Express JS","MongoDB"] },
    { number: "05.", title: "Horizon Villas", description: "is a rental system that provides a seamless and intuitive platform with a modern design and user-friendly interface.", link: "https://github.com/ranasalameh-63/Rent-project.git", tech: ["React","Redux", "Tailwind CSS","Firebase"] },
    { number: "06.", title: "Space News", description: "A news website delivering the latest space-related articles and updates.", link: "https://github.com/ranasalameh-63/SpaceNews-Project.git", tech: ["React", "Tailwind CSS", "NodeJS","Express JS","MongoDB"] }
  ];

  return (
    <div id="projects" className="bg-black py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-8 w-20 h-20 border border-[#E6CFA9] rounded-full"></div>
        <div className="absolute bottom-16 right-8 w-16 h-16 border border-[#E6CFA9] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-[#E6CFA9] rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-[#E6CFA9] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            My <span className="text-[#E6CFA9]">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#E6CFA9] to-transparent mx-auto mb-4"></div>
          <p className="text-gray-300 text-sm md:text-base leading-snug max-w-2xl mx-auto">
            Here are some of the key projects I've worked on, covering full-stack web development, <span className="text-[#E6CFA9]">UI/UX design</span>, and system architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block relative">
                {/* Card */}
                <div className={`
                  bg-gradient-to-br from-[#111] to-[#0a0a0a] p-4 rounded-2xl
                  border-2 border-[#222] hover:border-[#E6CFA9]
                  transition-all duration-500 transform hover:-translate-y-1
                  shadow-lg hover:shadow-[0_15px_30px_rgba(230,207,169,0.1)]
                  ${hoveredProject === index ? 'scale-102' : ''}
                  relative overflow-hidden
                `}>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E6CFA9] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Project Number */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#E6CFA9] text-xl font-bold tracking-wider">{project.number}</span>
                    <div className="w-6 h-6 border-2 border-[#E6CFA9] rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                      <svg className="w-3 h-3 text-[#E6CFA9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7m10 0v10" />
                      </svg>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#E6CFA9] transition-colors duration-300">{project.title}</h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-snug mb-3 text-xs">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-[9px] px-2 py-0.5 bg-[#222] text-[#E6CFA9] rounded-full border border-[#333] group-hover:border-[#E6CFA9] transition-colors duration-300">{tech}</span>
                    ))}
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E6CFA9] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
