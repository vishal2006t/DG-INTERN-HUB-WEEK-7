# DG Interns Hub - Job & Internship Discovery Platform

A modern, production-ready Job & Internship Landing Website designed for college students, freshers, and beginners looking for tech internships and entry-level opportunities.

---

## 🌟 Key Features

- **Genuine Professional Design**: Clean, light, corporate career-hub aesthetic (inspired by modern platforms like LinkedIn Jobs, AngelList/Wellfound, and Handshake). Free of AI dashboard cliches, excessive gradients, floating blobs, or gimmicky animations.
- **Full Client-Side Routing**:
  - `/` — Premium Landing Page with Hero, Platform Statistics, Featured Internships, Why Choose Us, 3-Step How It Works, and Final CTA.
  - `/jobs` — Interactive Internship Directory with real-time keyword search, 8 domain categories, work-mode filter tabs (Remote / Hybrid / All), and stipend sorting.
  - `/jobs/:id` — Comprehensive two-column internship details page with key metrics, responsibilities, required skills, learning outcomes, eligibility, and sticky summary apply card.
  - `/contact` — Student support and employer inquiry page with validated direct messaging and student FAQ cards.
- **Interactive Apply Flow**:
  - Clean application modal accessible directly from any internship card or details page.
  - Form validation for Full Name, Email, Phone, Resume file upload, and Statement of Interest.
  - Realistic submission feedback with unique confirmation tracking ID.
- **Responsive & Accessible**:
  - 100% responsive across desktop, laptop, tablet, and mobile screens.
  - Mobile hamburger drawer navigation.
  - Zero horizontal overflow.
  - Consistent 8px spacing system and accessible font hierarchy with Inter typography.
- **Docker Support**: Containerized with `Dockerfile` and `docker-compose.yml` for instant, isolated deployment.

---

## 🛠️ Tech Stack

- **React 19** (Functional Components, Hooks)
- **Vite 8** (High-speed development & bundling)
- **React Router DOM v7** (Declarative client-side routing)
- **Vanilla CSS** (Custom design tokens, variables, responsive grids, zero heavy utility bloat)
- **Lucide React** (Crisp, modern iconography)
- **Docker & Docker Compose** (Containerization on port `5173`)

---

## 📂 Project Structure

```
├── .dockerignore
├── Dockerfile
├── docker-compose.yml
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── components/
    │   ├── ApplicationForm.jsx   # Interactive application modal with validation & success screen
    │   ├── FeatureCard.jsx       # Value proposition cards for Why Choose Us
    │   ├── FilterBar.jsx         # Category filter pills with count badges
    │   ├── Footer.jsx            # Multi-column footer with links, contact, and domains
    │   ├── HowItWorks.jsx        # 3-step structured student onboarding guide
    │   ├── JobCard.jsx           # Clean internship card with meta, skills, and actions
    │   ├── Navbar.jsx            # Responsive header with mobile hamburger drawer
    │   └── SearchBar.jsx         # Search input with clear button
    │
    ├── pages/
    │   ├── Home.jsx              # Landing page (Hero, Stats, Featured, Why Us, Steps, CTA)
    │   ├── Jobs.jsx              # All internship listings, search, and category filters
    │   ├── JobDetailsPage.jsx    # 2-column detailed role overview and sticky apply card
    │   └── Contact.jsx           # Support desk, contact cards, validated form, and FAQ
    │
    ├── data/
    │   └── jobs.js               # 8 realistic, comprehensive internship opportunities & platform stats
    │
    ├── App.jsx                   # Router setup, ScrollToTop, and global modal state
    ├── App.css                   # Custom responsive styling and design system
    ├── index.css                 # CSS variables, typography tokens, and resets
    └── main.jsx                  # React application entrypoint
```

---

## 💼 Included Sample Opportunities

1. **Web Development Intern** — Nexora Cloud Solutions (Remote, ₹18,000/mo)
2. **React JS Intern** — Apex Digital Labs (Bengaluru Hybrid, ₹25,000/mo)
3. **Java Development Intern** — FinScale Technologies (Remote, ₹20,000/mo)
4. **Python Development Intern** — DataSphere Analytics (Remote, ₹22,000/mo)
5. **AI / ML Intern** — CognitiveAI Systems (Hyderabad Hybrid, ₹28,000/mo)
6. **UI/UX Design Intern** — Prism Studio Labs (Remote, ₹18,000/mo)
7. **Data Analytics Intern** — MetricWave Insights (Gurugram Hybrid, ₹20,000/mo)
8. **Cyber Security Intern** — CipherShield Security (Remote, ₹24,000/mo)

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation & Run

1. Clone or open the repository folder:
   ```bash
   cd "DG INTERNS HUB/WEEK 7/WEB"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at:
   ```
   http://localhost:5173/
   ```

### Production Build

To test the production build:
```bash
npm run build
npm run preview
```

---

## 🐳 Running with Docker

You can run the entire application in a Docker container using Docker Compose:

```bash
docker compose up --build
```

The application will be accessible at:
```
http://localhost:5173/
```

To stop the container:
```bash
docker compose down
```

---

## 📄 License & Attribution

Built for **DG Interns Hub** — Empowering students and freshers to launch real tech careers with confidence.
