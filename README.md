# E WORLD — Official Website

> **Comfort. Care. Confidence.**  
> Premium AC & Washing Machine Doorstep Service in Kerala (Parappanangadi & Kondotty).  
> **Direct Booking:** Phone / WhatsApp: `+91 8157001618`

---

## 🌟 Executive Summary

This repository contains the E WORLD business website, built with React 18, TypeScript, Tailwind CSS, and Lucide icons. It is a static React frontend; there is no Express API, MongoDB connection, or server-side booking system in this project. Booking enquiries are handed off to WhatsApp.

---

## 💎 Key Features & Architecture

### 1. Brand Identity & Original Logo Preservation
- **Preserved Identity**: Retains the authentic E WORLD cooling mark—the iconic cyan/blue cooling badge with white snowflake symbol and distinct dual-tone typography (`E` in crisp white/midnight navy, `WORLD` in electric cyan `#28D9F2`).
- **Vector SVG Assets**:
  - `public/assets/logo.svg`: Full logo lockup for dark headers and footers.
  - `public/assets/logo-icon.svg`: App icon badge.
  - `public/favicon.svg`: High-resolution browser favicon.

### 2. Homepage
- Compact hero and responsive cards for all listed AC and washing machine services.
- Booking form opens a prefilled WhatsApp enquiry and validates required details.
- Phone, WhatsApp, service areas, and hours remain easy to find.
- Mobile navigation and quick Call, WhatsApp, and Booking actions.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Build Tool**: Vite 6
- **SEO**: Semantic HTML5, Open Graph meta tags, Twitter Cards, Schema.org `HomeAndConstructionBusiness` JSON-LD

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher, tested on v25)
- npm (v9 or higher)

### Installation
```bash
# Clone the repository and navigate to the project directory
cd "c:\E world portfolio"

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build & Preview
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📱 QA & Verification Checklist

- [x] Original E WORLD logo displayed with proper proportions and colors.
- [x] Navbar transitions smoothly on scroll with working mobile drawer.
- [x] All 10 service cards pre-fill the appliance and service in the booking form.
- [x] Form validates required fields (Name, 10-digit Phone, Service, Location).
- [x] Generates clean, encoded WhatsApp message to `918157001618`.
- [x] Direct phone call links (`tel:+918157001618`) tested and functional.
- [x] Floating mobile bar visible on small viewports and hidden on desktop.
- [x] No horizontal overflow at tested mobile, tablet, and desktop widths.
- [x] Website images and logos are locally hosted; Google Fonts and WhatsApp use external services.
- [x] SEO meta tags and LocalBusiness JSON-LD validated.
