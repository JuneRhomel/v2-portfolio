'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container px-4 md:px-6 m-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <div className="mt-4 h-1 w-12 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/50 opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                <Image src="/profile.png" alt="June Rhomel Mandigma" width={400} height={400} />
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center space-y-4"
          >
            <h3 className="text-2xl font-bold">Full Stack Web Developer</h3>
            <p className="text-muted-foreground">
              Hello! I&apos;m June Rhomel Mandigma, a passionate full-stack web developer with 2 years of experience in building
              interactive web applications. I specialize in creating visually stunning and functional websites with a strong
              foundation in software development principles and practices.
            </p>
            <p className="text-muted-foreground">
              My journey in software development began during my Information Technology studies at St. Bridget College,
              followed by an intensive Full Stack Web Development Bootcamp at KodeGo where I was recognized as the top student.
              Since then, I&apos;ve been working at Inventi Philippines, delivering impactful and efficient software solutions.
            </p>
            <p className="text-muted-foreground">
              I&apos;m skilled in JavaScript, TypeScript, PHP, React.js, Node.js, Express.js, and various database technologies.
              I work within Agile methodology and implement best practices in code quality to ensure maintainability and readability
              of software projects.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="/june-rhomel-resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 