# PrimeEstate – Real Estate Property Listing Web Application

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple.svg)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-v6-red.svg)](https://reactrouter.com/)

A modern, responsive, and feature-rich real estate property listing single-page application (SPA) built using **React JS** and **Vite**.

---

## 📋 Final Submission Information

- **1. Full Name:** Odeyale Joshua Mbang
- **2. Matriculation Number:** 25/sci01/076
- **3. Department:** Computer Science
- **Email:** ce073200@gmail.com
- **4. Project Title:** PrimeEstate – Real Estate Property Listing Application
- **5. Short Description:** A functional, responsive web application for a premier real estate agency that allows users to explore residential and commercial property listings across Nigeria, search and filter properties by multiple criteria, save favourite properties with local storage persistence, read about the company’s history and team, and submit inquiries through an interactive validated contact form.
- **6. Business / Project Selected:** Project Idea #8 – Real Estate Property Listing Application (PrimeEstate Limited)
- **11. React Concepts Implemented:** Functional Components, Component-based Architecture, Props, JSX Expressions, `useState`, `useEffect`, `useContext`, Custom Hook (`useContactForm`), React Router v6 (`BrowserRouter`, `Routes`, `Route`, `NavLink`, `Link`), Synthetic Event Handling (`onClick`, `onChange`, `onSubmit`), Controlled Form Inputs & Validation, LocalStorage persistence, CSS Grid & Flexbox Responsive Design.
- **12. Tested on Mobile and Desktop:** Confirmed. Tested across desktop (1280px+), tablet (768px - 1024px), and mobile devices (320px - 480px).
- **13. Application Runs Successfully:** Confirmed. Production build (`npm run build`) compiles cleanly with Vite in ~3 seconds.

---

## 🌟 Application Features & Page Overview

### A. Home Page (`/`)
- **Brand Presentation:** Displays company name ("PrimeEstate"), logo icon, and punchy tagline.
- **Welcome & Introduction:** High-impact hero section with dynamic background, welcome eyebrow, heading, and company introduction.
- **Interactive Elements:**
  - **Quick Search Bar:** Allows instant filtering by property type (`For Sale` / `For Rent`) and text keyword.
  - **Animated Statistics Counter:** Demonstrates dynamic React state by counting up key metrics (2,500+ Listings, 8,000+ Happy Clients, 15+ Cities, 12+ Years).
  - **Interactive Favourites Toggle:** Bookmark properties straight from the cards.
- **Featured Listings:** Renders hand-picked properties using reusable `PropertyCard` components.
- **Services Grid:** Highlights 6 core real estate services with icons and descriptions.
- **Why Choose Us Section:** Company differentiators with high-res imagery and key value points.
- **Client Testimonials:** Rendered dynamically using reusable `TestimonialCard` components.
- **Call-to-Action (CTA) Banner:** Direct routes to properties and contact pages.

### B. About Page (`/about`)
- **Company Story & Background:** In-depth history of PrimeEstate since its inception in 2013 in Lagos, Nigeria.
- **Mission, Vision & Objectives:** Structured in custom styled MVP cards.
- **Company Milestones Timeline:** Alternating responsive timeline detailing company expansion from 2013 to 2023.
- **Core Values:** Four foundation pillars (Integrity, Excellence, Innovation, Community).
- **Leadership Team:** Component-driven showcase of the executive team with bios and roles.

### C. Services & Products / Properties Page (`/properties`)
- **Extensive Listings:** 9 detailed real estate properties covering multiple categories:
  - *Villas, Luxury Apartments, Townhouses, Commercial Offices, Studio Flats, Country Estates, Bungalows, Penthouses*.
- **Reusable `PropertyCard` Component:** Displays image, sale/rent badge, category, price formatted in Nigerian Naira (₦), location, description, beds/baths/area/parking, and interactive favourite button.
- **JavaScript Array Methods:** Utilises `.map()`, `.filter()`, and `.sort()` to dynamically display and order listings.
- **Advanced Filtering System:**
  - Live text search across title, location, category, and description.
  - Type tabs (`All`, `For Sale`, `For Rent`).
  - Category filter pills (`Villa`, `Apartment`, `Townhouse`, `Commercial`, `Bungalow`, `Penthouse`).
  - Interactive price range slider (up to ₦10,000,000).
  - Minimum bedroom selector (`Any`, `1+`, `2+`, `3+`, `4+`, `5+`).
  - Saved properties filter (`Show saved properties only`).
  - Sorting options (Price Low-to-High, Price High-to-Low, Largest Area, Newest).
  - View layout toggle (CSS Grid View vs. Single-column List View).

### D. Contact Page (`/contact`)
- **Direct Contact Information:**
  - Real sample address: *14 Marina Boulevard, Victoria Island, Lagos, Nigeria*.
  - Sample telephone: *+234 801 234 5678*.
  - Sample email: *info@primeestate.ng*.
  - Operating hours & interactive location map placeholder.
- **Validated Contact Form:**
  - Controlled inputs for: **Full Name**, **Email Address**, **Subject** (dropdown), and **Message**.
  - Real-time error feedback for empty fields, minimum character lengths, and invalid email formats.
  - Simulated async submission with loading spinner state and interactive success message card with "Send Another Message" reset.
- **Interactive FAQ Accordion:** HTML5 accessible `<details>` / `<summary>` accordion for frequently asked real estate questions.

---

## 🛠️ React JS Technical Implementation

| Concept | Implementation Details |
|---|---|
| **Vite Setup** | Modern build tool providing instant Hot Module Replacement (HMR) and optimized rollup production bundles. |
| **Component Hierarchy** | Clean separation of concerns with atomic components (`Navbar`, `Footer`, `PropertyCard`, `TestimonialCard`, `TeamMemberCard`, `StatCard`, `ScrollToTop`). |
| **JSX** | Clean semantic JSX structure, JavaScript expressions in curly braces `{...}`, correct use of `className`, `htmlFor`, and self-closing tags. |
| **Props** | Data passing from parent to child components (e.g. `<PropertyCard property={p} />`, `<StatCard stat={s} />`). |
| **`useState`** | Used for search query, active filters, form fields, modal toggles, menu status, counters, view modes. |
| **`useEffect`** | Used for window scroll event listeners, hero fade-in animation, animated counter timer, and route-change scroll-to-top. |
| **`useContext`** | Global `FavouritesContext` to manage bookmarked properties across the entire application without prop drilling. |
| **Custom Hooks** | `useContactForm` encapsulating form state, validation logic, submission handling, and reset methods. |
| **Local Storage** | User's saved properties automatically persist in browser `localStorage` and restore upon page reload. |
| **React Router v6** | Client-side routing with `BrowserRouter`, `Routes`, `Route`, `NavLink` (with active state classes), and `Link`. |
| **Responsive CSS** | Custom CSS variables, Flexbox, CSS Grid, media queries for 1024px, 768px, and 480px breakpoints. Zero horizontal scroll overflow. |

---

## 📁 Project Directory Structure

```
primeestate/
├── public/
│   └── favicon.svg           # Custom SVG favicon
├── src/
│   ├── assets/               # Static assets
│   ├── components/           # Reusable UI components
│   │   ├── Footer.jsx        # Footer with links, address & copyright
│   │   ├── Navbar.jsx        # Responsive navigation with hamburger menu
│   │   ├── PropertyCard.jsx  # Reusable property card with props
│   │   ├── ScrollToTop.jsx   # Route change scroll restoration
│   │   ├── StatCard.jsx      # Reusable counter card
│   │   ├── TeamMemberCard.jsx# Reusable executive team card
│   │   └── TestimonialCard.jsx# Reusable review card
│   ├── context/
│   │   └── FavouritesContext.jsx # Global context & localStorage sync
│   ├── data/
│   │   └── properties.js     # Property, team, testimonial & stat datasets
│   ├── hooks/
│   │   └── useContactForm.js # Custom hook for form validation & state
│   ├── pages/
│   │   ├── About.jsx         # About us, history timeline & team page
│   │   ├── Contact.jsx       # Contact details, form & FAQ page
│   │   ├── Home.jsx          # Hero, featured listings & services
│   │   ├── NotFound.jsx      # 404 error page
│   │   └── Properties.jsx   # Products/listings page with search & filters
│   ├── App.jsx               # Router, provider & layout root
│   ├── index.css             # Design tokens & responsive styles
│   └── main.jsx              # React 18 DOM entry point
├── index.html                # HTML entry point with Google Fonts
├── package.json              # Project dependencies & npm scripts
└── vite.config.js            # Vite configuration with React plugin
```

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have **Node.js** (v18 or higher) installed on your system.

### Installation & Execution Steps

1. **Open your terminal / command prompt** and navigate to the project directory:
   ```bash
   cd "C:\Users\USER\OneDrive\Desktop\polio\primeestate"
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the application:**
   Click the local URL displayed in your terminal (usually `http://localhost:5173`) to view PrimeEstate in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled production output will be generated in the `dist/` directory.

---

## 🌐 Publishing Online

You can publish this React application online for free using any of the following platforms:

### Option 1: Vercel (Recommended - Fastest)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the `primeestate` folder and follow the prompts.
3. Your live URL will be ready in under 60 seconds!

### Option 2: Netlify Drop (No CLI Needed)
1. Run `npm run build` inside `primeestate`.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the Netlify Drop box.
4. Your site is instantly live with a free `.netlify.app` domain!

### Option 3: GitHub & GitHub Pages / Vercel Integration
1. Create a new repository on [GitHub](https://github.com/new) named `primeestate`.
2. Push your project code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of PrimeEstate React Application"
   git branch -M main
   git remote add origin https://github.com/<your-username>/primeestate.git
   git push -u origin main
   ```
3. Import your GitHub repository directly into **Vercel** or **Netlify** for continuous automatic deployment whenever you make updates.

