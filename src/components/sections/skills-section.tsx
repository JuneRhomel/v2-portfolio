'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

const skills = [
  {
    category: 'Frontend',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M2 12.5c1.5-2.5 4-4 7.5-4 .5 0 1 .06 1.5.17V5.83c-.5-.11-1-.17-1.5-.17-4.17 0-7.5 2.22-7.5 5s3.33 5 7.5 5c.5 0 1-.06 1.5-.17v-2.83c-.5.1-1 .17-1.5.17-3.5 0-6-1.5-7.5-4Z"/><path d="M15.25 1.08C16.43.44 17.79.06 19.25 0c4.17 0 7.5 2.22 7.5 5s-3.33 5-7.5 5c-1.46-.06-2.82-.44-4-1.08"/><path d="M15.25 14.08c1.18.64 2.54 1.02 4 1.08 4.17 0 7.5-2.22 7.5-5"/><path d="M19.25 20.17c-1.46.06-2.82.44-4 1.08"/><path d="M15.25 14.08c-1.18-.64-2.54-1.02-4-1.08-4.17 0-7.5 2.22-7.5 5s3.33 5 7.5 5c1.46-.06 2.82-.44 4-1.08"/></svg>
    ),
    color: 'bg-blue-500',
    items: [
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React.js', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'PHP', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M2 22h20"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/><rect width="20" height="16" x="2" y="2" rx="2"/></svg>
    ),
    color: 'bg-green-500',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'REST API', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'AWS services', level: 70 },
    ],
  },
  {
    category: 'Tools & Others',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    color: 'bg-amber-500',
    items: [
      { name: 'Git', level: 85 },
      { name: 'CI/CD', level: 75 },
      { name: 'Agile', level: 80 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Unit Testing', level: 75 },
    ],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20, 
        duration: 0.5 
      } 
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24,
        duration: 0.7 
      } 
    },
  }

  const backgroundVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 1.2,
        ease: "easeOut" 
      } 
    },
  }

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24 
      } 
    },
    hover: { 
      y: -10, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { 
      scale: 0.98,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    }
  }

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: 360, 
      scale: 1.2,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        duration: 1.5 
      } 
    }
  }

  const progressVariants = {
    initial: { width: 0 },
    animate: (level: number) => ({
      width: `${level}%`,
      transition: { 
        duration: 1.5, 
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }

  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10"
        initial="hidden"
        animate="visible"
        variants={backgroundVariants}
      >
        <motion.div 
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"
          animate={floatingAnimation}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"
          animate={{
            ...floatingAnimation,
            transition: {
              ...floatingAnimation.transition,
              delay: 1
            }
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
          animate={{
            ...floatingAnimation,
            x: [0, 20, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-green-500/10 rounded-full blur-xl"
          animate={{
            ...floatingAnimation,
            x: [0, -30, 0],
            transition: {
              duration: 7,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"
          animate={{
            ...floatingAnimation,
            x: [0, 15, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
        ></motion.div>
      </motion.div>
      
      <div className="container px-4 md:px-6 m-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.span 
            className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Expertise
          </motion.span>
          <motion.h2 
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            variants={titleVariants}
          >
            My Skills
          </motion.h2>
          <motion.div 
            className="mt-4 h-1 w-12 bg-primary rounded-full"
            variants={itemVariants}
            whileHover={{ width: "100px", transition: { duration: 0.3 } }}
          ></motion.div>
          <motion.p 
            className="mt-6 text-muted-foreground md:text-lg max-w-[800px]"
            variants={itemVariants}
          >
            Here are the technologies and tools I&apos;m proficient with. I&apos;m always learning and expanding my skill set.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              ref={ref}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              variants={cardVariants}
              className="relative"
              onHoverStart={() => setActiveCategory(categoryIndex)}
              onHoverEnd={() => setActiveCategory(null)}
            >
              {/* Category Card */}
              <motion.div 
                className="bg-card rounded-xl border border-border p-6 shadow-sm relative z-10 h-full"
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className={`p-2 rounded-lg ${skillCategory.color.replace('bg-', 'bg-')}/10`}
                    variants={iconVariants}
                  >
                    {skillCategory.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold">{skillCategory.category}</h3>
                </div>
                
                {/* Skills */}
                <div className="space-y-5">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex} 
                      variants={itemVariants} 
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      custom={skillIndex}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{skill.name}</span>
                          <motion.div 
                            className={`w-2 h-2 rounded-full ${skillCategory.color}`}
                            animate={activeCategory === categoryIndex ? {
                              scale: [1, 1.5, 1],
                              transition: { 
                                duration: 1, 
                                repeat: Infinity,
                                repeatType: "loop"
                              }
                            } : {}}
                          ></motion.div>
                        </div>
                        <motion.span 
                          className="text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                          whileHover={{ 
                            backgroundColor: skillCategory.color.replace('bg-', ''),
                            color: "white",
                            transition: { duration: 0.2 }
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className={`h-full ${skillCategory.color}`}
                          variants={progressVariants}
                          initial="initial"
                          animate="animate"
                          custom={skill.level}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className={`absolute -top-3 -right-3 w-16 h-16 ${skillCategory.color}/10 rounded-full blur-xl -z-10`}
                animate={activeCategory === categoryIndex ? {
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                  transition: { 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }
                } : {}}
              ></motion.div>
              <motion.div 
                className={`absolute -bottom-3 -left-3 w-16 h-16 ${skillCategory.color}/10 rounded-full blur-xl -z-10`}
                animate={activeCategory === categoryIndex ? {
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.7, 0.5],
                  transition: { 
                    duration: 2.5, 
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }
                } : {}}
              ></motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Skills */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div 
            className="relative flex items-center justify-center mb-8"
            variants={itemVariants}
          >
            <div className="absolute left-0 right-0 h-px bg-border"></div>
            <span className="relative bg-background px-4 text-sm text-muted-foreground">Additional Skills</span>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Responsive Design', 'UI/UX Design', 'Performance Optimization', 'SEO', 'Accessibility', 'Cross-Browser Compatibility', 'Progressive Web Apps', 'WebSockets', 'Authentication', 'State Management'].map((skill, index) => (
              <motion.span 
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "hsl(var(--primary) / 0.2)",
                  color: "hsl(var(--primary))",
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                custom={index}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 