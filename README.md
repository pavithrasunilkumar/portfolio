# Pavithra Sunilkumar — AI & Data Science Portfolio

A premium, animated personal portfolio website built with React + TypeScript + Vite + Framer Motion.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky animated navbar
│   ├── HeroSection.tsx     # Full-screen hero with SVG illustration
│   ├── AboutSection.tsx    # Glassmorphism about cards
│   ├── ProjectsSection.tsx # Projects grid
│   ├── ProjectCard.tsx     # Individual project card with hover glow
│   ├── SkillsSection.tsx   # Animated skill badges + progress bars
│   ├── EducationSection.tsx # Education + certifications
│   ├── ContactSection.tsx  # Contact with social links
│   └── FadeIn.tsx          # Reusable scroll animation wrapper
├── pages/
│   └── ProjectPage.tsx     # Full project detail page (React Router)
├── data/
│   └── projects.ts         # All project data, skills, certifications
├── App.tsx                 # Routing + page transitions
├── main.tsx                # Entry point
└── index.css               # Global styles + animations
```

## ✨ Features

- **Dark theme** (#0C0C0C) with cyan/purple/pink accent gradient system
- **Framer Motion** animations: fade-in, slide-in, hover glow, floating particles
- **Glassmorphism** cards with backdrop blur and border glow on hover
- **Typing animation** in hero section cycling through roles
- **SVG girl illustration** with magnetic hover effect and orbiting elements
- **9 project cards** each with detail pages (React Router)
- **Skill badges** with animated progress bars per category
- **Education timeline** + clickable certifications
- **Fully responsive** — mobile, tablet, desktop
- **Smooth scroll navigation** with sticky navbar

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#0C0C0C` |
| Surface | `#111111` |
| Card | `#161616` |
| Accent (Cyan) | `#00F5FF` |
| Accent (Purple) | `#7B2FBE` |
| Accent (Pink) | `#FF3CAC` |
| Font | Kanit (Google Fonts) |

## 🔧 Customization

Edit `src/data/projects.ts` to update:
- Project details, descriptions, tech stacks
- Skills and categories
- Certifications and links

Update personal info in component files for name, email, GitHub/LinkedIn URLs.
