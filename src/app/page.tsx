import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { ContactSection } from '@/components/sections/contact-section'
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "June Rhomel | Software Engineer",
  description: "Professional portfolio of June Rhomel, a software engineer with expertise in web development, React, Next.js, and modern JavaScript frameworks.",
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "June Rhomel",
            "url": "https://portfolio-8suwinu36-june-rhomels-projects.vercel.app",
            "jobTitle": "Software Engineer",
            "worksFor": {
              "@type": "Organization",
              "name": "Self-employed"
            },
            "description": "Professional software engineer with expertise in web development, React, Next.js, and modern JavaScript frameworks.",
            "skills": "React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS",
            "sameAs": [
              "https://github.com/junerhomel",
              "https://www.linkedin.com/in/june-rhomel-a-b9a0a9a9/"
            ]
          })
        }}
      />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </>
  )
}
