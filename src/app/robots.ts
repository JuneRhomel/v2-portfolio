import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://portfolio-8suwinu36-june-rhomels-projects.vercel.app/sitemap.xml',
  }
} 