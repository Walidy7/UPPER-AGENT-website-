import React, { useState } from 'react';

interface LogoEmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Exact replica of the user's round emblem:
 * - 100% Round circular shape (rounded-full) with cyan rim glow
 * - Circular copper/rose bronze compass ring with West and East horizontal spear points
 * - Central skyscraper with 3D gable roof, dual chevron grooves (^), and vertical spine
 * - Left architectural tower with slanted roof and rectangular window cutout
 * - Bottom-right architectural block with dual rounded arches (m)
 * - Two-tone 3D diagonal compass needle cutting at 45°:
 *     * Top-right: Copper/bronze arrowhead pointing northeast
 *     * Center: Circular pivot hole
 *     * Bottom-left: Sharp electric cyan needle pointing southwest
 * - Vibrant electric cyan backlight rim glow
 */
export const LogoEmblem: React.FC<LogoEmblemProps> = ({
  className = '',
  size = 'md'
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  const pixelSizes = {
    sm: { width: 38, height: 38, radius: 'rounded-lg' },
    md: { width: 48, height: 48, radius: 'rounded-xl' },
    lg: { width: 68, height: 68, radius: 'rounded-2xl' },
    xl: { width: 96, height: 96, radius: 'rounded-3xl' }
  };

  const { width, height, radius } = pixelSizes[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${radius} aspect-square overflow-hidden bg-[#080c14] border border-cyan-500/40 shadow-[0_4px_16px_rgba(0,0,0,0.6),0_0_12px_rgba(6,182,212,0.25)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:border-cyan-400 ${className}`}
      style={{ width, height }}
      aria-label="Builder Agent Logo Emblem"
    >
      {!imageFailed ? (
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Builder Agent Emblem"
          onError={() => setImageFailed(true)}
          className={`w-full h-full object-cover ${radius} transition-transform duration-300 hover:scale-105`}
          referrerPolicy="no-referrer"
        />
      ) : (
        /* Precision Vector SVG Fallback (100% Round, Every Single Detail) */
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full rounded-full"
        >
          <defs>
            {/* Ambient Cyan Glow */}
            <filter id="roundEmblemGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            {/* Dark Leather / Carbon Background Pattern */}
            <radialGradient id="roundEmblemBg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#101822" />
              <stop offset="60%" stopColor="#080e15" />
              <stop offset="100%" stopColor="#03060a" />
            </radialGradient>

            {/* Copper / Rose Bronze Gradients */}
            <linearGradient id="copperLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fae1cf" />
              <stop offset="35%" stopColor="#e3a782" />
              <stop offset="75%" stopColor="#c58359" />
              <stop offset="100%" stopColor="#874e2d" />
            </linearGradient>

            <linearGradient id="copperDarkGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c88960" />
              <stop offset="50%" stopColor="#9a5a35" />
              <stop offset="100%" stopColor="#5a311a" />
            </linearGradient>

            <linearGradient id="copperBevelGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d99b73" />
              <stop offset="50%" stopColor="#f7d4be" />
              <stop offset="100%" stopColor="#9a5a35" />
            </linearGradient>

            {/* Electric Cyan & Teal Gradients */}
            <linearGradient id="cyanLightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cffafe" />
              <stop offset="30%" stopColor="#38bdf8" />
              <stop offset="75%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>

            <linearGradient id="cyanDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="55%" stopColor="#0e4e5e" />
              <stop offset="100%" stopColor="#082f49" />
            </linearGradient>

            <linearGradient id="tealTowerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#164e63" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* 0. Perfectly Circular Base Background */}
          <circle cx="100" cy="100" r="100" fill="url(#roundEmblemBg)" />

          {/* Cyan Glow Halo Behind the Silhouette */}
          <circle
            cx="100"
            cy="100"
            r="76"
            fill="#06b6d4"
            opacity="0.32"
            filter="url(#roundEmblemGlow)"
          />

          {/* 1. COPPER / BRONZE COMPASS RING */}
          <circle
            cx="100"
            cy="100"
            r="66"
            stroke="url(#copperLightGrad)"
            strokeWidth="11"
            fill="none"
          />
          {/* Inner and Outer Specular Lines */}
          <circle cx="100" cy="100" r="71.5" stroke="#fce7d8" strokeWidth="0.8" opacity="0.65" fill="none" />
          <circle cx="100" cy="100" r="60.5" stroke="#4a2615" strokeWidth="0.8" opacity="0.85" fill="none" />

          {/* West Compass Spear Point (Left Horizontal, 9 o'clock) */}
          <path
            d="M 34,100 L 10,100 L 34,92 Z"
            fill="url(#copperLightGrad)"
          />
          <path
            d="M 34,100 L 10,100 L 34,108 Z"
            fill="url(#copperDarkGrad)"
          />
          <line x1="10" y1="100" x2="34" y2="100" stroke="#fae1cf" strokeWidth="0.75" />

          {/* East Compass Spear Point (Right Horizontal, 3 o'clock) */}
          <path
            d="M 166,100 L 190,100 L 166,92 Z"
            fill="url(#copperLightGrad)"
          />
          <path
            d="M 166,100 L 190,100 L 166,108 Z"
            fill="url(#copperDarkGrad)"
          />
          <line x1="166" y1="100" x2="190" y2="100" stroke="#fae1cf" strokeWidth="0.75" />

          {/* 2. TOP SKYSCRAPER / ARCHITECTURAL TOWER (12 o'clock) */}
          {/* Tower Left Shaded Facet */}
          <path
            d="M 94,16 L 72,38 L 72,102 L 94,94 Z"
            fill="url(#cyanDarkGrad)"
            stroke="#083344"
            strokeWidth="0.8"
          />
          {/* Tower Right Illuminated Facet */}
          <path
            d="M 94,16 L 116,38 L 116,74 L 94,94 Z"
            fill="url(#cyanLightGrad)"
            stroke="#0891b2"
            strokeWidth="0.8"
          />
          {/* Tower Peaked Spire Gable */}
          <path
            d="M 94,16 L 72,38 L 94,48 L 116,38 Z"
            fill="#38bdf8"
            opacity="0.85"
          />

          {/* Architectural Chevrons (^) */}
          <path
            d="M 76,50 L 94,40 L 112,50"
            stroke="#041f2c"
            strokeWidth="2.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 76,61 L 94,51 L 112,61"
            stroke="#041f2c"
            strokeWidth="2.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Vertical Center Groove */}
          <line x1="94" y1="62" x2="94" y2="92" stroke="#041f2c" strokeWidth="2.2" />

          {/* 3. LEFT SKYSCRAPER WITH CUTOUT WINDOW (9-10 o'clock) */}
          <path
            d="M 50,70 L 70,54 L 70,126 L 50,112 Z"
            fill="url(#tealTowerGrad)"
            stroke="#22d3ee"
            strokeWidth="0.8"
          />
          {/* Rectangular Hollow Window Cutout */}
          <polygon
            points="56,76 64,70 64,112 56,106"
            fill="#031016"
            stroke="#06b6d4"
            strokeWidth="0.8"
          />

          {/* 4. BOTTOM-RIGHT ARCHITECTURAL BLOCK WITH DUAL ARCHES (4-5 o'clock) */}
          <path
            d="M 106,128 L 154,128 L 154,160 L 142,160 C 142,148 134,148 134,160 L 128,160 C 128,148 120,148 120,160 L 106,160 Z"
            fill="url(#cyanLightGrad)"
            stroke="#38bdf8"
            strokeWidth="1"
          />
          {/* Arch Rim Glows */}
          <path
            d="M 142,160 C 142,148 134,148 134,160"
            stroke="#cffafe"
            strokeWidth="1.8"
            fill="none"
          />
          <path
            d="M 128,160 C 128,148 120,148 120,160"
            stroke="#cffafe"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Bottom Left Wedge Foundation */}
          <polygon
            points="48,156 98,156 98,132"
            fill="#062231"
            stroke="#0e7490"
            strokeWidth="0.8"
          />

          {/* 5. HERO TWO-TONE 3D COMPASS NEEDLE & ARROW (DIAGONAL 45°) */}
          {/* A. Top-Right Metallic Copper Arrowhead (Pointing Northeast) */}
          <polygon
            points="100,100 126,74 172,46 154,92 100,100"
            fill="url(#copperLightGrad)"
          />
          <polygon
            points="100,100 154,92 172,46 158,36 126,74"
            fill="url(#copperDarkGrad)"
          />
          {/* Arrowhead Center Ridge Specular Highlight */}
          <line
            x1="100"
            y1="100"
            x2="172"
            y2="46"
            stroke="#fde8d9"
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* B. Bottom-Left Metallic Cyan Needle (Pointing Southwest) */}
          <polygon
            points="100,100 76,124 16,178 88,112 100,100"
            fill="url(#cyanLightGrad)"
          />
          <polygon
            points="100,100 88,112 16,178 100,100"
            fill="url(#cyanDarkGrad)"
          />
          {/* Cyan Needle Center Ridge */}
          <line
            x1="100"
            y1="100"
            x2="16"
            y2="178"
            stroke="#f0fdfa"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* C. Center Pivot Hole */}
          <circle cx="100" cy="100" r="7.5" fill="#02070b" stroke="url(#copperBevelGrad)" strokeWidth="1.6" />
          <circle cx="100" cy="100" r="3.8" fill="#010406" />
          <circle cx="98" cy="98" r="1.5" fill="#e0f2fe" opacity="0.8" />
        </svg>
      )}
    </div>
  );
};

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'vertical';
}

/**
 * Standard Logo Component:
 * Pairs the 100% round emblem mark with the "BUILDER AGENT" typography.
 * The emblem contains ONLY the mark (no duplicate text).
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
  layout = 'horizontal'
}) => {
  const textSizes = {
    sm: {
      builder: 'text-sm font-extrabold tracking-tight',
      agent: 'text-sm font-extrabold tracking-tight',
      tagline: 'text-[8px]'
    },
    md: {
      builder: 'text-lg font-black tracking-tight leading-none',
      agent: 'text-lg font-black tracking-tight leading-none',
      tagline: 'text-[9px]'
    },
    lg: {
      builder: 'text-2xl font-black tracking-tight leading-none',
      agent: 'text-2xl font-black tracking-tight leading-none',
      tagline: 'text-[11px]'
    },
    xl: {
      builder: 'text-4xl font-black tracking-tight leading-none',
      agent: 'text-4xl font-black tracking-tight leading-none',
      tagline: 'text-xs'
    }
  };

  return (
    <div
      className={`flex select-none ${
        layout === 'vertical' ? 'flex-col items-center text-center gap-2' : 'items-center gap-2.5 sm:gap-3'
      } ${className}`}
    >
      {/* 100% Round Emblem ONLY (No embedded text, perfectly circular) */}
      <LogoEmblem size={size} />

      {/* Brand Text: BUILDER AGENT */}
      {showText && (
        <div className="flex flex-col text-left min-w-0">
          <div className="flex items-center gap-1 sm:gap-1.5 tracking-tight">
            <span
              className={`bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-black tracking-wider uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${textSizes[size].builder}`}
            >
              Builder
            </span>
            <span
              className={`bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 bg-clip-text text-transparent font-black tracking-wider uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${textSizes[size].agent}`}
            >
              Agent
            </span>
          </div>
          <span
            className={`hidden sm:block font-semibold tracking-widest text-[#d99b73] uppercase mt-0.5 sm:mt-1 ${textSizes[size].tagline}`}
          >
            Websites &bull; 24/7 Intelligent Agents
          </span>
        </div>
      )}
    </div>
  );
};
