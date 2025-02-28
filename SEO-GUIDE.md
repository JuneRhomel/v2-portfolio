# SEO Guide for Portfolio Website

This guide explains the SEO features implemented in your portfolio website and how to maintain them for optimal search engine visibility.

## Implemented SEO Features

### 1. Metadata

The website uses Next.js metadata API to provide essential information to search engines:

- **Title**: "June Rhomel | Software Engineer"
- **Description**: Professional portfolio description
- **Keywords**: Relevant keywords for your skills and profession
- **Authors, Creator, Publisher**: Your name
- **Canonical URL**: Prevents duplicate content issues
- **Robots**: Instructions for search engine crawlers

### 2. Open Graph and Twitter Cards

These tags enhance how your site appears when shared on social media:

- **Title and Description**: Consistent with metadata
- **Image**: Custom generated image for social sharing
- **URL and Site Name**: Your portfolio URL and name

### 3. Structured Data

JSON-LD structured data helps search engines understand your content better:

- **Person Schema**: Information about you as a professional
- **Skills and Work**: Your professional skills and employment
- **Social Profiles**: Links to your professional profiles

### 4. Dynamic OG Images

The site generates custom Open Graph images using Next.js's Image Generation API:

- `/opengraph-image.tsx`: For general social sharing
- `/twitter-image.tsx`: Optimized for Twitter

### 5. Sitemap and Robots.txt

- **Sitemap**: Lists all important pages/sections with priority
- **Robots.txt**: Provides instructions to search crawlers

### 6. PWA Support

Progressive Web App features that also benefit SEO:

- **Web Manifest**: Defines how your site appears when installed
- **Icons**: Various sizes for different platforms and devices

### 7. Performance Optimization

- **Vercel Analytics**: Tracks performance metrics
- **Speed Insights**: Monitors and reports on site speed

## Maintaining SEO

### When to Update SEO Elements

1. **Content Changes**: Update metadata, descriptions, and structured data when you:
   - Add new projects
   - Update your skills
   - Change your professional focus
   - Add new sections to your portfolio

2. **URL Changes**: If your domain changes, update:
   - `metadataBase` in layout.tsx
   - URLs in sitemap.ts
   - URL in robots.ts
   - URL in structured data

3. **Image Updates**: When updating your profile or project images:
   - Consider updating OG images to reflect new work
   - Ensure images are optimized for web (compressed, proper dimensions)

### Best Practices

1. **Regular Audits**:
   - Use Google Search Console to monitor performance
   - Check for crawl errors or indexing issues
   - Review which keywords are driving traffic

2. **Content Freshness**:
   - Update your portfolio regularly with new projects
   - Keep your experience and skills sections current

3. **Performance**:
   - Regularly check Lighthouse scores
   - Address any performance issues that arise

4. **Links**:
   - Ensure all links work properly
   - Add relevant external links to your work

## Deployment Considerations

When deploying updates:

1. Always run a build test locally before deploying
2. Verify that all SEO files are generated correctly
3. After deployment, check that:
   - Sitemap is accessible at `/sitemap.xml`
   - Robots.txt is accessible at `/robots.txt`
   - OG images generate correctly

## Tools for SEO Verification

- [Google Search Console](https://search.google.com/search-console)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Meta Tags Validator](https://metatags.io/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Vercel Analytics Dashboard](https://vercel.com/analytics)

---

By maintaining these SEO elements, your portfolio will remain discoverable and present well across search engines and social media platforms. 