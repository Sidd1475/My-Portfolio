import Hero from "@/components/Hero";

import About from "@/components/About";
import Image from "next/image";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Background from "@/components/background";

export default function Home() {
  return (
   <div>
    
    <Hero/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
   </div>
  );
}
