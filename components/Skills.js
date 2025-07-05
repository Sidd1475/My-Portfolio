"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaBrain,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJava,
  FaPython,
  FaGit,
  FaGithub,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiVercel,
  SiPostman,
  SiVisualstudio,
  SiJavascript,
} from "react-icons/si";

const skillsData = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-blue-500 text-3xl" />,
    stack: [
      { icon: <FaHtml5 className="text-orange-500 text-xl" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500 text-xl" />, name: "CSS" },
      { icon: <SiJavascript className="text-yellow-500 text-xl" />, name: "JavaScript" },
      { icon: <FaReact className="text-cyan-400 text-xl" />, name: "React.js" },
      { icon: <SiNextdotjs className="text-black text-xl" />, name: "Next.js" },
      { icon: <SiTailwindcss className="text-teal-400 text-xl" />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-green-500 text-3xl" />,
    stack: [
      { icon: <FaNodeJs className="text-green-600 text-xl" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-700 text-xl" />, name: "Express.js" },
      { icon: <SiMongodb className="text-green-700 text-xl" />, name: "MongoDB" },
      { icon: <FaGithub className="text-gray-800 text-xl" />, name: "JWT" },
      { icon: <SiPostman className="text-orange-600 text-xl" />, name: "Postman" },
    ],
  },
  {
    title: "DSA & Languages",
    icon: <FaBrain className="text-purple-500 text-3xl" />,
    stack: [
      { icon: <SiCplusplus className="text-blue-700 text-xl" />, name: "C++" },
      { icon: <FaJava className="text-red-600 text-xl" />, name: "Java" },
      { icon: <FaCode className="text-indigo-500 text-xl" />, name: "DSA" },
      { icon: <FaCode className="text-indigo-400 text-xl" />, name: "OOP" },
    ],
  },
  {
    title: "Tools & Design",
    icon: <FaTools className="text-purple-500 text-3xl" />,
    stack: [
      { icon: <FaGit className="text-blue-700 text-xl" />, name: "Git" },
      { icon: <FaGithub className="text-red-600 text-xl" />, name: "Github" },
      { icon: <FaFigma className="text-yellow-600 text-xl" />, name: "Figma" },
      {
        icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="VS Code" className="w-5 h-5" />,
        name: "VS Code"
      }
      ,
      { icon: <SiVercel className="text-indigo-400 text-xl" />, name: "Vercel" },
    ],
  },

];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (


    <section className="w-full min-h-screen  p-10">


      <h2 className="text-4xl font-bold text-center mb-12 text-gray-100 drop-shadow-lg">
        My <span className="text-white ">Skills</span>
      </h2>
      <p className="text-center text-gray-200 max-w-xl mx-auto mb-8 drop-shadow-lg">
        A quick overview of the technologies and tools I use to build web apps and solve problems efficiently.
      </p>


      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 max-w-6xl mx-auto ">
        {skillsData.map((item, index) => (
          <div
            key={index}
            className="relative w-full  group"
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-purple/50 backdrop-blur-md shadow-xl p-6 rounded-xl cursor-pointer hover:scale-[1.03] transition-all border border-gray-100 "
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-200">
                  {item.title}
                </h3>
              </div>
            </motion.div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="dropdown"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-3 bg-white/90 backdrop-blur-md rounded-lg shadow-inner p-4 text-sm text-gray-800 border border-gray-200"
                >
                  <ul className="grid grid-cols-3 gap-4">
                    {item.stack.map((tech, i) => (
                      <li
                        key={i}
                        className="flex flex-col items-center text-xs text-center"
                      >
                        {tech.icon}
                        <span className="mt-1">{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}