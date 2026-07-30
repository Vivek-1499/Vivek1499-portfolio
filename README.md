# 🎬 Vivek Pandit | Interactive Cinematic Portfolio

Welcome to the repository of **Vivek Kumar Pandit's Personal Portfolio**. This project is a premium, highly interactive, and visually stunning web experience designed to showcase software engineering craftsmanship, full-stack capability, and design fidelity.

The portfolio is structured around a **Cinematic Studio Theme**, blending a vintage film-studio aesthetic with modern frontend mechanics like 3D canvasses, interactive control desks, and immersive micro-interactions.

---

## ✨ Features & Micro-Interactions

### 🎥 1. Interactive Clapperboard Intro
- Start the portfolio journey with an authentic interactive **Clapperboard** slate.
- Clicking/tapping the clapperboard triggers a snap animation and smoothly lifts the dim overlay to reveal the main stage.

### 🕹️ 2. Floating Director's Console
- A fixed control dashboard that lets visitors customize their viewing experience:
  - **Skip Intro / Direct Access**: Toggle the cinematic pre-loader state.
  - **Reduced Motion**: Instantly disable parallax, film-strip overlays, and heavy motion triggers for better accessibility.
  - **Audio Mute/Unmute**: Global volume management for audio cues and music overlays.
  - **Studio Grid Overlay**: Toggle a layout grid visualizer to inspect structure and design token alignments.

### 🎞️ 3. Playable Projector Film Reel
- A customized carousel presenting key production-quality projects.
- Fully functional control deck keys:
  - `⏪ REWIND` (Scrolls backwards continuously)
  - `⏸️ PAUSE` (Halts scrolling)
  - `▶️ PLAY` (Scrolls forward smoothly at normal speed)
  - `⏩ FAST FWD` (Speeds up forward scroll)

### 🕵️ 4. Secret Darkroom (Flashlight Reveal)
- Located at the footer of the Home page.
- Simulates a darkroom canvas where the text is hidden in darkness. Hovering or touching the area turns the cursor into a responsive **flashlight spotlight**, revealing secret credits and messages in real time.

### 🎵 5. Audio & Studio Props
- **Vinyl Record Player**: Interactive vinyl component that rotates dynamically during audio playback.
- **Studio Microphone**: Responds to hover interactions.
- **Retro TV**: Displays interactive snapshots or media frames.

### 🚀 6. Performance & Core Web Vitals
- Built on **React 19**, **Vite 8**, and **TypeScript**.
- Uses **Code-Splitting & Lazy Loading** via `Suspense` for all major page components and the Three.js canvas.
- Smooth, momentum-based scrolling powered by **Lenis**.
- Dynamic title updates and page indexing metadata using a central **SEO component**.

---

## 🛠️ Tech Stack & Dependencies

*   **Frontend Library:** [React 19](https://react.dev/)
*   **Build Tool & Dev Server:** [Vite 8](https://vite.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **3D Graphics:** [Three.js](https://threejs.org/) / [@react-three/fiber](https://r3f.docs.pmnd.rs/) & [@react-three/drei](https://github.com/pmndrs/drei)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Smooth Scroll:** [Lenis Scroll](https://lenis.darkroom.engineering/)

---

## 📂 Project Structure

```bash
portfolio/
├── public/                 # Static assets (Resume, PDF downloads, global assets)
├── src/
│   ├── components/         # Reusable structural and animated UI components
│   │   ├── CinematicLoader.tsx    # Introductory timeline pre-loader
│   │   ├── CustomCursor.tsx       # Custom mouse follower / flashlight spotlight
│   │   ├── DirectorConsole.tsx    # Preferences config control panel overlay
│   │   ├── RetroTV.tsx            # Animated retro TV prop component
│   │   ├── SEO.tsx                # Metadata & page headers manager
│   │   ├── ThreeHeroCanvas.tsx    # 3D interactive backdrop renderer
│   │   └── VinylRecord.tsx        # Vinyl player audio companion
│   ├── context/            # Global context (e.g., PortfolioPreferences)
│   ├── data/               # Centralized data files (portfolioData.ts)
│   ├── hooks/              # Custom React hooks (e.g., useSmoothScroll)
│   ├── pages/              # Main routing views
│   │   ├── About.tsx              # Deep dive into journey and professional bio
│   │   ├── Achievements.tsx       # Hackathons, milestones, and certifications
│   │   ├── Contact.tsx            # Dynamic contact page with credits
│   │   ├── Experience.tsx         # Detailed professional history timeline
│   │   ├── Home.tsx               # Main landing page featuring the Film Reel
│   │   ├── ProjectDetail.tsx      # Case studies (Problems, Solutions, Decisions)
│   │   └── Skills.tsx             # Interactive toolkit categorization
│   ├── App.tsx             # Application routing, layout structure, and state
│   ├── index.css           # Core styling system and tailwind overrides
│   └── main.tsx            # App entry point
├── package.json            # Script targets and package manifests
├── vite.config.ts          # Vite bundling configuration
└── tsconfig.json           # TypeScript compilation settings
```

---

## 💻 Local Setup & Development

Follow these steps to run the portfolio locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/Vivek-1499/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run in Development Mode
Start the local server with hot module replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for Production
Bundle and optimize the application for hosting:
```bash
npm run build
```
The production bundle will be generated in the `/dist` directory.

### 5. Preview Production Build
```bash
npm run preview
```

### 6. Lint & Format check
Verify code standards and find syntax/type issues:
```bash
npm run lint
```
*(Uses [Oxlint](https://github.com/oxc-project/oxc) for high-speed analysis)*

---

## 🔒 Privacy & Environment Variables
- No private keys, database credentials, or secret variables are committed.
- Any local variables needed in the future should be added to a `.env.local` file (configured in `.gitignore` to prevent exposure).

---

Developed with 🎥 and 💻 by [Vivek Kumar Pandit](mailto:vivek.pandit1499@gmail.com).
