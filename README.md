# Newkriti Gautam — Portfolio

A world-class, fully animated portfolio website built with:
- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion** for animations
- **TypeScript**

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main page assembling all sections
│   └── globals.css       # Global styles, CSS variables, fonts
├── components/
│   ├── sections/         # Full-page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Leadership.tsx
│   │   ├── WhyHireMe.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/               # Reusable UI components
│       └── SectionLabel.tsx
└── lib/
    └── motion.ts         # Shared Framer Motion variants
```

## Customization

- Update colors in `tailwind.config.js`
- Edit personal data in each section component
- Adjust animations in `src/lib/motion.ts`
