'use client'

import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
export function HeroSection() {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  // For parallax effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Transform values for floating elements
  const rotateX = useTransform(y, [-100, 100], [5, -5])
  const rotateY = useTransform(x, [-100, 100], [-5, 5])

  useEffect(() => {
    controls.start('visible')

    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        // Calculate distance from center
        const distanceX = event.clientX - centerX
        const distanceY = event.clientY - centerY

        // Update motion values
        x.set(distanceX / 10)
        y.set(distanceY / 10)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [controls, x, y])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  }

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }

  return (
    <section className="h-screen relative py-20 md:py-32 overflow-hidden " style={{ "minHeight": "900px" }} ref={containerRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container px-4 md:px-6 m-auto relative ">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
        >
          {/* Left content */}
          <motion.div
            className="flex flex-col justify-center space-y-6"
            style={{
              perspective: 1000,
              transformStyle: "preserve-3d"
            }}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
              </div>
              <span className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Full Stack Web Developer with 2 Years Experience
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70"
            >
              JUNE RHOMEL <span className="text-primary">MANDIGMA</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[600px] text-muted-foreground md:text-xl"
            >
              Experienced full-stack web developer passionate about creating visually stunning and functional websites. Strong foundation in software development principles with skills in Node.js, React.js, and problem-solving.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 min-[400px]:flex-row pt-2"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button asChild size="lg" className="relative overflow-hidden group">
                  <Link href="#projects" className="flex items-center gap-2">
                    View My Work
                    <motion.span
                      animate={{ x: [-4, 4, -4] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </motion.span>
                    <span className="absolute inset-0 translate-y-[105%] bg-white/20 transition duration-300 group-hover:translate-y-0" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button variant="outline" size="lg" asChild className="group">
                  <Link href="#contact" className="flex items-center gap-2">
                    Contact Me
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                <a href="https://github.com/JuneRhomel" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-background hover:bg-primary/10 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                <a href="https://www.linkedin.com/in/june-rhomel-mandigma-69859a175/" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-background hover:bg-primary/10 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="https://june-rhomel-portfolio-a0305.web.app" target="_blank" rel="noopener noreferrer" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-background hover:bg-primary/10 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" /><path d="M12 2a10 10 0 0 1 10 10" /><path d="M12 2v10l5 5" /></svg>
                </a>
              </div>
              <span className="text-sm text-muted-foreground">
                Connect with me on social media
              </span>
            </motion.div>
          </motion.div>

          {/* Right content - 3D hero image */}
          <motion.div
            className="relative flex items-center justify-center"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              perspective: 1000
            }}
          >
            <motion.div
              className="absolute -inset-px rounded-full bg-gradient-to-r from-primary/30 to-blue-500/30 opacity-70 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            <motion.div
              className="relative h-[350px] w-[350px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]"
              variants={itemVariants}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-blue-500/50 opacity-20 blur-2xl"></div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={floatingAnimation}
              >
                <div className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] lg:h-[400px] lg:w-[400px] rounded-full bg-card border border-border shadow-lg flex items-center justify-center overflow-hidden">
                  {/* Code pattern background */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-repeat text-[8px] text-muted-foreground overflow-hidden p-2 flex justify-center items-center">
                      {`const Hero = () => {
  const [isAwesome, setIsAwesome] = useState(true);
  
  useEffect(() => {
    // Always stay awesome
    setIsAwesome(true);
  }, []);
  
  return (
    <div className="hero">
      <h1>Welcome to my portfolio</h1>
      {isAwesome && <Sparkles />}
    </div>
  );
};`.repeat(10)}
                    </div>
                  </div>

                  {/* Emoji with glow */}
                  <motion.div
                    className="relative z-10 text-6xl"
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <span className="block transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Image src="/me.png" alt="June Rhomel Mandigma" width={400} height={400} />
                    </span>
                    <motion.div
                      className="absolute -inset-4 bg-primary/20 rounded-full blur-xl -z-10"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating tech icons */}
              <motion.div
                className="absolute top-10 left-0 bg-card p-2 rounded-full shadow-lg border border-border"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-10 bg-card p-2 rounded-full shadow-lg border border-border"
                animate={{
                  y: [0, 20, 0],
                  x: [0, -15, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><path d="M12 2H2v10h10V2Z" /><path d="M22 12h-8v10h8V12Z" /><path d="M12 12H2v10h10V12Z" /><path d="M22 2h-8v8h8V2Z" /></svg>
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-0 bg-card p-2 rounded-full shadow-lg border border-border"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 15, 0],
                  rotate: [0, 15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M2 12.5c1.5-2.5 4-4 7.5-4 .5 0 1 .06 1.5.17V5.83c-.5-.11-1-.17-1.5-.17-4.17 0-7.5 2.22-7.5 5s3.33 5 7.5 5c.5 0 1-.06 1.5-.17v-2.83c-.5.1-1 .17-1.5.17-3.5 0-6-1.5-7.5-4Z" /><path d="M15.25 1.08C16.43.44 17.79.06 19.25 0c4.17 0 7.5 2.22 7.5 5s-3.33 5-7.5 5c-1.46-.06-2.82-.44-4-1.08" /><path d="M15.25 14.08c1.18.64 2.54 1.02 4 1.08 4.17 0 7.5-2.22 7.5-5" /><path d="M19.25 20.17c-1.46.06-2.82.44-4 1.08" /><path d="M15.25 14.08c-1.18-.64-2.54-1.02-4-1.08-4.17 0-7.5 2.22-7.5 5s3.33 5 7.5 5c1.46-.06 2.82-.44 4-1.08" /></svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-2 bg-primary rounded-full"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
    </section>
  )
} 