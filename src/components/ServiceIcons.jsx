import React from 'react'

/**
 * OLED Black & Well-Defined Minimalist Luxury SVG Iconography
 * Built with pure OLED Black (#000000), crisp high-contrast geometry,
 * razor-sharp vector silhouettes, and precise negative-space cutouts.
 */

/* ==========================================================================
   SERVICES ICONS
   ========================================================================== */

export function ResidentialSalesIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Chimney */}
      <rect x="41" y="15" width="5" height="10" rx="0.5" fill="#000000" />
      <rect x="39.5" y="13.5" width="8" height="2.5" rx="0.75" fill="#000000" />

      {/* Main Roof Pitch */}
      <path
        d="M32 9L10 27H16L32 14.5L48 27H54L32 9Z"
        fill="#000000"
      />

      {/* Main House Body */}
      <path
        d="M15 26.5H49V53C49 53.5523 48.5523 54 48 54H16C15.4477 54 15 53.5523 15 53V26.5Z"
        fill="#000000"
      />

      {/* Negative Space Cutouts: Windows & Architectural Accents */}
      {/* Upper Floor Arched Feature Window */}
      <path
        d="M32 20C29.7909 20 28 21.7909 28 24V28H36V24C36 21.7909 34.2091 20 32 20Z"
        fill="#ffffff"
      />
      <line x1="32" y1="20" x2="32" y2="28" stroke="#000000" strokeWidth="1.2" />
      <line x1="28" y1="24.5" x2="36" y2="24.5" stroke="#000000" strokeWidth="1.2" />

      {/* Ground Floor Left Window (4-pane grid) */}
      <rect x="19" y="32" width="9" height="11" rx="1" fill="#ffffff" />
      <line x1="23.5" y1="32" x2="23.5" y2="43" stroke="#000000" strokeWidth="1.2" />
      <line x1="19" y1="37.5" x2="28" y2="37.5" stroke="#000000" strokeWidth="1.2" />

      {/* Ground Floor Right Window (4-pane grid) */}
      <rect x="36" y="32" width="9" height="11" rx="1" fill="#ffffff" />
      <line x1="40.5" y1="32" x2="40.5" y2="43" stroke="#000000" strokeWidth="1.2" />
      <line x1="36" y1="37.5" x2="45" y2="37.5" stroke="#000000" strokeWidth="1.2" />

      {/* Center Entrance Doorway */}
      <path
        d="M27.5 45H36.5V54H27.5V45Z"
        fill="#ffffff"
      />
      {/* Door Handle */}
      <circle cx="34.5" cy="49.5" r="0.9" fill="#000000" />

      {/* Base Foundation Plinth */}
      <rect x="12" y="54" width="40" height="2.5" rx="1" fill="#000000" />
    </svg>
  )
}

export function CommercialLettingsIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Rooftop Antenna Spire */}
      <line x1="33" y1="6" x2="33" y2="13" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <circle cx="33" cy="6" r="1.5" fill="#000000" />

      {/* Left Mid-Rise Tower */}
      <path
        d="M12 24L24 18V54H12V24Z"
        fill="#000000"
      />
      {/* Left Tower Window Cutouts */}
      <g fill="#ffffff">
        <rect x="14.5" y="25" width="3" height="4.5" rx="0.5" />
        <rect x="19" y="25" width="3" height="4.5" rx="0.5" />
        <rect x="14.5" y="32" width="3" height="4.5" rx="0.5" />
        <rect x="19" y="32" width="3" height="4.5" rx="0.5" />
        <rect x="14.5" y="39" width="3" height="4.5" rx="0.5" />
        <rect x="19" y="39" width="3" height="4.5" rx="0.5" />
        <rect x="14.5" y="46" width="3" height="4.5" rx="0.5" />
        <rect x="19" y="46" width="3" height="4.5" rx="0.5" />
      </g>

      {/* Center High-Rise Skyscraper */}
      <path
        d="M24 13L42 9V54H24V13Z"
        fill="#000000"
      />

      {/* Right Tower Perspective Facet */}
      <path
        d="M42 9L50 14V54H42V9Z"
        fill="#000000"
        opacity="0.85"
      />

      {/* Main Tower Window Cutouts (3 columns x 6 rows) */}
      <g fill="#ffffff">
        <rect x="27" y="15" width="3.2" height="3.5" rx="0.5" />
        <rect x="32" y="15" width="3.2" height="3.5" rx="0.5" />
        <rect x="37" y="15" width="3.2" height="3.5" rx="0.5" />

        <rect x="27" y="21" width="3.2" height="3.5" rx="0.5" />
        <rect x="32" y="21" width="3.2" height="3.5" rx="0.5" />
        <rect x="37" y="21" width="3.2" height="3.5" rx="0.5" />

        <rect x="27" y="27" width="3.2" height="3.5" rx="0.5" />
        <rect x="32" y="27" width="3.2" height="3.5" rx="0.5" />
        <rect x="37" y="27" width="3.2" height="3.5" rx="0.5" />

        <rect x="27" y="33" width="3.2" height="3.5" rx="0.5" />
        <rect x="32" y="33" width="3.2" height="3.5" rx="0.5" />
        <rect x="37" y="33" width="3.2" height="3.5" rx="0.5" />

        <rect x="27" y="39" width="3.2" height="3.5" rx="0.5" />
        <rect x="32" y="39" width="3.2" height="3.5" rx="0.5" />
        <rect x="37" y="39" width="3.2" height="3.5" rx="0.5" />

        <rect x="27" y="45" width="3.2" height="3.5" rx="0.5" />
        <rect x="32" y="45" width="3.2" height="3.5" rx="0.5" />
        <rect x="37" y="45" width="3.2" height="3.5" rx="0.5" />
      </g>

      {/* Right Facet Window Strips */}
      <g fill="#ffffff" opacity="0.65">
        <rect x="44" y="17" width="4" height="2" rx="0.3" />
        <rect x="44" y="23" width="4" height="2" rx="0.3" />
        <rect x="44" y="29" width="4" height="2" rx="0.3" />
        <rect x="44" y="35" width="4" height="2" rx="0.3" />
        <rect x="44" y="41" width="4" height="2" rx="0.3" />
        <rect x="44" y="47" width="4" height="2" rx="0.3" />
      </g>

      {/* Main Ground Lobby Entrance */}
      <rect x="29" y="50" width="8" height="4" fill="#ffffff" />
      <line x1="33" y1="50" x2="33" y2="54" stroke="#000000" strokeWidth="1" />

      {/* Street Level Foundation */}
      <rect x="9" y="54" width="44" height="2.5" rx="1" fill="#000000" />
    </svg>
  )
}

export function PropertyManagementIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Key Ring in OLED Black */}
      <circle cx="27" cy="22" r="7" stroke="#000000" strokeWidth="2.5" />

      {/* Leather Property Shield Fob in OLED Black */}
      <path
        d="M17 29C17 26.5 19 24.5 21.5 24.5H27C29.5 24.5 31.5 26.5 31.5 29V42C31.5 45.5 24.25 51 24.25 51C24.25 51 17 45.5 17 42V29Z"
        fill="#000000"
      />
      {/* Negative Space House Silhouette on Fob */}
      <path
        d="M24.25 32L19.5 36.5H21.5V43H27V36.5H29L24.25 32Z"
        fill="#ffffff"
      />

      {/* Master Golden Key (OLED Black Precision Cut) */}
      <g transform="rotate(45 32 32)">
        {/* Key Bow Head */}
        <circle cx="21" cy="32" r="9" fill="#000000" />
        {/* Negative Space Inner Head Cutout */}
        <circle cx="21" cy="32" r="5" fill="#ffffff" />
        <circle cx="21" cy="32" r="2.5" fill="#000000" />

        {/* Key Shaft */}
        <rect x="29" y="30.2" width="22" height="3.6" rx="1" fill="#000000" />

        {/* Defined Key Notches / Teeth */}
        <path
          d="M42 33.8V39.5H45.5V33.8H42Z"
          fill="#000000"
        />
        <path
          d="M46.5 33.8V38H49.5V33.8H46.5Z"
          fill="#000000"
        />
        <path
          d="M37.5 33.8V36.8H40.5V33.8H37.5Z"
          fill="#000000"
        />
      </g>

      {/* Precision Star Accent */}
      <path
        d="M48 15L49.5 18.5L53 20L49.5 21.5L48 25L46.5 21.5L43 20L46.5 18.5L48 15Z"
        fill="#000000"
      />
    </svg>
  )
}

export function InvestmentAdvisoryIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Background Coordinate Axes */}
      <line x1="12" y1="52" x2="52" y2="52" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="14" x2="12" y2="52" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

      {/* Axis Guide Dots */}
      <circle cx="12" cy="22" r="1.2" fill="#000000" />
      <circle cx="12" cy="32" r="1.2" fill="#000000" />
      <circle cx="12" cy="42" r="1.2" fill="#000000" />

      {/* Bar 1 (Height: 12) */}
      <rect x="17" y="39" width="6.5" height="13" rx="1.5" fill="#000000" />
      {/* Inner Accent Line */}
      <line x1="20.25" y1="41" x2="20.25" y2="50" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />

      {/* Bar 2 (Height: 20) */}
      <rect x="26.5" y="31" width="6.5" height="21" rx="1.5" fill="#000000" />
      <line x1="29.75" y1="33" x2="29.75" y2="50" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />

      {/* Bar 3 (Height: 28) */}
      <rect x="36" y="23" width="6.5" height="29" rx="1.5" fill="#000000" />
      <line x1="39.25" y1="25" x2="39.25" y2="50" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />

      {/* Bar 4 (Peak Height: 36) */}
      <rect x="45.5" y="15" width="6.5" height="37" rx="1.5" fill="#000000" />
      <line x1="48.75" y1="17" x2="48.75" y2="50" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />

      {/* Ascending Trend Breakout Arrow */}
      <path
        d="M16 38L27 28L36 32L48 14"
        stroke="#000000"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* White high-contrast inline for trend path */}
      <path
        d="M16 38L27 28L36 32L48 14"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Trend Arrowhead */}
      <polygon points="52,13 44,14 48,19" fill="#000000" />

      {/* Nigerian Naira / Wealth Coin at base */}
      <circle cx="20" cy="46" r="4.5" fill="#000000" stroke="#ffffff" strokeWidth="1.2" />
      <text x="18" y="48.5" fontSize="5.5" fontWeight="900" fill="#ffffff" fontFamily="sans-serif">₦</text>
    </svg>
  )
}

export function PropertyValuationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Heavy-Duty Metal Clamp at top */}
      <path
        d="M24 10H40V16C40 17 39 18 38 18H26C25 18 24 17 24 16V10Z"
        fill="#000000"
      />
      <circle cx="32" cy="14" r="2" fill="#ffffff" />

      {/* Clipboard Main Body in OLED Black */}
      <rect x="15" y="13" width="34" height="42" rx="3.5" fill="#000000" />

      {/* Inner White Paper Document */}
      <rect x="18" y="17" width="28" height="35" rx="2" fill="#ffffff" />

      {/* Document Header Bar */}
      <rect x="22" y="22" width="16" height="2.8" rx="1.2" fill="#000000" />
      <rect x="22" y="26.5" width="9" height="1.8" rx="0.9" fill="#000000" opacity="0.6" />

      {/* Valuation Checklist Items */}
      {/* Line 1 with Checkmark */}
      <circle cx="23.5" cy="32" r="2" fill="#000000" />
      <path d="M22.3 32L23.2 32.9L24.8 31.2" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="27.5" y1="32" x2="39" y2="32" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />

      {/* Line 2 with Checkmark */}
      <circle cx="23.5" cy="37.5" r="2" fill="#000000" />
      <path d="M22.3 37.5L23.2 38.4L24.8 36.7" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="27.5" y1="37.5" x2="35" y2="37.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />

      {/* Line 3 with Checkmark */}
      <circle cx="23.5" cy="43" r="2" fill="#000000" />
      <path d="M22.3 43L23.2 43.9L24.8 42.2" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="27.5" y1="43" x2="33" y2="43" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />

      {/* Certified Gold/OLED Rosette Seal in lower right */}
      <g transform="translate(34, 35)">
        {/* Ribbon Tails */}
        <path d="M4 11L7 17L9 12L11 17L14 11" fill="#000000" />
        {/* Circular Stamp */}
        <circle cx="9" cy="8.5" r="6" fill="#000000" />
        <circle cx="9" cy="8.5" r="4.5" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="1.2 1.2" fill="none" />
        {/* Certified Checkmark */}
        <path d="M6.8 8.5L8.3 10L11.5 7" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export function LegalDocumentationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Title Deed Document in OLED Black */}
      <rect x="14" y="14" width="32" height="40" rx="2.5" fill="#000000" />

      {/* Inner White Parchment Sheet */}
      <rect x="16.5" y="16.5" width="27" height="35" rx="1.5" fill="#ffffff" />

      {/* Top & Bottom Scroll Curl Lines */}
      <line x1="18" y1="19" x2="42" y2="19" stroke="#000000" strokeWidth="1" strokeLinecap="round" />
      <line x1="18" y1="49" x2="42" y2="49" stroke="#000000" strokeWidth="1" strokeLinecap="round" />

      {/* Legal Header Block */}
      <rect x="21" y="22" width="18" height="2.5" rx="1.2" fill="#000000" />

      {/* Legal Clauses Lines */}
      <line x1="20" y1="28" x2="39" y2="28" stroke="#000000" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="20" y1="32" x2="37" y2="32" stroke="#000000" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="20" y1="36" x2="38" y2="36" stroke="#000000" strokeWidth="1.4" strokeLinecap="round" />
      <line x1="20" y1="40" x2="31" y2="40" stroke="#000000" strokeWidth="1.4" strokeLinecap="round" />

      {/* Signature Script Line */}
      <path
        d="M20 45C22 43 23.5 46.5 25 44C26.5 42.5 28 45.5 30 44"
        stroke="#000000"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Legal Notary Wax Seal with Ribbons */}
      <path d="M37 43L35 50L38 48L40 50L39 44" fill="#000000" />
      <circle cx="39" cy="42" r="5" fill="#000000" />
      <circle cx="39" cy="42" r="3.6" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="1 1.2" fill="none" />
      <polygon points="37.5,41.5 39,40 40.5,41.5 40,43 38,43" fill="#ffffff" />

      {/* Precision Executive Fountain Pen resting diagonally */}
      <g transform="rotate(-30 46 26)">
        {/* Pen Barrel */}
        <rect x="42" y="9" width="4.5" height="27" rx="1.5" fill="#000000" stroke="#ffffff" strokeWidth="0.8" />
        {/* White Trim Ring */}
        <rect x="42" y="24" width="4.5" height="1.6" fill="#ffffff" />
        {/* Pen Nib in OLED Black */}
        <path d="M42 36L44.25 43.5L46.5 36H42Z" fill="#000000" stroke="#ffffff" strokeWidth="0.8" />
        <line x1="44.25" y1="36" x2="44.25" y2="41" stroke="#ffffff" strokeWidth="0.7" />
        {/* Pocket Clip */}
        <rect x="40.8" y="11" width="1.2" height="11" rx="0.6" fill="#ffffff" />
      </g>
    </svg>
  )
}

/* ==========================================================================
   ABOUT PAGE ICONS (Mission, Vision, Objectives & Core Values)
   ========================================================================== */

/** Mission Icon: Precision OLED Bullseye Target with Arrow */
export function MissionIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Outer Ring */}
      <circle cx="32" cy="32" r="23" stroke="#000000" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="19" fill="#000000" />
      {/* Middle Ring Negative Space */}
      <circle cx="32" cy="32" r="14.5" fill="#ffffff" />
      {/* Inner Ring */}
      <circle cx="32" cy="32" r="10" fill="#000000" />
      {/* Bullseye Center Negative Space */}
      <circle cx="32" cy="32" r="5" fill="#ffffff" />
      <circle cx="32" cy="32" r="2.5" fill="#000000" />

      {/* Precision Crosshair Ticks */}
      <line x1="32" y1="5" x2="32" y2="10" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="32" y1="54" x2="32" y2="59" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="5" y1="32" x2="10" y2="32" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="54" y1="32" x2="59" y2="32" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

      {/* Dynamic Bullseye Arrow piercing from upper right */}
      <line x1="32" y1="32" x2="53" y2="11" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      <line x1="32" y1="32" x2="53" y2="11" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
      {/* Arrow Fletching */}
      <path d="M49 9L55 15M46 12L52 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

/** Vision Icon: Precision OLED Astronomical Telescope on Tripod */
export function VisionIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Telescope Barrel angled upwards 35 degrees */}
      <g transform="rotate(-35 30 28)">
        {/* Dew Shield / Large Objective Lens */}
        <rect x="8" y="24" width="8" height="12" rx="2" fill="#000000" />
        <rect x="7" y="25" width="2" height="10" rx="1" fill="#000000" />
        {/* Main Optical Tube */}
        <rect x="16" y="25" width="26" height="10" rx="1.5" fill="#000000" />
        {/* High contrast trim ring */}
        <rect x="28" y="25" width="2.5" height="10" fill="#ffffff" />
        {/* Eyepiece / Focuser Drawtube */}
        <rect x="42" y="27" width="8" height="6" rx="1" fill="#000000" />
        {/* Finder Scope on top */}
        <rect x="20" y="20.5" width="14" height="3" rx="0.75" fill="#000000" />
        <line x1="24" y1="23.5" x2="24" y2="25" stroke="#000000" strokeWidth="1.5" />
        <line x1="30" y1="23.5" x2="30" y2="25" stroke="#000000" strokeWidth="1.5" />
      </g>

      {/* Alt-Azimuth Mount / Swivel Joint */}
      <circle cx="31" cy="35" r="4.5" fill="#000000" />
      <circle cx="31" cy="35" r="2" fill="#ffffff" />

      {/* Heavy-Duty Tripod Legs */}
      {/* Center Leg */}
      <line x1="31" y1="38" x2="31" y2="56" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      {/* Left Leg */}
      <line x1="29" y1="38" x2="16" y2="56" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right Leg */}
      <line x1="33" y1="38" x2="46" y2="56" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

      {/* Tripod Spreader / Stabilizer Struts */}
      <line x1="21" y1="48" x2="41" y2="48" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />

      {/* Guiding Constellation Stars in sky */}
      <path d="M14 12L15 15L18 16L15 17L14 20L13 17L10 16L13 15L14 12Z" fill="#000000" />
      <circle cx="25" cy="11" r="1.5" fill="#000000" />
    </svg>
  )
}

/** Objectives Icon: Heavy-Duty OLED Clipboard with Verification Checks */
export function ObjectivesIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Top Clip Mechanism */}
      <path
        d="M23 9H41V15C41 16.1 40.1 17 39 17H25C23.9 17 23 16.1 23 15V9Z"
        fill="#000000"
      />
      <circle cx="32" cy="13" r="2.2" fill="#ffffff" />

      {/* Clipboard Frame */}
      <rect x="14" y="12" width="36" height="44" rx="4" fill="#000000" />

      {/* Document Sheet */}
      <rect x="17.5" y="16.5" width="29" height="36" rx="2" fill="#ffffff" />

      {/* Header Accent Bar */}
      <rect x="22" y="22" width="16" height="3" rx="1.5" fill="#000000" />

      {/* Task 1: Checkbox & Verified Mark */}
      <rect x="21" y="29" width="6" height="6" rx="1.5" fill="#000000" />
      <path d="M22.5 32L24 33.5L26 30.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="30" y1="32" x2="42" y2="32" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

      {/* Task 2: Checkbox & Verified Mark */}
      <rect x="21" y="37" width="6" height="6" rx="1.5" fill="#000000" />
      <path d="M22.5 40L24 41.5L26 38.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="30" y1="40" x2="39" y2="40" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

      {/* Task 3: Checkbox & Verified Mark */}
      <rect x="21" y="45" width="6" height="6" rx="1.5" fill="#000000" />
      <path d="M22.5 48L24 49.5L26 46.5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="30" y1="48" x2="37" y2="48" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

/** Core Value Icon: Integrity (Precision Handshake & Shield) */
export function IntegrityIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Heraldic Shield Silhouette */}
      <path
        d="M32 9L15 16V32C15 43.5 22.5 53 32 56C41.5 53 49 43.5 49 32V16L32 9Z"
        fill="#000000"
      />
      {/* Inner White Contour */}
      <path
        d="M32 12.5L18 18.5V32C18 41.5 24.2 49.5 32 52.2C39.8 49.5 46 41.5 46 32V18.5L32 12.5Z"
        fill="#ffffff"
      />

      {/* Handshake Silhouette inside Shield */}
      {/* Left Hand & Cuff */}
      <path
        d="M20 31L25 26L29 30L26 34L20 34V31Z"
        fill="#000000"
      />
      {/* Right Hand & Cuff */}
      <path
        d="M44 31L39 26L35 30L38 34L44 34V31Z"
        fill="#000000"
      />
      {/* Clasping Fingers */}
      <path
        d="M26 30L32 36L38 30L35 27L32 30L29 27L26 30Z"
        fill="#000000"
      />
      <circle cx="32" cy="42" r="3" fill="#000000" />
    </svg>
  )
}

/** Core Value Icon: Excellence (Prestige Star Trophy Medal) */
export function ExcellenceIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Hanging Ribbons */}
      <path d="M22 10L30 30H34L42 10H34L32 18L30 10H22Z" fill="#000000" />
      <path d="M24 10L31 28H33L40 10H35L32 17L29 10H24Z" fill="#ffffff" />

      {/* Prestige Medallion Circle */}
      <circle cx="32" cy="38" r="16" fill="#000000" />
      <circle cx="32" cy="38" r="13" fill="#ffffff" />
      <circle cx="32" cy="38" r="11.5" stroke="#000000" strokeWidth="1" strokeDasharray="1.5 1.5" fill="none" />

      {/* 5-Point Precision Star inside Medal */}
      <polygon
        points="32,29 34.5,35 41,35.5 36,39.5 38,46 32,42 26,46 28,39.5 23,35.5 29.5,35"
        fill="#000000"
      />
    </svg>
  )
}

/** Core Value Icon: Innovation (Idea Lightbulb with Circuit Tech Filaments) */
export function InnovationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Radial Energy Rays */}
      <line x1="32" y1="7" x2="32" y2="12" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="15" y1="17" x2="19" y2="20" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="49" y1="17" x2="45" y2="20" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="9" y1="32" x2="14" y2="32" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="55" y1="32" x2="50" y2="32" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

      {/* Glass Bulb Contour */}
      <path
        d="M32 14C23.2 14 16 21.2 16 30C16 35.5 19 40 22.5 43.5V47C22.5 48 23.5 49 24.5 49H39.5C40.5 49 41.5 48 41.5 47V43.5C45 40 48 35.5 48 30C48 21.2 40.8 14 32 14Z"
        fill="#000000"
      />

      {/* Filament Cutout */}
      <path
        d="M28 34L32 23L36 34"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="23" r="2" fill="#ffffff" />
      <line x1="27" y1="34" x2="37" y2="34" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

      {/* Screw Base & Contact Point */}
      <rect x="25" y="51" width="14" height="2.5" rx="1" fill="#000000" />
      <rect x="27" y="54.5" width="10" height="2.5" rx="1.2" fill="#000000" />
    </svg>
  )
}

/** Core Value Icon: Community (Global Network & Hands/People) */
export function CommunityIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="service-icon-svg" aria-hidden="true">
      {/* Globe Circle Outline */}
      <circle cx="32" cy="32" r="22" stroke="#000000" strokeWidth="2.5" />

      {/* Equator & Meridian Latitude/Longitude Lines */}
      <line x1="10" y1="32" x2="54" y2="32" stroke="#000000" strokeWidth="2" />
      <ellipse cx="32" cy="32" rx="12" ry="22" stroke="#000000" strokeWidth="2" />

      {/* Community Members Silhouettes in Foreground */}
      {/* Center Figure */}
      <circle cx="32" cy="24" r="4" fill="#000000" stroke="#ffffff" strokeWidth="1.5" />
      <path d="M25 36C25 32 28 31 32 31C36 31 39 32 39 36V38H25V36Z" fill="#000000" stroke="#ffffff" strokeWidth="1.5" />

      {/* Left Figure */}
      <circle cx="21" cy="27" r="3" fill="#000000" stroke="#ffffff" strokeWidth="1.2" />
      <path d="M16 38C16 35 18 34 21 34C24 34 26 35 26 38V39H16V38Z" fill="#000000" stroke="#ffffff" strokeWidth="1.2" />

      {/* Right Figure */}
      <circle cx="43" cy="27" r="3" fill="#000000" stroke="#ffffff" strokeWidth="1.2" />
      <path d="M38 38C38 35 40 34 43 34C46 34 48 35 48 38V39H38V38Z" fill="#000000" stroke="#ffffff" strokeWidth="1.2" />
    </svg>
  )
}
