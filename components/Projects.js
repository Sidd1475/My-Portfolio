"use client"

import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
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

import { useState } from 'react'
const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false)

    const projects = [{
        title: "Mitra - Your Farming Companion",
        description: "Mitra is an AI-powered farming companion designed to help farmers access real-time market prices, crop insights, and smart alerts. Built during a hackathon using AI tools (Cursor and Lovable), it aims to revolutionize agriculture through intelligent, farmer-friendly solutions",
        status: "Completed"   ,
        image: "https://imgs.search.brave.com/XoXIqxKiOo3i7_y3mgVqKOSwokRtDMhzDgcz12QcAg0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTAz/MTYwNzIyL3Bob3Rv/L2Zhcm1lci1zcHJl/YWRzLWZlcnRpbGl6/ZXJzLWluLXRoZS1m/aWVsZC13aGVhdC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SDYxNkptd1RYa1Y4/TFZzaXJpTXlxeDJN/OVdfTFVIYk13S2lI/RXNlaHotRT0",
        technologies: ["React.js", "Node.js", "MongoDB"],
        github: "https://github.com",
        live: "https://mitra-amber.vercel.app/",
        gradient: "from-green-400 to-green-700"
    },
    {
        title: "GetMeaChai",
        description: "A creator support platform where fans can donate small amounts to their favorite content creators along with personalized messages. Built with a focus on simplicity, seamless payments, and a beautiful UI to help creators connect with their audience.",
         status: "Ongoing"   ,
        image: "/getmeachai.webp",
        technologies: ["Next.js", "React.js", "Node.js", "MongoDB", "PayPal", "Express"],
        github: "https://github.com/Sidd1475/GetMeaChai",
        live: "/",
        gradient: "from-blue-500 to-purple-600"
    }
        ,
    {
        title: "PassOP - Your Password Manager",
        description: "A secure and intuitive password manager where users can store, edit, and delete passwords with ease. It comes in two versions — one using localStorage for offline use and another powered by MongoDB for cloud-based storage.",
         status: "Completed"   ,
        image: "https://github-production-user-asset-6210df.s3.amazonaws.com/167200325/447590175-b41bde50-8929-4d2d-92ea-4ed28dcf24c2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250709T153707Z&X-Amz-Expires=300&X-Amz-Signature=9d8eca68213ed8a585cdad6c613f498c26182f2d3ca51739322763ce76a135f2&X-Amz-SignedHeaders=host",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com/Sidd1475/PassOP",
        live: "https://pass-op-steel.vercel.app/",
        gradient: "from-white to-green-600"
    }
        , {
        title: "Suno - Music Player",
        description: "Suno is a responsive music player web app featuring curated albums and smooth playback controls, designed for an immersive listening experience. Built with a clean UI and modern frontend tech, it offers seamless navigation across devices.",
         status: "Completed"   ,
        image: "/image1.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Sidd1475/Suno-MusicPlayer",
        live: "/",
        gradient: "from-blue-500 to-purple-600"
    }

        ,
    {
        title: "Sukoon - Your Mental Health Companion",
        description: "Sukoon is a mental health platform where users can connect with a supportive community, share experiences, and access helpful resources. Built during a hackathon using powerful AI tools, it aims to promote well-being through technology-driven care.",
         status: "Completed"   ,
        image: "image.png",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        github: "https://github.com",
        live: "https://sukoon-ai.vercel.app/",
        gradient: "from-orange-100 to-pink-400"
    }

    ]

    // Show only first 2 projects initially, all when showAllProjects is true
    const projectsToShow = showAllProjects ? projects : projects.slice(0,4 )
    const hasMoreProjects = projects.length > 4

    return (

        <section id='projects'>





            <div className="text-gray-100">


                <h2 className='font-bold text-4xl text-center m-10 text-white drop-shadow-lg'>

                    My Projects
                </h2>
                <p className='text-xl text-center items-center text-gray-200 max-w-xl mx-auto drop-shadow-lg'>
                    Here are some of my recent projects that showcase my skills and passion for creating amazing user experiences.
                </p>

            </div>



            <div className='grid grid-cols-1 text-gray-100  lg:grid-cols-2 gap-10 place-items-center'>
                {projectsToShow.map((project, index) => (

                    <div
                        key={index}
                    >


                        <div className="items-center  relative group rounded-2xl overflow-hidden shadow-lg transition duration-300 hover:shadow-2xl max-w-xl m-10 ">
                            <div className='relative text-gray-200 h-48 overflow-hidden'>
                                <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-full ${project.status === "Completed" ? "bg-green-500 text-white " : "bg-yellow-100 text-yellow-800"
                                    }`}>
                                    {project.status}
                                </span>
                                <img
                                    src={project.image}
                                    alt={project.title} />

                                {/* Gradient Overlay on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-60 transition duration-300 `}>
                                </div>



                                {/* Actions on hover*/}
                                <div className="absolute inset-0 flex items-center text-gray-200 justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300   ">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white p-3 rounded-full shadow-md hover:scale-110 transition"
                                    >
                                        <FaGithub className="text-xl text-gray-800" />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel='noopener noreferrer'
                                        className='bg-white p-3 rounded-full shadow-md hover:scale-110 transition'
                                    >
                                        <FaExternalLinkAlt className='text-xl text-gray-800' />
                                    </a>
                                </div>
                            </div>

                            <div>
                                {/* Project content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-blue-600">{project.title}</h3>
                                    <p className="text-gray-300 mt-2 text-sm">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.technologies.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-900"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                )}
            </div>


            {/* Show More/Show Less Button */}
            {hasMoreProjects && (
                <div className="text-center mt-10 drop-shadow-lg">
                    <button
                        onClick={() => setShowAllProjects(!showAllProjects)}
                        className="text-gray-800 bg-gradient-to-r from-blue-500 to-violet-500 font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg m-10"
                    >
                        {showAllProjects ? 'Show Less Projects' : 'Show All Projects'}
                    </button>
                </div>
            )}


        </section>

    )
}

export default Projects
