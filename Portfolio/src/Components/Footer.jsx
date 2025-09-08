import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function PortfolioFooter() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Left side - Name/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#E6CFA9' }}>
              Rana Salameh
            </h3>
            <p className="text-gray-300 text-sm max-w-xs">
              Creative developer passionate about building beautiful digital experiences
            </p>
          </div>
          
          {/* Right side - Social Links */}
          <div className="flex space-x-6">
            <a 
              href="mailto:your.email@example.com" 
              className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-20"
              style={{ backgroundColor: '#E6CFA9', color: 'black' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#EEE6CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#E6CFA9'}
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/yourusername" 
              className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-20"
              style={{ backgroundColor: '#E6CFA9', color: 'black' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#EEE6CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#E6CFA9'}
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-20"
              style={{ backgroundColor: '#E6CFA9', color: 'black' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#EEE6CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#E6CFA9'}
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              className="p-2 rounded-full transition-colors duration-300 hover:bg-opacity-20"
              style={{ backgroundColor: '#E6CFA9', color: 'black' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#EEE6CA'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#E6CFA9'}
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p>&copy; 2024 Rana. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-white transition-colors duration-300" style={{ color: '#E6CFA9' }}>
              About
            </a>
            <a href="#work" className="hover:text-white transition-colors duration-300" style={{ color: '#E6CFA9' }}>
              Work
            </a>
            <a href="#contact" className="hover:text-white transition-colors duration-300" style={{ color: '#E6CFA9' }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}