"use client";

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const [displayText, setDisplayText] = useState("")
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [hasMounted, setHasMounted] = useState(false)

  const roles = ["Web Developer", "Creative Problem Solver", "Tech Explorer"]

  useEffect(() => {
    setHasMounted(true) // Ensure dynamic rendering happens on client only
  }, [])

  useEffect(() => {
    if (!hasMounted) return

    const currentRole = roles[currentRoleIndex]
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setDisplayText(currentRole.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (currentIndex > 0) {
              setDisplayText(currentRole.slice(0, currentIndex - 1))
              currentIndex--
            } else {
              clearInterval(deletingInterval)
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
            }
          }, 50)
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [currentRoleIndex, hasMounted , roles])

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">

      {/* Blurred background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>

      {/* Main heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold -mt-40"
      >
        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">Siddharth</span>
      </motion.h1>

      <div className="h-16 mb-8 mt-6">
        <p className="text-2xl md:text-3xl font-bold text-gray-600">
          I&apos;m a{" "}
          {hasMounted && (
            <span className="font-semibold text-purple-600 min-w-fit inline-block">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          )}
        </p>
      </div>

      {/* Subheading */}
      <motion.p
        className="mt-4 max-w-xl text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        I build modern, responsive, and intuitive web experiences that bring ideas to life.
      </motion.p>

      {/* Call-to-action button */}
      <a href="#contact">
        <button className="m-5 group relative inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
          <span>Let’s Build Together</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">🚀</span>
        </button>
      </a>

      {/* Social Icons */}
      <motion.div
        className="mt-5 flex gap-10 text-3xl text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }}
      >
        <a href="https://github.com/Sidd1475" target="_blank"><FaGithub className="hover:scale-125 transition-all duration-300" /></a>
        <a href="https://www.linkedin.com/in/siddharth-mishra-a5250927a/" target="_blank"><FaLinkedin className="hover:scale-125 transition-all duration-300" /></a>
        <a href="mailto:siddharth140705@gmail.com" target="_blank"><FaEnvelope className="hover:scale-125 transition-all duration-300" /></a>
      </motion.div>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <FaChevronDown className="w-8 h-8 text-gray-400" />
      </button>
    </section>
  )
}

export default Hero
