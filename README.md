Empire Blue – Frontend

A modern, responsive web application built with React and Vite for Empire Blue.
The app highlights product information, health benefits, and impact through clean design, smooth animations, and a simple component structure.

✨ Key Features

Responsive design powered by Tailwind CSS

Engaging homepage sections: Hero, About, Situation & Impact, Health Benefits

Scroll-based animations with AOS (Animate On Scroll)

Lightweight icons (inline SVGs for performance and sharp rendering)

Reusable components with clean, modular structure

🛠️ Tech Stack

React 18

Vite
 – lightning-fast dev server & build tool

Tailwind CSS
 – utility-first styling

AOS
 – simple scroll animations

🚀 Getting Started
Prerequisites

Node.js 18+

npm (bundled with Node) or yarn/pnpm

Installation
npm install

Development
npm run dev


Starts the Vite dev server at http://localhost:5173
 with hot reload enabled.

Production Build
npm run dev


Outputs the optimized build into the dist/ folder.

Preview Production Build
npm run preview

📂 Project Structure
frontend/
├─ src/
│  ├─ App.jsx
│  ├─ assets/
│  ├─ components/
│  │  ├─ About/
│  │  ├─ Footer/
│  │  ├─ Home/
│  │  │  ├─ HomePage.jsx
│  │  │  └─ components/
│  │  │     ├─ HeroSection.jsx
│  │  │     ├─ AboutSection.jsx
│  │  │     ├─ SituationImpactSection.jsx
│  │  │     ├─ HealthBenefitsSection.jsx
│  │  │     └─ WaveDivider.jsx
│  │  └─ Navbar/
│  └─ main.jsx
├─ index.html
└─ README.md

🎨 Styling

Tailwind utility classes are used across the app for consistency and responsiveness.

Global adjustments can be made in the Tailwind config or global CSS.

Sections use semantic HTML and spacing utilities for readability and a balanced visual rhythm.

🎞️ Animations with AOS

AOS is initialized in src/App.jsx:

import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);


Use data-aos attributes to animate elements, for example:

<div data-aos="fade-right" data-aos-delay="150" data-aos-duration="800"></div>


Available animations include: fade-up, fade-right, fade-left, zoom-in, flip-up, etc.

🖼️ Assets & Icons

Small icons (heart, brain, leaf, vitamin capsule, etc.) are inline SVGs for better performance.

Larger media (banners, product images) live inside src/assets/ and are imported where needed.

♿ Accessibility

Images use meaningful alt attributes.

Tailwind colors are chosen with contrast in mind.

Headings follow a logical hierarchy for screen readers.

🔧 Troubleshooting

Animations not working? Call AOS.refresh() after dynamic content updates.

Images missing? Double-check filename case and import paths.

Tailwind classes not applying? Ensure your Tailwind config content includes src/**/*.jsx.

🌍 Deployment

Build with:

npm run dev


Deploy the dist/ folder to your hosting provider.

📜 Scripts

dev – start development server

build – create production build

preview – preview production build locally

📄 License

Proprietary – Empire Blue Pvt. Ltd.
(Update this if licensing terms change.)

👉 This version feels more human-written, polished, and presentation-ready.

Would you like me to also make a shorter “overview style” README (like something you’d put on GitHub for quick scanning), or do you prefer keeping this detailed version?