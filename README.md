# Digital Chautari

A Next.js web application for Digital Chautari, built with Next.js 16 (App Router), React 19, and Tailwind CSS v4.

---

## 📂 Project Structure

```text
Digital-Chautari/
├── app/                              # Next.js App Router pages & layouts
│   ├── about/page.js                 # About page (/about)
│   ├── contact/page.js               # Contact page (/contact)
│   ├── products/page.js              # Products page (/products)
│   ├── services/page.js              # Services & pricing page (/services)
│   ├── globals.css                   # Global styles & Tailwind v4 design tokens
│   ├── layout.js                     # Root layout (Header, Footer, Fonts)
│   └── page.js                       # Home landing page (/)
├── components/                       # React components
│   ├── layout/                       # Header, mobile navigation, and Footer
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── sections/                     # Landing & page section components
│   │   ├── HeroSection.js
│   │   ├── WhoWeAre.js
│   │   ├── ProductsTeaser.js
│   │   ├── SectorsSection.js
│   │   ├── ProcessSection.js
│   │   ├── TestimonialsSection.js
│   │   ├── DarkStatsBanner.js
│   │   ├── FeatureStrip.js
│   │   ├── BlogTeaser.js
│   │   └── ClosingCTA.js
│   └── ui/                           # Reusable UI primitives
│       ├── Button.js
│       ├── Card.js
│       ├── IconChip.js
│       ├── ScrollReveal.js
│       ├── SectionHeader.js
│       └── StatBar.js
├── lib/
│   └── constants.js                  # Navigation links and site configuration
├── public/                           # Static assets
├── package.json                      # Dependencies & scripts
└── next.config.mjs                   # Next.js configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: `v18.18.0` or higher (Node 20+ recommended)
- **npm** (comes with Node.js) or **pnpm** / **yarn**

To check your installed versions:
```bash
node -v
npm -v
```

---

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/baralbishwas07/Digital-Chautari.git
   cd Digital-Chautari
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the local development server at `localhost:3000` with hot reloading |
| `npm run build` | Builds an optimized production bundle |
| `npm run start` | Starts the production server (after running `npm run build`) |
| `npm run lint` | Runs ESLint to check for code issues and lint errors |
