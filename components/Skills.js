import React from 'react'

import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFigma,
} from "react-icons/si";
  const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React.js", icon: SiReact, color: "#61DBFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "MongoDB", icon: SiMongodb, color: "#4DB33D" },
  { name: "UI/UX", icon: SiFigma, color: "#A259FF" },
];
const Skills = () => {

  

  return (
    <section id="skills" className='py-20 bg-gradient-to-br from-purple-50 via-white to-blue-100 px-6' >
        <div className="max-w-5xl mx-auto text-center m-10">
            <h2 className='text-4xl font-bold mb-6 text-gray-800'>
             My Tech Skills
            </h2>
            <p className='text-xl max-w-xl mx-auto text-gray-500'>
                 A blend of front-end and back-end tools that I use to build great user experiences.
            </p>
       
       
        <div className='flex justify-center items-center m-10'>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
                {skills.map(({name,icon:Icon, color},idx)=>(
                    <div
                    key={idx}
                    className='bg-white/70 shadow-md hover:shadow-2xl transition-all duration-300 rounded-xl p-6 flex flex-col items-center justify-center backdrop-blur-md border border-gray-200  '
                    >
                       
                        <Icon size={40} color={color}/>
                        <span className="mt-3 text-sm font-medium text-gray-700">{name}</span>
                    
                    </div>
                ))
                }
            </div>
           
        </div>
    </div>
    </section>
  )
}

export default Skills
