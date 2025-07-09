"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full shadow-md  fixed top-0 z-50 backdrop-blur-md shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-purple-600 font-extrabold text-xl">Portfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-300">
          <li><a href="#home" className="hover:text-purple-600">Home</a></li>
          <li><a href="#about" className="hover:text-purple-600">About</a></li>
          <li><a href="#skills" className="hover:text-purple-600">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-600">Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden ">
          <button onClick={handleToggle}>
            <svg
              className="h-6 w-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
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

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden   shadow-md px-4 pb-4 space-y-2 font-medium text-gray-300">
          <li><a href="#home" className="block py-2 hover:text-purple-600 " onClick={handleToggle}>Home</a></li>
          <li><a href="#about" className="block py-2 hover:text-purple-600" onClick={handleToggle}>About</a></li>
          <li><a href="#skills" className="block py-2 hover:text-purple-600" onClick={handleToggle}>Skills</a></li>
          <li><a href="#projects" className="block py-2 hover:text-purple-600" onClick={handleToggle}>Projects</a></li>
          <li><a href="#contact" className="block py-2 hover:text-purple-600" onClick={handleToggle}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

