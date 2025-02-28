'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const projects = [
  {
    title: 'EduCadamy',
    description: 'An educational website that provides educational content, resources, and tools to users, facilitating learning and knowledge acquisition.',
    tags: ['HTML', 'Bootstrap', 'JavaScript', 'CSS'],
    image: '/projects/educadamy.png',
    imageAlt: 'EduCadamy Website Screenshot',
    imageColor: '#4F46E5',
    demoUrl: 'https://educadamy.pages.dev/',
    codeUrl: 'https://github.com/JuneRhomel/MINI-PROJECT-2',
    featured: true,
  },
  {
    title: 'Puff Tea',
    description: 'An e-commerce website for milk tea, where you can browse and purchase a variety of delicious flavors and styles of milk tea, all from the comfort of your own home.',
    tags: ['HTML', 'Bootstrap', 'JavaScript', 'CSS'],
    image: '/projects/pufftea.png',
    imageAlt: 'Puff Tea Website Screenshot',
    imageColor: '#10B981',
    demoUrl: 'https://pufftea.pages.dev/',
    codeUrl: 'https://github.com/JuneRhomel/mini-project',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills as a web developer.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    image: '/projects/portfolio.png',
    imageAlt: 'Portfolio Website Screenshot',
    imageColor: '#F59E0B',
    demoUrl: 'https://june-rhomel-portfolio-a0305.web.app',
    codeUrl: 'https://github.com/JuneRhomel',
    featured: true,
  },
]

export function ProjectsSection() {
  // Main section animation control
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // State for active project (for showcase view)
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  // Auto-rotate featured projects every 5 seconds
  useEffect(() => {
    const featuredProjects = projects.filter(project => project.featured)
    const interval = setInterval(() => {
      setActiveProject(current => (current + 1) % featuredProjects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.8
      }
    },
  }


  const showcaseVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.3
      }
    }
  }

  // Separate featured projects from regular projects
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-amber-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="container px-4 md:px-6 m-auto">
        <motion.div
          ref={ref}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.span
            className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4"
            variants={itemVariants}
          >
            Portfolio
          </motion.span>
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            className="mt-4 h-1 w-12 bg-primary rounded-full"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="mt-6 text-muted-foreground md:text-lg max-w-[800px]"
            variants={itemVariants}
          >
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and solution.
          </motion.p>
        </motion.div>

        {/* Featured Projects Showcase */}
        <motion.div
          ref={ref}
          className="mb-24"
        >
          {/* Project Showcase */}
          <div className="relative h-[500px] md:h-[600px] mb-12 perspective-1000">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}

                variants={showcaseVariants}
                className={`absolute inset-0 ${activeProject === index ? 'z-10' : 'z-0'}`}
              >
                <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border shadow-xl preserve-3d transform-style-3d hover:rotate-y-5 hover:rotate-x-5 transition-transform duration-300">
                  {/* Project Background */}
                  <div
                    className="absolute inset-0 opacity-90"
                    style={{ backgroundColor: project.imageColor }}
                  >
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-white/10 rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white/10 rounded-tr-full"></div>
                    <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                  </div>

                  {/* Content Container */}
                  <div className="relative h-full w-full p-8 md:p-12 flex flex-col md:flex-row items-center justify-between z-10">
                    {/* Project Details */}
                    <div className="w-full md:w-1/2 text-white space-y-6">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
                        <div className="h-1 w-16 bg-white/50 rounded-full"></div>
                      </div>

                      <p className="text-white/90 text-lg">{project.description}</p>

                      <div className="flex flex-wrap gap-2 py-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-medium text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button asChild variant="default" size="lg" className="bg-white text-gray-900 hover:bg-white/90">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" /></svg>
                            Live Demo
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                          <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            View Code
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Project Visual */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
                      <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/20 transform rotate-y-5 rotate-x-5">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.imageAlt} 
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div
                            className="h-full w-full flex items-center justify-center text-white text-8xl font-bold"
                            style={{ backgroundColor: project.imageColor }}
                          >
                            {project.title.charAt(0)}
                          </div>
                        )}

                        {/* Reflection effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Project Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeProject === index
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/80'
                    }`}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          className="flex justify-center mt-16"
        >
          <Button asChild size="lg" className="group">
            <Link href="https://github.com/JuneRhomel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              View More on GitHub
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 