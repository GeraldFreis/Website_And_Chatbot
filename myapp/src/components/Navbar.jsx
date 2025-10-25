import Logo from "../assets/GeraldLogo.png";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
    { id: "cv", label: "CV", external: "./Gerald_Freislich_CV.pdf" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 bg-opacity-80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
        {/* Left: Logo + Title */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <img src={Logo} alt="GeraldLogo" className="w-12 h-12 sm:w-16 sm:h-16" />
          <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">
            Gerald's Portfolio
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 text-gray-700 dark:text-gray-200">
            {navLinks.map((link) => (
              <li key={link.id}>
                {link.external ? (
                  <a
                    href={"/"+link.external}
                    className={`transition-colors ${
                      activeSection === link.id
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    href={`/#${link.id}`}
                    className={`transition-colors ${
                      activeSection === link.id
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Theme switch */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 ml-4 cursor-pointer"
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                isDark ? "translate-x-5" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Theme toggle for mobile */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-10 h-5 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer"
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                isDark ? "translate-x-5" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 bg-opacity-95 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.external ? link.external : `#${link.id}`}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-gray-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;