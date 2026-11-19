# IEI Students' Chapter – Department of Computer Science & Engineering
**Official Static Landing Page**

> *"Engineering Ideas. Building Tomorrow."*  
> Affiliated with **The Institution of Engineers (India)** • Estd. 1920 • Incorporated by Royal Charter 1935  
> Motto: *सर्वभूतहिते रताः* (Committed to the Welfare of All)

---

## 🏛️ Overview
This repository contains a minimal, modern, and professional static landing page tailored specifically for the **IEI CSE Students' Chapter**. Crafted with a premium academic institution aesthetic, it utilizes deep navy blue, crisp white, and subtle gold accents with clean typography and dignified layouts—deliberately avoiding overused generic AI gradients and noisy glassmorphism.

---

## 🛠️ Tech Stack & Architecture
- **Framework:** React 18 (Functional Components & JSX)
- **Styling:** Basic Vanilla CSS only (No Tailwind, No Bootstrap, No external UI libraries)
- **Build Tool:** Vite
- **Data Architecture:** Fully separated and beginner-friendly data layer (`src/data/clubData.js`)

---

## 📂 Project Structure
```text
IE/
├── index.html                   # HTML entry point with Google Fonts
├── package.json                 # Project dependencies & npm scripts
├── vite.config.js               # Vite configuration
├── public/
│   └── iei-logo.jpg             # High-resolution official IEI logo
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main page layout & modal controllers
│   ├── index.css                # Base CSS variables, typography & resets
│   ├── App.css                  # Component-level styles, responsive media queries
│   ├── data/
│   │   └── clubData.js          # Editable placeholder data (events, team, activities, contacts)
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive navbar with logo & mobile drawer
│   │   ├── Hero.jsx             # Hero banner with "Engineering Ideas. Building Tomorrow."
│   │   ├── About.jsx            # Chapter & IEI heritage, mission, vision & 4 core pillars
│   │   ├── Activities.jsx       # Workshops, hackathons, coding contests, guest lectures & projects
│   │   ├── Events.jsx           # Filterable event showcase with status badges
│   │   ├── Team.jsx             # Faculty advisory board & student executive committee
│   │   ├── JoinUs.jsx           # Membership eligibility, benefits & interactive application form
│   │   ├── Footer.jsx           # Secretariat address, quick links, socials & copyright
│   │   └── EventModal.jsx       # Interactive event detail & RSVP modal dialog
```

---

## 🚀 Running the Project Locally

### 1. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Create Production Build
```bash
npm run build
```
Generates an optimized static build in the `dist/` directory ready for deployment on GitHub Pages, Vercel, Netlify, or any static web server.

### 3. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Modify Content (Beginner-Friendly)
All content on the website is completely customizable without touching any HTML or CSS:
1. Open [`src/data/clubData.js`](file:///c:/Users/hp/Desktop/IE/src/data/clubData.js).
2. Edit:
   - **`chapter`**: Name, department, tagline, and motto.
   - **`stats`**: Metrics displayed in the hero section.
   - **`activities`**: Add, modify, or remove technical workshop tracks.
   - **`events`**: Update dates, venues, speakers, and seat statuses for upcoming or past events.
   - **`team`**: Update faculty advisors and student office bearers.
   - **`contact`**: Campus office, room number, emails, and social links.
3. Save the file; changes will hot-reload immediately in the browser.

---

## 🎨 Design System & Palette
| Color Element | Hex Code | Description |
|---|---|---|
| Deep Imperial Navy | `#071224` / `#0c1c38` | Primary background and structural color |
| Stately Gold | `#b89047` / `#c9a35e` | Accent highlights, borders, and badges |
| Warm Gold Tint | `#fbf8f1` | Subtle badge and icon backgrounds |
| Crisp White | `#ffffff` / `#f8fafc` | Clean backgrounds, cards, and contrasting text |
| Slate Charcoal | `#1e293b` / `#475569` | High-contrast readable body typography |

---

## 📱 Responsiveness
The site is fully responsive across all breakpoints:
- **Desktop (> 992px):** Multi-column grid layouts with full horizontal navigation.
- **Tablets (768px – 992px):** 2-column adaptive grids.
- **Mobile (< 768px):** Single-column stacked layouts, touch-friendly buttons, and an accessible slide-down navigation drawer.
