# 🏆 SurveX // Cyborg Landing Page

> **Made for IIT Bombay Techfest**  
> An ultra-premium, interactive 3D web experience showcasing **SurveX**—the next-generation autonomous cybernetic operating platform.

---

## 🌟 Project Overview

**SurveX // Cyborg** is a futuristic, highly immersive web application designed to demonstrate the convergence of human cognition, autonomous neural telemetry, and quantum-encrypted cybernetics.

Built with cutting-edge web technologies, real-time WebGL shaders, 3D point-cloud physics, scroll-driven SVG animations, and dynamic canvas effects, the project delivers a state-of-the-art visual experience in a unified **Green + Black Cyber Aesthetic**.

---

## 🎨 Design UI & Aesthetic Highlights

The user interface follows a curated **Cyber Emerald & Deep Obsidian Black** theme (`#000000`, `#030d0a`, `#059669`, `#10b981`, `#a7f3d0`).

Key UI design features include:

- **3D Point-Cloud CyberGlobe**: A real-time rotating 3D particle sphere built with Three.js, inner wireframe mesh, and orbital glow rings.
- **3D Depth Text (`DepthText`)**: Layered 3D text with mouse-pointer tracking, auto-orbiting tilt, and color-mix gradients.
- **Scroll-Driven Liquid Text Fill (`LiquidTextCapabilities`)**: Capability titles rendered as thin outlines that dynamically fill with animated liquid waves, ripples, and floating bubbles as the user scrolls.
- **Standing Unbroken Security Assault (`SecuritySection`)**: Procedural canvas lightning bolts, screen flash illumination, spark particle explosions, and camera shake during an automated 4-second cyber attack sequence.
- **Molten Metal WebGL Shader (`MoltenMetal`)**: Liquid metal shader background powered by OGL.
- **Interactive Pixel Blast (`PixelBlast`)**: Bayer-dithered WebGL pixel distortion reacting to mouse movement and clicks.
- **Digital Matrix Letter Glitch (`LetterGlitch`)**: Canvas-rendered scrambling character matrix in the CTA backdrop.

---

## 🚀 Key Page Sections & Architecture

### 1. 3-Second Intro Scene (`IntroScene.jsx`)
- Displays 3D **SurveX // Cyborg** brand name using `DepthText` over an active `MoltenMetal` WebGL liquid green metal background.
- Features an automated 3-second countdown progress bar and a smooth `clip-path: polygon()` transition navigating to the main platform.

### 2. Hero Section — *Cybernetics Reimagined* (`ForgeHeroSection.jsx`)
- **Header & Navbar**: Brand chevron logo, navigation links (`ABOUT US`, `FEATURES`, `SECURITY`, `CONTACT`) with active indicator dots, and pill call button (`+1 800-SURVEX`).
- **3D Interactive Globe**: Central rotating point-cloud globe (`CyberGlobe.jsx`).
- **Main Typography**: Massive uppercase title **CYBERNETICS REIMAGINED**.
- **Left Column**: 8-point starburst vector icon, copy, and glassmorphic team avatar card.
- **Center Callout**: `[ Get Started ]` pill with line callout *"Across devices, platforms, and tools"*.
- **Bottom Right Stats**: Metrics featuring `500,000+ INTEGRATIONS` and `20x POWER EFFICIENCY`.

### 3. Capabilities Section (`LiquidTextCapabilities.jsx`)
- Immersive scroll-driven text reveal animating **SYNAPTIC TELEMETRY**, **QUANTUM MESH SECURITY**, **BIO-ADAPTIVE AI**, and **PARALLEL COGNITION**.
- Multi-layered SVG sine-wave clipping paths, liquid wave physics, rising bubble particles, and tech spec chips.

### 4. Autonomous Neural Mesh (`MainLanding.jsx`)
- Live telemetry status grid monitoring distributed cybernetic nodes (*Node Alpha, Beta, Gamma, Delta*) with load balancing and latency tracking.

### 5. Security Section — *Standing Unbroken* (`SecuritySection.jsx`)
- Tells a visual story of resilience under assault.
- Features a **4-Second Lightning Assault Sequence** (with manual re-trigger button), dynamic branching lightning bolts, shockwave rings, screen illumination flashes, and a deflective energy shield grid.

### 6. Technical Specifications Matrix (`MainLanding.jsx`)
- Tabbed hardware and protocol matrix switching between *Processing*, *Telemetry*, and *Security* specifications.

### 7. CTA Section (`CtaSection.jsx` & `LetterGlitch.jsx`)
- High-impact closing banner backed by a scrambling green digital letter matrix canvas.

---

## 🛠️ Technology Stack

- **Core Framework**: React 19 (Vite 8)
- **Routing**: React Router v7 (`react-router-dom`)
- **Styling**: Tailwind CSS v4, Custom CSS Animations
- **3D & WebGL**: Three.js, OGL, Postprocessing
- **Animations**: Framer Motion, HTML5 Canvas API, SVG Masking & Clipping

---

## 📁 Repository Structure

```
Cyborg/
├── README.md               # Root Project Documentation (IIT Bombay Techfest)
└── Home/                   # Vite React Application Root
    ├── index.html          # HTML Entry Point
    ├── package.json        # Dependencies & Scripts
    ├── vite.config.js      # Vite & Tailwind v4 Configuration
    └── src/
        ├── main.jsx        # Application Entry (BrowserRouter Wrapper)
        ├── App.jsx         # Main App Route Dispatcher
        ├── index.css       # Global Styles & Tailwind Imports
        └── LandingPage/    # Modular UI Components
            ├── IntroScene.jsx
            ├── DepthText.jsx
            ├── MoltenMetal.jsx
            ├── ForgeHeroSection.jsx
            ├── CyberGlobe.jsx
            ├── PixelBlast.jsx
            ├── LiquidTextCapabilities.jsx
            ├── SecuritySection.jsx
            ├── CtaSection.jsx
            ├── LetterGlitch.jsx
            └── MainLanding.jsx
```

---

## 💻 Getting Started & Running Locally

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation & Execution

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Surya-ux-max/Cyborg_Landing_Page.git
   cd Cyborg/Home
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

<p center="text-center" align="center">
  <b>Designed & Developed for IIT Bombay Techfest 2026</b>
</p>
