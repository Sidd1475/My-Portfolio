"use client"

import React from 'react'
import { FaCode, FaBolt, FaPencilRuler, FaUsers } from 'react-icons'
import { SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiFigma } from "react-icons/si";
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import Lottie from "lottie-react";


const About = () => {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])
 
  return (
    <section id='about' className='relative py-20 px-4 bg-white
  text-gray-800 overflow-hidden'>

      <div className="absolute -top-20 -left-32 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className='relative z-10'>

        <h2 className='text-4xl font-bold justify-center text-center mb-6' data-aos='fade-up'>
          About Me
        </h2>
        <p className=' flex text-lg text-gray-600 mb-6 justify-center text-center mx-auto  max-w-2xl' data-aos="fade-up" data-aos-delay="100" >
          I&apos;m a passionate developer currently pursuing B.Tech CSE, who enjoys building beautiful and functional web experiences that solve real-world problems.
        </p>


        <div className='grid lg:grid-cols-2 gap-10 items-center justify-center'>
          {/* Left : Journey  */}
          <div className='flex flex-col px-10 '>
            <h3 className='text-2xl font-semibold mb-4 mt-6 '>🎓 My Journey</h3>
            <p className=' text-gray-600  mx-4'>
              I&apos;m a curious student who enjoys solving problems with code. I love experimenting with modern technologies and frameworks, whether for hackathons, freelance work, or personal projects.
            </p>

            <h3 className="text-2xl font-semibold mb-4 mt-6 ">📚 Education</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>B.Tech in Computer Science and Technology – MAIT Delhi (2023–2027)</li>
              <li>Class 12th – CBSE (PCM with CS)</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 mt-6 ">🎯 Hobbies</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Exploring new tech & frameworks</li>
              <li>Playing chess & coding challenges</li>
              <li>Designing UIs & watching tech videos</li>
            </ul>
             <h3 className="text-2xl font-semibold mb-4 mt-6 ">💡 What I Do</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Build modern, responsive web applications using Next.js, React, Node.js, and MongoDB</li>
              <li>Craft clean, user-friendly UIs with Tailwind CSS, Figma, and design tools</li>
              <li>Participate in hackathons, collaborate on team projects, and constantly learn new stacks</li>
            </ul>
            
              
            

          </div>

          {/*Right*/}
          <div className="relative  flex items-center justify-center overflow-hidden m-15">


            <div className="text-center relative z-10 w-[300px] h-[300px]"><Lottie animationData={require('/public/animations/developer.json')} />
            </div>

          </div>


        </div>

        <div>
          <div className="text-black"></div>
        </div>
      </div>



    </section>
  )
}

export default About
