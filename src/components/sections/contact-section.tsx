'use client'

import { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useTheme } from '@/components/theme/theme-provider'
import emailjs from '@emailjs/browser'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    date: '',
  })

  const dateNow = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [activeTab, setActiveTab] = useState<'form' | 'info'>('form')
  const { theme } = useTheme()

  // Animation controls
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
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
        delay: 0.2
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      // Check if environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'June Rhomel', // Your name
        reply_to: formData.email,
        date: dateNow,
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      console.log('Email sent successfully:', response)


      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        date: dateNow,
      })

      setSubmitSuccess(true)
      setTimeout(() => setSubmitSuccess(false), 5000)
    } catch (error: unknown) {
      // Error handling with proper TypeScript pattern
      console.error('Form submission error:', error)
      setSubmitError('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>

        {/* Animated particles */}
        <motion.div
          className={`absolute top-1/4 right-1/4 w-3 h-3 rounded-full ${theme === 'dark' ? 'bg-primary/40' : 'bg-primary/30'}`}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className={`absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full ${theme === 'dark' ? 'bg-blue-400/40' : 'bg-blue-500/30'}`}
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
        <motion.div
          className={`absolute top-2/3 right-1/3 w-4 h-4 rounded-full ${theme === 'dark' ? 'bg-green-400/30' : 'bg-green-500/20'}`}
          animate={{
            y: [0, -25, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
        />
      </div>

      <div className="container m-auto px-4 md:px-6 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col items-center text-center mb-12"
        >
          <motion.span
            className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${theme === 'dark'
              ? 'bg-primary/20 text-primary'
              : 'bg-primary/10 text-primary'
              }`}
            variants={itemVariants}
          >
            Contact
          </motion.span>
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="mt-4 h-1 w-12 bg-primary rounded-full"
            variants={itemVariants}
          ></motion.div>
          <motion.p
            className="mt-6 text-muted-foreground md:text-lg max-w-[800px]"
            variants={itemVariants}
          >
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </motion.p>
        </motion.div>

        {/* Main contact card with tabs for mobile */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className={`bg-card rounded-2xl shadow-xl border border-border overflow-hidden ${theme === 'dark' ? 'shadow-primary/5' : ''
              }`}
          >
            {/* Mobile tabs */}
            <div className="md:hidden flex border-b border-border">
              <button
                onClick={() => setActiveTab('form')}
                className={`flex-1 py-3 text-center font-medium ${activeTab === 'form' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              >
                Contact Form
              </button>
              <button
                onClick={() => setActiveTab('info')}
                className={`flex-1 py-3 text-center font-medium ${activeTab === 'info' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'}`}
              >
                Contact Info
              </button>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Contact form */}
              <div className={`w-full md:w-3/5 p-6 md:p-8 ${activeTab === 'form' ? 'block' : 'hidden md:block'}`}>
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`border-primary/20 focus-visible:ring-primary ${theme === 'dark' ? 'bg-card/80' : ''
                          }`}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className={`border-primary/20 focus-visible:ring-primary ${theme === 'dark' ? 'bg-card/80' : ''
                          }`}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className={`border-primary/20 focus-visible:ring-primary ${theme === 'dark' ? 'bg-card/80' : ''
                        }`}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows={5}
                      className={`border-primary/20 focus-visible:ring-primary resize-none ${theme === 'dark' ? 'bg-card/80' : ''
                        }`}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className={`w-full ${theme === 'dark'
                      ? 'bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary'
                      : 'bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary'
                      }`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </Button>
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-green-600 text-sm mt-2 p-3 rounded-lg border flex items-start ${theme === 'dark'
                        ? 'bg-green-950/50 border-green-800'
                        : 'bg-green-50 border-green-100'
                        }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Your message has been sent successfully! I&apos;ll receive your email and get back to you soon.</span>
                    </motion.div>
                  )}
                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-red-600 text-sm mt-2 p-3 rounded-lg border flex items-start ${theme === 'dark'
                        ? 'bg-red-950/50 border-red-800'
                        : 'bg-red-50 border-red-100'
                        }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>{submitError}</span>
                    </motion.div>
                  )}
                </form>
              </div>

              {/* Contact info */}
              <div className={`w-full md:w-2/5 p-6 md:p-8 ${theme === 'dark'
                ? 'bg-gradient-to-br from-primary/20 to-primary/10'
                : 'bg-gradient-to-br from-primary/10 to-primary/5'
                } ${activeTab === 'info' ? 'block' : 'hidden md:block'}`}>
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <motion.div
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <motion.div
                      className={`mr-4 p-3 rounded-xl text-primary ${theme === 'dark'
                        ? 'bg-primary/30 backdrop-blur-sm'
                        : 'bg-primary/20 backdrop-blur-sm'
                        }`}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg">Phone</h4>
                      <p className="text-muted-foreground mt-1">+63 926 621 0532</p>
                      <a href="tel:+639266210532" className="text-primary text-sm mt-1 inline-block hover:underline">Call now</a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <motion.div
                      className={`mr-4 p-3 rounded-xl text-primary ${theme === 'dark'
                        ? 'bg-primary/30 backdrop-blur-sm'
                        : 'bg-primary/20 backdrop-blur-sm'
                        }`}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg">Email</h4>
                      <p className="text-muted-foreground mt-1">junemandigma@gmail.com</p>
                      <a href="mailto:junemandigma@gmail.com" className="text-primary text-sm mt-1 inline-block hover:underline">Send email</a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <motion.div
                      className={`mr-4 p-3 rounded-xl text-primary ${theme === 'dark'
                        ? 'bg-primary/30 backdrop-blur-sm'
                        : 'bg-primary/20 backdrop-blur-sm'
                        }`}
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-lg">Location</h4>
                      <p className="text-muted-foreground mt-1">Batangas City, Philippines</p>
                      <a href="https://maps.google.com/?q=Batangas+City,+Philippines" target="_blank" rel="noopener noreferrer" className="text-primary text-sm mt-1 inline-block hover:underline">View on map</a>
                    </div>
                  </motion.div>

                  <div className={`pt-6 border-t ${theme === 'dark' ? 'border-primary/20' : 'border-primary/10'
                    }`}>
                    <h4 className="font-semibold text-lg mb-4">Connect</h4>
                    <div className="flex space-x-4">
                      <motion.a
                        href="https://github.com/JuneRhomel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-xl text-primary hover:bg-primary hover:text-white transition-colors ${theme === 'dark'
                          ? 'bg-primary/30 backdrop-blur-sm'
                          : 'bg-primary/20 backdrop-blur-sm'
                          }`}
                        aria-label="GitHub"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/june-rhomel-mandigma-69859a175/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-xl text-primary hover:bg-primary hover:text-white transition-colors ${theme === 'dark'
                          ? 'bg-primary/30 backdrop-blur-sm'
                          : 'bg-primary/20 backdrop-blur-sm'
                          }`}
                        aria-label="LinkedIn"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </motion.a>
                      <motion.a
                        href="https://june-rhomel-portfolio-a0305.web.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-xl text-primary hover:bg-primary hover:text-white transition-colors ${theme === 'dark'
                          ? 'bg-primary/30 backdrop-blur-sm'
                          : 'bg-primary/20 backdrop-blur-sm'
                          }`}
                        aria-label="Portfolio"
                        variants={iconVariants}
                        whileHover="hover"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
                          <path d="M12 8v8" />
                          <path d="M8 12h8" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 