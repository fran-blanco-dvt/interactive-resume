# Francisco Blanco Fernández - Interactive Resume & Portfolio Website

A modern, responsive, and minimalist interactive resume landing page for **Francisco Blanco Fernández** (Principal Cloud Strategist, Google Developer Expert 2026, and Google Cloud Trusted Advisor), built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Key Features

1. **Interactive Experience Timeline**:
   - Filter experiences by company (*All*, *Devoteam*, *DXC*, *Hewlett Packard*).
   - Expandable key achievements, milestones, and responsibilities for each era.
   - Skill tags for each role (GCP, GKE, Gemini, FinOps, VMware ESXi).

2. **Personalized Hero Section**:
   - High-fidelity profile avatar with Google Cloud brand accent glow.
   - Live **Google Developer Expert (GDE 2026)** credential badge.
   - Instant CTAs: Download PDF Resume, Explore Experience, and Get in Touch.

3. **Google Cloud Certifications & Honors Showcase**:
   - Comprehensive grid highlighting 12+ Google Cloud credentials and badges (Google Developer Expert 2026, Gemini Enterprise Forward Deployed Engineer, Gemini Enterprise Agent Development, Gemini Enterprise Deployment, Google Cloud Ambassador - Application Modernization, Authorized Trainer, Generative AI Leader, Cloud Architect, DevOps, Security, Data, Network, and Database Engineer) with official badge artwork and interactive lightbox zoom previews.

4. **Public Contributions & Portfolio**:
   - Filterable catalog of public speaking engagements, keynotes, and technical articles:
     - *Google Summit Madrid: Traffic at Scale with GKE multiregion*
     - *Modernize a .NET Application with Gemini*
     - *The Developer Guide to the Gemini Ecosystem*
     - *Your Cloud in App Mode (GDG Menorca DevFest)*
     - *How AI Will Transform Banking*
     - *Cost Control in Cloud Environments (Computerworld)*

5. **Seamless PDF Download & Print**:
   - **Direct PDF Download**: Integrated high-quality downloadable PDF resume at `/resume.pdf`.
   - **Interactive PDF Preview Modal**: In-browser preview with dedicated `@media print` layout optimized for clean printing or saving to PDF without navigation bars or buttons.

6. **Dark / Light Theme Toggle**:
   - Respects system preferences (`prefers-color-scheme`) and persists user toggle in `localStorage`.
   - Inline anti-FOUC script preventing flash of unstyled theme on initial load.

7. **Responsive & Mobile-Friendly Navigation**:
   - Sticky glassmorphism header with active section spy.
   - Smooth scrolling between sections (`#about`, `#experience`, `#certifications`, `#contributions`, `#contact`).
   - Mobile navigation drawer.

8. **Contact Form & Socials**:
   - Interactive contact form with automated email client (`mailto:`) integration.
   - One-click copy button for email (`fran.blanco.fernandez@gmail.com`).
   - Direct link to Francisco's [LinkedIn profile](https://www.linkedin.com/in/fran-blanco-63640053/) in both the header and footer.

---

## 📂 Project Structure

```
interactive-resume/
├── index.html                  # HTML entry point with anti-FOUC theme detector
├── package.json                # Project dependencies and npm scripts
├── tailwind.config.js          # Tailwind CSS theme & custom Google brand colors
├── vite.config.js              # Vite configuration
├── public/
│   ├── favicon.svg             # Cloud browser favicon
│   ├── profile.jpg             # User avatar illustration
│   └── resume.pdf              # Pre-rendered vector PDF resume
└── src/
    ├── main.jsx                # Application root mounting
    ├── App.jsx                 # Master layout assembly
    ├── index.css               # Tailwind directives, custom scrollbar & print CSS
    ├── data/
    │   └── resumeData.js       # Centralized resume content & data model
    └── components/
        ├── Navbar.jsx          # Header with mobile drawer & smooth scroll
        ├── Hero.jsx            # Profile photo, GDE badge & primary actions
        ├── About.jsx           # Bio story, competencies & education
        ├── Timeline.jsx        # Interactive timeline with filtering & expansion
        ├── Certifications.jsx  # Google Cloud credentials grid
        ├── Contributions.jsx   # Public talks, articles & videos
        ├── Contact.jsx         # Contact form & quick copy buttons
        ├── Footer.jsx          # Footer with LinkedIn link & back-to-top
        ├── ThemeToggle.jsx     # Dark mode switcher
        └── ResumePdfModal.jsx  # Printable modal & PDF download preview
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
cd interactive-resume
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
The optimized production bundle will be output in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```
