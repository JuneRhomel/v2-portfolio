# June Rhomel - Modern Software Engineer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI. This portfolio is designed for software engineers to showcase their skills, projects, and experience.

![June Rhomel Screenshot](public/screenshot.png)

## Features

- 🚀 Modern UI design with smooth animations
- 📱 Fully responsive for all device sizes
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js App Router
- 🧩 Component-based architecture
- 🔍 SEO optimized
- 📊 Animated skill bars
- 📝 Contact form with validation
- 🔄 Interactive timeline for experience section

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form (coming soon)
- **Validation**: Zod (coming soon)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/June Rhomel.git
   cd June Rhomel
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Edit the content in the section components to add your own information:

- `src/components/sections/hero-section.tsx` - Main hero section
- `src/components/sections/about-section.tsx` - About me section
- `src/components/sections/projects-section.tsx` - Projects showcase
- `src/components/sections/skills-section.tsx` - Skills and expertise
- `src/components/sections/experience-section.tsx` - Work experience
- `src/components/sections/contact-section.tsx` - Contact information and form

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file.

### Adding Projects

To add or modify projects, edit the `projects` array in `src/components/sections/projects-section.tsx`.

## Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com), the platform from the creators of Next.js.

1. Push your code to a GitHub repository.
2. Import your project to Vercel.
3. Vercel will detect that you're using Next.js and set up the build configuration for you.
4. Your site will be deployed to a URL like `your-project.vercel.app`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)

---

Built with ❤️ by June Rhomel
