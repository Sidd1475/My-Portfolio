"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaLightbulb, FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import Lottie from "lottie-react";
import developerAnimation from "/public/animations/developer.json";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section
      id="about"
      className="w-full min-h-screen px-6 py-20 bg-[#0f0f1b] text-white relative overflow-hidden"
    >
      {/* Star Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="bg-[url('/stars.svg')] w-full h-full opacity-10 animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto z-10 relative grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side: About Me + Buttons */}
        <div className="space-y-6 text-left">
          <h2 className="text-4xl font-bold text-white" data-aos="fade-up">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p
            className="text-gray-300 text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I&apos;m a passionate developer currently pursuing B.Tech CSE, who enjoys
            building beautiful and functional web experiences that solve
            real-world problems.
          </p>

          <div className="flex gap-4 mt-4" data-aos="fade-up" data-aos-delay="200">
            <a href="#contact">
            <button  className="bg-purple-600 px-5 py-2 rounded-full text-white hover:bg-purple-700 transition">
              Get in Touch
            </button>
            </a>
            <button className="border border-purple-500 px-5 py-2 rounded-full text-white hover:bg-purple-600 transition">
              Download CV
            </button>
          </div>

          {/* Developer Animation */}
          <div className="w-[250px] h-[250px] mt-8" data-aos="fade-up" data-aos-delay="300">
            <Lottie animationData={developerAnimation} />
          </div>
        </div>

        {/* Right Side: Cards */}
        <div className="space-y-6">
          {/* My Journey */}
          <div
            className="bg-[#1a1a2e] p-5 rounded-xl border border-[#2e2e40]"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaLaptopCode className="text-purple-400 text-xl" />
              <h3 className="text-xl font-semibold"> My Journey</h3>
            </div>
            <p className="text-gray-400">
              I&apos;m a curious student who enjoys solving problems with code. I love
              experimenting with modern technologies and frameworks, whether for
              hackathons, freelance work, or personal projects.
            </p>
          </div>

          {/* Hobbies */}
          <div
            className="bg-[#1a1a2e] p-5 rounded-xl border border-[#2e2e40]"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaLightbulb className="text-purple-400 text-xl" />
              <h3 className="text-xl font-semibold">Hobbies</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-400">
              <li>Exploring new tech & frameworks</li>
              <li>Playing chess & coding challenges</li>
              <li>Designing UIs & watching tech videos</li>
            </ul>
          </div>

          {/* Education */}
          <div
            className="bg-[#1a1a2e] p-5 rounded-xl border border-[#2e2e40]"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaGraduationCap className="text-purple-400 text-xl" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-400">
              <li>B.Tech in Computer Science and Technology – MAIT Delhi (2023–2027)</li>
              <li>Class 12th – CBSE (PCM with CS)</li>
            </ul>
          </div>

          {/* What I Do */}
          <div
            className="bg-[#1a1a2e] p-5 rounded-xl border border-[#2e2e40]"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaUserGraduate className="text-purple-400 text-xl" />
              <h3 className="text-xl font-semibold">What I Do</h3>
            </div>
            <ul className="list-disc pl-5 text-gray-400">
              <li>Build modern, responsive web apps using React, Next.js, Node.js, MongoDB</li>
              <li>Craft clean, user-friendly UIs with Tailwind, Figma, design tools</li>
              <li>Participate in hackathons, collaborate on team projects, and learn new stacks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
