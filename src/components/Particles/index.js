import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function Particle() {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
  return (
    <div className="container">
         <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      className="particles"
      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": -1
        }, fpsLimit: 60,
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#000000"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "images/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 60,
                smooth: 10
              }
            },
            onClick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              lineLinked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 100,
              duration: 2,
              opacity: 1,
              speed: 3
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        backgroundMask: {
          enable: true,
          cover: {
            value: {
              r: 0,
              g: 0,
              b: 0
            }
          }
        },
        retina_detect: true,
        background: {
          image: "url('https://images.unsplash.com/photo-1583115260445-f95fe37202ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1039&q=80')",
          position: "cover"
        }
    }}
    /> 

    </div>
  )
}
