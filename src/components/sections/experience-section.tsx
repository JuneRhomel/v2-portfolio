'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const journey = [
  {
    type: 'education',
    title: 'Bachelor of Science Information Technology',
    organization: 'St. Bridget College',
    period: 'Sep 2021 - 2022',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
    ),
    color: 'bg-blue-500',
    description: [
      'Bachelor of Science in Information Technology at St. Bridget College',
      'Developed strong foundation in software development principles and practices',
      'Focused on web technologies and programming fundamentals',
    ],
    skills: ['Web Development', 'Programming Fundamentals', 'Software Development'],
  },
  {
    type: 'bootcamp',
    title: 'Full Stack Web Development Bootcamp',
    organization: 'KodeGo',
    period: 'Jan 2023',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"/><path d="M12 13v8"/><path d="M5 13v6a2 2 0 0 0 2 2h8"/></svg>
    ),
    color: 'bg-amber-500',
    description: [
      'Successfully completed 12-week Full Stack Web Development Bootcamp',
      'Recognized as KodeGo WD28 top student',
      'Awarded "Best in mini project 2"',
      'Gained hands-on experience with modern web development technologies',
    ],
    skills: ['JavaScript', 'React', 'Node.js', 'Web Development'],
  },
  {
    type: 'work',
    title: 'Full Stack Web Developer',
    organization: 'Inventi Philippines',
    period: 'Mar 2023 - Present',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
    ),
    color: 'bg-green-500',
    description: [
      'Working within Agile methodology, contributing to efficient project management and timely delivery of high-quality results',
      'Implementing best practices in code quality, ensuring maintainability and readability of software projects',
      'Developing user-friendly web forms with validation and error handling',
      'Designing and developing robust back-end microservices to support scalable web applications',
      'Ensuring all functionalities are unit tested before deployment',
    ],
    skills: ['JavaScript', 'TypeScript', 'React.js', 'Node.js', 'Express.js', 'AWS services', 'CICD', 'Git', 'REST API'],
  },
]

export function ExperienceSection() {
  // Main section animation control
  const mainControls = useAnimation()
  const [mainRef, mainInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Timeline animation control
  const timelineControls = useAnimation()
  const [timelineRef, timelineInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (mainInView) {
      mainControls.start('visible')
    }
  }, [mainControls, mainInView])

  useEffect(() => {
    if (timelineInView) {
      timelineControls.start('visible')
    } else {
      timelineControls.start('hidden')
    }
  }, [timelineControls, timelineInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

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

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: { 
      scaleY: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      } 
    },
  }

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 15,
        delay: 0.3
      } 
    },
    hover: {
      scale: 1.2,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  }

  // Create individual refs for each journey item
  const item1Ref = useInView({ triggerOnce: false, threshold: 0.2, rootMargin: "-50px 0px" });
  const item2Ref = useInView({ triggerOnce: false, threshold: 0.2, rootMargin: "-50px 0px" });
  const item3Ref = useInView({ triggerOnce: false, threshold: 0.2, rootMargin: "-50px 0px" });
  
  // Array of refs for easy access
  const itemRefs = [item1Ref, item2Ref, item3Ref];

  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-amber-500/10 rounded-full blur-xl"></div>
      </div>
      
      <div className="container px-4 md:px-6 m-auto">
        <motion.div
          ref={mainRef}
          initial="hidden"
          animate={mainControls}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4"
            variants={itemVariants}
          >
            My Journey
          </motion.span>
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            variants={itemVariants}
          >
            From Education to Career
          </motion.h2>
          <motion.div 
            className="mt-4 h-1 w-12 bg-primary rounded-full"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="mt-6 text-muted-foreground md:text-lg max-w-[800px]"
            variants={itemVariants}
          >
            My professional journey from education through bootcamp to becoming a software developer.
          </motion.p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-amber-500 to-green-500 rounded-full"
            ref={timelineRef}
            initial="hidden"
            animate={timelineControls}
            variants={lineVariants}
            style={{ transformOrigin: "top" }}
          ></motion.div>

          {/* Journey items */}
          <div className="space-y-16 md:space-y-24 relative">
            {journey.map((item, index) => {
              const [ref, inView] = itemRefs[index];
              
              return (
                <motion.div 
                  key={index} 
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                  }}
                  className="relative"
                >
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } gap-8 items-start`}
                  >
                    {/* Timeline icon */}
                    <motion.div 
                      className={`absolute left-8 md:left-1/2 w-12 h-12 rounded-full ${item.color} flex items-center justify-center -translate-x-1/2 z-10 border-4 border-background shadow-lg`}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      {item.icon}
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                      className={`pl-20 md:pl-0 ${
                        index % 2 === 0 ? 'md:pr-12 md:text-right md:items-end' : 'md:pl-12 md:text-left md:items-start'
                      } flex flex-col md:w-1/2`}
                      variants={{
                        hidden: { 
                          opacity: 0, 
                          x: index % 2 === 0 ? -50 : 50,
                          y: 20
                        },
                        visible: { 
                          opacity: 1, 
                          x: 0,
                          y: 0,
                          transition: { 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 24,
                            delay: 0.2
                          } 
                        },
                        hover: {
                          y: -5,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          transition: { 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 10 
                          }
                        }
                      }}
                      whileHover="hover"
                    >
                      <div className="bg-card p-6 rounded-xl border border-border shadow-sm w-full">
                        <div className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-2 ${
                          item.type === 'education' ? 'bg-blue-500/10 text-blue-500' :
                          item.type === 'bootcamp' ? 'bg-amber-500/10 text-amber-500' :
                          'bg-green-500/10 text-green-500'
                        }`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className={`font-medium ${
                          item.type === 'education' ? 'text-blue-500' :
                          item.type === 'bootcamp' ? 'text-amber-500' :
                          'text-green-500'
                        }`}>{item.organization}</p>
                        <p className="text-muted-foreground text-sm mb-4">{item.period}</p>
                        <ul className={`space-y-2 text-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          {item.description.map((desc, descIndex) => (
                            <li key={descIndex} className="flex items-start">
                              <span className={`mr-2 mt-1 ${
                                item.type === 'education' ? 'text-blue-500' :
                                item.type === 'bootcamp' ? 'text-amber-500' :
                                'text-green-500'
                              }`}>•</span>
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-sm font-medium mb-2">Key Skills:</p>
                          <div className="flex flex-wrap gap-2">
                            {item.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                variants={{
                                  hidden: { opacity: 0, scale: 0.8 },
                                  visible: { 
                                    opacity: 1, 
                                    scale: 1,
                                    transition: { 
                                      delay: 0.4 + (skillIndex * 0.05),
                                      duration: 0.2
                                    } 
                                  },
                                  hover: {
                                    scale: 1.05,
                                    transition: { 
                                      type: "spring", 
                                      stiffness: 400, 
                                      damping: 10 
                                    }
                                  }
                                }}
                                whileHover="hover"
                                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                  item.type === 'education' ? 'bg-blue-500/10 text-blue-500' :
                                  item.type === 'bootcamp' ? 'bg-amber-500/10 text-amber-500' :
                                  'bg-green-500/10 text-green-500'
                                }`}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Date indicator */}
                      <motion.div 
                        className={`hidden md:flex items-center gap-2 mt-4 ${
                          index % 2 === 0 ? 'justify-end' : 'justify-start'
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className={`h-px w-12 ${
                          item.type === 'education' ? 'bg-blue-500' :
                          item.type === 'bootcamp' ? 'bg-amber-500' :
                          'bg-green-500'
                        }`}></div>
                        <span className="text-sm text-muted-foreground">{item.period}</span>
                      </motion.div>
                    </motion.div>

                    {/* Empty space for alignment */}
                    <div className="hidden md:block md:w-1/2"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* End marker */}
          <motion.div 
            className="absolute left-8 md:left-1/2 bottom-0 w-6 h-6 rounded-full bg-green-500 -translate-x-1/2 translate-y-1/2 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              delay: 1.5,
              type: "spring", 
              stiffness: 500, 
              damping: 15 
            }}
          >
            <div className="w-2 h-2 rounded-full bg-background"></div>
          </motion.div>
        </div>
        
        {/* Future indicator */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <p className="text-muted-foreground">Continuing to grow and learn every day...</p>
          <div className="mt-4 flex justify-center">
            <motion.div 
              className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center"
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 