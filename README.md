# Joel Leiva — Cybersecurity Portfolio

A personal cybersecurity portfolio website showcasing projects, achievements, skills, and photography. Built with a dark terminal/hacker aesthetic using React, Vite, and Tailwind CSS.

## 🖥️ Tech Stack

- **Framework:** React 19 with React Router v7
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v3 with a custom design system
- **Icons:** Lucide React
- **Language:** JavaScript (JSX)

## 📄 Pages

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Projects | `/projects` |
| Photography | `/photography` |
| Achievements | `/achievements` |
| NCyTE Career Challenge | `/projects/ncyte-career-challenge` |
| DFIR Triage Station | `/projects/dfir-triage-station` |
| Pi-hole DNS Filtering | `/projects/pi-hole-dns-filtering` |
| Home Lab Networking | `/projects/home-lab-networking` |
| Physical Server & NVR | `/projects/physical-server-nvr` |
| NGO Threat Intel | `/projects/ngo-threat-intel` |
| C.Y.B.E.R. Radio | `/projects/cyber-radio` |

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Install Dependencies

```bash
npm install
```

### Run Locally (Development)

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 🌐 Deployment

This project is a static React/Vite SPA and can be deployed to:

- **Vercel** (recommended) — connect your GitHub repo and deploy automatically
- **Netlify** — connect your GitHub repo, set build command to `npm run build`, publish directory to `dist`
- **GitHub Pages** — build and deploy the `dist/` folder

> **Note:** When deploying to Vercel or Netlify, no environment variables are required for this portfolio site.

## 📁 Project Structure

```
portfolio_app/
├── public/
│   ├── documents/        # Resume and cover letter PDFs
│   ├── images/           # Photography and portrait images
│   ├── projects/         # Project-specific images and assets
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/           # Static assets used in components
│   ├── components/       # Shared components (Navbar, Footer, etc.)
│   ├── pages/            # Page components for each route
│   ├── App.jsx           # Router and route definitions
│   ├── main.jsx          # React entry point
│   └── index.css         # Global styles and Tailwind directives
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🔒 Environment Variables

This portfolio does not require any environment variables. There is no backend or API integration.

If you fork this project and add a backend/contact form, create a `.env` file locally (it is already in `.gitignore` and will not be committed).

## 📝 Credits

- Portfolio designed and developed by **Joel Leiva**
- Research poster and project documentation authored by Joel Leiva and team contributors
- Hosted through [Kean University Center for Cybersecurity](https://www.kean.edu/academics/college-business-and-public-management/center-cybersecurity)
