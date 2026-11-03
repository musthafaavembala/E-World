# E WORLD — Official Website

> **Comfort. Care. Confidence.**  
> Premium AC & Washing Machine Doorstep Service in Kerala (Parappanangadi & Kondotty).  
> **Direct Booking:** Phone / WhatsApp: `+91 8157001618`

---

## 🌟 Executive Summary

This repository contains the complete, production-ready website for **E WORLD**, built with React 18, TypeScript, Tailwind CSS, and Lucide icons.

The website delivers an elite digital experience inspired by international tech leaders (Apple, Linear, Stripe), customized specifically for residential homeowners and families across Kerala.

---

## 💎 Key Features & Architecture

### 1. Brand Identity & Original Logo Preservation
- **Preserved Identity**: Retains the authentic E WORLD cooling mark—the iconic cyan/blue cooling badge with white snowflake symbol and distinct dual-tone typography (`E` in crisp white/midnight navy, `WORLD` in electric cyan `#28D9F2`).
- **Vector SVG Assets**:
  - `public/assets/logo.svg`: Full logo lockup for dark headers and footers.
  - `public/assets/logo-icon.svg`: App icon badge.
  - `public/favicon.svg`: High-resolution browser favicon.

### 2. High-Resolution Commercial Photography
Locally stored in `public/assets/images/`:
- `hero-technician.jpg`: Skilled Indian technician servicing modern split AC unit.
- `ac-water-service.jpg`: Real AC indoor unit jet washing with waterproof catch jacket.
- `ac-deep-cleaning.jpg`: Antibacterial foam sanitization and coil detailing.
- `washing-machine-repair.jpg`: Front-load washer drum and pump repair.
- `service-equipment.jpg`: Professional digital manifold gauges and HVAC tools.
- `ac-outdoor-service.jpg`: Rooftop outdoor condenser unit diagnostic.
- `technician-portrait.jpg`: Friendly technician portrait in safety attire.
- `comfort-home.jpg`: Pristine modern home enjoying whisper-quiet cool airflow.

### 3. Interactive Sections
- **Sticky Navbar**: Dark glassmorphic blur with original logo, smooth anchor links, WhatsApp pill, and "Book a Service" CTA.
- **Hero Section**: High-impact value proposition, doorstep service badge, trust indicators, and quick action buttons.
- **Services Section**: Tabbed categorization for **Air Conditioning** and **Washing Machine** with feature checklists and one-click "Book This Service" triggers that pre-fill the booking form.
- **Why Choose E WORLD**: Strictly verified business claims (genuine parts, mess-free water cleaning, honest pricing, local Kerala experience).
- **Brands We Service**: Compatibility matrix for 13+ AC brands (Daikin, LG, Panasonic, Voltas, Blue Star, etc.) and 10+ Washing Machine brands (Bosch, IFB, Whirlpool, Samsung, etc.).
- **Our Work Gallery**: Responsive photography showcase with an interactive full-screen Lightbox modal.
- **Service Locations**: Dedicated coverage cards for **Parappanangadi** and **Kondotty** with direct booking triggers.
- **Our Commitment**: Professional homeowner pledge highlighting honesty, cleanliness, and local climate optimization.
- **WhatsApp Direct Booking Engine**: 
  - Validates required fields (Name, Phone, Category, Service, Location).
  - Formats a clean, professional enquiry message.
  - Automatically URL-encodes and opens `https://wa.me/918157001618?text=...`.
- **Contact & Verified Operating Hours**:
  - Phone: `+91 8157001618`
  - WhatsApp: `+91 8157001618`
  - Monday – Saturday: 8:00 AM – 9:00 PM
  - Sunday: 9:00 AM – 6:00 PM
- **Floating Mobile Action Bar**: Fixed bottom bar on mobile screens with one-tap access to Call, WhatsApp, and Booking without blocking form inputs.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Build Tool**: Vite 5
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
- [x] All 10 service cards pre-fill category and service in the booking form.
- [x] Location cards pre-fill the customer's area in the booking form.
- [x] Form validates required fields (Name, 10-digit Phone, Service, Location).
- [x] Generates clean, encoded WhatsApp message to `918157001618`.
- [x] Direct phone call links (`tel:+918157001618`) tested and functional.
- [x] Gallery lightbox operates smoothly with previous/next and keyboard/click dismiss.
- [x] Floating mobile bar visible on small viewports and hidden on desktop.
- [x] 100% locally hosted assets—no broken external dependencies.
- [x] SEO meta tags and LocalBusiness JSON-LD validated.
