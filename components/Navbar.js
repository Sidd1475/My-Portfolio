"use Client"

import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
       <nav className="fixed w-full top-0 z-50 bg-white/30 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around h-16 items-center">
          <div className="text-xl font-bold text-violet-600">Portfolio</div>
          <div className="space-x-6 text-gray-800 font-medium hidden md:flex">
            <Link href="#home" className="hover:text-blue-600">Home</Link>
            <Link href="#about" className="hover:text-blue-600">About</Link>
            <Link href="#skills" className="hover:text-blue-600">Skills</Link>
            <Link href="#projects" className="hover:text-blue-600">Projects</Link>
            <Link href="#contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>

      </div>
    
  )
}

export default Navbar
