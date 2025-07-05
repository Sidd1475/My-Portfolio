"use client"

import { number } from 'framer-motion';
import React, { useEffect } from 'react'

const Background = () => {

    useEffect(() => {
        const LoadParticles = async () => {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
            script.async = true;

                 
      script.onload = () => {
        // Initialize particles after library loads
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 120,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ['#ffffff', '#a78bfa', '#60a5fa', '#34d399']
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              }
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'grab'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 0.5
                }
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
      };
      
      document.head.appendChild(script);
    };
    LoadParticles();

    return()=>{
        const script = document.querySelector('script[src*="particles.min.js"]');
        if(script){
            script.remove();
        }
    };
},[]);

    return (
         <div
      id="particles-js"
      className="fixed inset-0 w-full h-full z-0"
      style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
      }}
    />
    )
}

export default Background
