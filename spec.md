# Tru Bond Cleaning Perth

## Current State
Four main pages exist (Home, Services, About, Contact) plus suburb pages. Pages have ~400 words, some images, basic meta tags, and a Google site verification tag. Images exist for hero, kitchen, carpet, bathroom, bond-back-guarantee, and window cleaning.

## Requested Changes (Diff)

### Add
- New branded images on every page (team, end-of-lease, bathroom bond clean, carpet steam clean, oven cleaning, window cleaning, contact banner, bond guarantee certificate)
- All images must have descriptive SEO alt text including location keywords
- Expand content on every page to ~1000 words per page, semantically optimised, skimmable (H2/H3 headings, bullet points, short paragraphs)
- Content must demonstrate E-E-A-T: Experience, Expertise, Authoritativeness, Trustworthiness
- Full SEO meta tags on every page: title, meta description, keywords, Open Graph (og:title, og:description, og:image, og:url), Twitter card, canonical URL
- Google site verification meta tag on all pages
- Page description / structured content sections: credentials, years of experience, guarantee, testimonials callout

### Modify
- HomePage: expand hero copy, add credentials bar, add more detailed service descriptions, expand FAQ to 1000 words, add trust signals section with images
- ServicesPage: expand each service to detailed 150+ word descriptions with images and benefits bullets
- AboutPage: expand story, team credentials, certifications, process, values to 1000 words with team image
- ContactPage: add contact page banner image, expand copy with trust signals

### Remove
- Nothing removed

## Implementation Plan
1. Update index.html with global SEO defaults and Google verification tag
2. Update HomePage.tsx: add full meta tags via react-helmet or inline, add images with alt text, expand content to 1000 words
3. Update ServicesPage.tsx: add service images with alt text, expand each service description, add meta tags
4. Update AboutPage.tsx: add team image, expand story/credentials/process to 1000 words, add meta tags
5. Update ContactPage.tsx: add contact banner image, expand trust copy, add meta tags
