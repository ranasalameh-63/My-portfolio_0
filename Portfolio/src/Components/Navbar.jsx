import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      navItems.forEach((item) => {
        const section = document.getElementById(item.href.substring(1));
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.href.substring(1));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full text-white shadow-lg z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-95 backdrop-blur-md"
          : "bg-black bg-opacity-80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="font-bold text-xl relative group cursor-pointer">
          <span className="relative z-10 transition-all duration-300 group-hover:text-[#E6CFA9]">
            Rana Salameh
          </span>
          <div className="absolute inset-0 w-0 h-full bg-gradient-to-r from-[#E6CFA9] to-transparent opacity-20 group-hover:w-full transition-all duration-500 rounded"></div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                className={`relative py-2 px-3 font-medium transition-all duration-300 hover:text-[#E6CFA9] group ${
                  activeSection === item.href.substring(1)
                    ? "text-[#E6CFA9]"
                    : ""
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E6CFA9] animate-pulse"></span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-[#E6CFA9] transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-md w-full px-6 py-4 flex flex-col space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`py-2 px-3 font-medium transition-all duration-300 hover:text-[#E6CFA9] ${
                activeSection === item.href.substring(1) ? "text-[#E6CFA9]" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E6CFA9] to-transparent opacity-30"></div>
    </nav>
  );
};

export default Navbar;
