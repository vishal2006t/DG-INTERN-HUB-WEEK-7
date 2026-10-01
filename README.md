<<<<<<< HEAD
# DG Interns Hub

A professional Job & Internship Landing Website designed for college students, freshers, and beginners looking for tech internships and entry-level opportunities.

---

## 📌 Project Description

**DG Interns Hub** is a frontend discovery platform built for the Week 7 internship task. It provides an intuitive, trustworthy, and student-friendly experience for discovering curated internship opportunities across modern domains like Web Development, React, Java, Python, AI/ML, UI/UX, Data Analytics, and Cyber Security.

Students can browse listings, filter by domain and work mode, inspect detailed role requirements and learning outcomes, and submit job applications through a validated application flow.

---

## 🌟 Features

- **Original Professional Design**: Clean, light career-portal interface designed with corporate standards (no AI chatbots, excessive gradients, glowing cards, or floating blobs).
- **Client-Side Routing**: Complete multi-page application powered by React Router DOM.
- **Dynamic Search**: Real-time filtering across job title, company name, skill tags, and location.
- **Category Filter Tabs**: One-click filtering across 8 tech domains (All, Web Development, React, Java, Python, AI/ML, UI/UX, Data Analytics, Cyber Security) with live count indicators.
- **Work Mode Filters**: Filter by Remote, Hybrid, or All modes.
- **Stipend Sorting**: Toggle between default featured order and highest stipend.
- **Job Details View**: 2-column desktop layout with detailed role responsibilities, required skills, learning outcomes, eligibility, perks, and a sticky summary card.
- **Interactive Application Modal**:
  - Accessible modal dialog for applying to any listed internship.
  - Comprehensive field validation (Name, Email, Phone, Resume file upload, and Statement of Interest).
  - Realistic submission feedback showing confirmation ID and success message.
  - Automatic form reset.
- **Get in Touch Contact Page**:
  - Validated contact form with instant success confirmation.
  - Support contact cards for Email, LinkedIn, GitHub, and Headquarters location.
  - Student FAQ section answering common internship queries.
- **Responsive Layout**: Designed for screens from 375px mobile up to 1920px desktop with zero horizontal scrolling and an interactive mobile hamburger menu.

---

## 🛠️ Tech Stack

- **React JS** (Functional Components, Hooks: `useState`, `useParams`, `useNavigate`, `useMemo`, `useEffect`)
- **Vite** (Next-generation frontend tooling & dev server)
- **JavaScript (ES6+)**
- **React Router DOM** (`BrowserRouter`, `Routes`, `Route`, `Link`, `NavLink`)
- **Vanilla CSS** (Custom CSS variables, responsive flexbox & grid system)
- **Docker & Docker Compose** (Containerized execution on Node 22 Alpine)

---

## 📂 Project Structure

```
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── components/
    │   ├── ApplicationForm.jsx   # Application modal with validation and success screen
    │   ├── FeatureCard.jsx       # Value proposition cards for Why Choose Us
    │   ├── FilterBar.jsx         # Category filter pills with count badges
    │   ├── Footer.jsx            # Multi-column footer with quick links, contact, and social
    │   ├── HowItWorks.jsx        # 3-step structured student onboarding guide
    │   ├── JobCard.jsx           # Internship card with meta highlights and action buttons
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
    │   └── jobs.js               # 8 realistic sample opportunities and platform datasets
    │
    ├── App.jsx                   # Router setup, ScrollToTop, and global modal state
    ├── App.css                   # Custom responsive styling and design system
    ├── index.css                 # CSS variables, typography tokens, and resets
    └── main.jsx                  # React application entrypoint
```

---

## 🚀 Local Setup

### 1. Install Dependencies
Make sure you have Node.js (v18+) and npm installed. From the project directory, run:

```bash
npm install
```

### 2. Start the Development Server
Run the local Vite dev server:

```bash
npm run dev
```

The application will start immediately at:
👉 **http://localhost:5173**

---

## 🐳 Docker Setup

The project includes complete Docker and Docker Compose configuration.

### Run with Docker Compose
Run the following command in the project root:

```bash
docker compose up --build
```

The container will build using **Node 22 Alpine** and start the application on port `5173`.

Access the application in your browser at:
👉 **http://localhost:5173**

To stop the container:
```bash
docker compose down
```

---

## 🧭 Routes

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Landing page with Hero, Stats, Featured Internships, Why Choose Us, How It Works, and Final CTA. |
| `/jobs` | **Jobs** | Full internship discovery directory with search bar, category filters, and 8 realistic opportunities. |
| `/jobs/:id` | **Job Details** | Comprehensive 2-column role view with responsibilities, skills, learning, perks, and apply CTA. Includes invalid ID fallback with "Back to Jobs" button. |
| `/contact` | **Contact** | Support and inquiry desk with validated message form, contact cards, and student FAQs. |

---

## 🔮 Future Improvements

1. **Saved Internships**: Add localStorage-based bookmarking so students can save opportunities to review later.
2. **Resume Preview**: Enable in-browser PDF preview when students upload their resume in the application modal.
3. **Application Tracker**: A dedicated student dashboard displaying the status of all submitted applications.
4. **Email Notifications**: Integration with an email service to send automated application receipts to students.

---

## 👨‍💻 Author

Built for **DG Interns Hub** — Week 7 Internship Submission.
Empowering college students and freshers to launch real tech careers with confidence.
=======
# DG-INTERN-HUB-WEEK-7
>>>>>>> d8dd8823ebe047bdd2b72b8e38dc5d32d51c3757
