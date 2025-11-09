"use client";

// --- 1. Imports Added ---
import { useState, useEffect } from "react";

// --- SVG ICONS ---
const IconRun = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M13.5 4.06c0-1.12.91-2.04 2.04-2.04s2.04.91 2.04 2.04c0 1.12-.91 2.04-2.04 2.04-1.13 0-2.04-.91-2.04-2.04zM11.99 8.19c-1.6 0-2.99 1.2-3.26 2.76h-1.6c-.6 0-1.11.43-1.2 1.01l-.22 1.34c-.11.69.39 1.33 1.09 1.33h.01c.53 0 .98-.34 1.15-.85l.39-1.17c.1-.29.39-.5.7-.5h1.16v8.43c0 .55.45 1 1 1s1-.45 1-1V12.1c0-2.15-1.72-3.91-3.87-3.91zM7.13 14.71c.04-.21.21-.37.43-.37h.02c.28 0 .5.22.5.5v7.28c0 .55.45 1 1 1s1-.45 1-1V16.6c0-.55-.45-1-1-1h-.59c-1.1 0-2.04-.81-2.19-1.9L6 12.38c-.14-.73.4-1.38 1.14-1.38h.02c.6 0 1.12.42 1.2 1l.24 1.18c.05.25.17.47.33.66h.75c.31 0 .59.13.79.35l2.06 2.06c.27.27.63.42 1 .42h5.75c.55 0 1-.45 1-1s-.45-1-1-1h-5.28l-1.92-1.92c-.22-.22-.35-.51-.35-.83V10.2c0-1.71-1.39-3.1-3.1-3.1h-.01c-1.5 0-2.77 1.08-3.05 2.51l-.25 1.32C6.16 11.94 7 13.15 7.13 14.71z" />
  </svg>
);
const IconWeight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M6 5.5C6 4.67 6.67 4 7.5 4h1C9.33 4 10 4.67 10 5.5V18.5C10 19.33 9.33 20 8.5 20h-1C6.67 20 6 19.33 6 18.5V5.5zM14 5.5C14 4.67 14.67 4 15.5 4h1c.83 0 1.5.67 1.5 1.5V18.5c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5V5.5zM2 10.5C2 9.67 2.67 9 3.5 9h1C5.33 9 6 9.67 6 10.5v3C6 14.33 5.33 15 4.5 15h-1C2.67 15 2 14.33 2 13.5v-3zM18 10.5c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-1c-.83 0-1.5-.67-1.5-1.5v-3zM10 7.5c0-1.1-.9-2-2-2h-1c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2V7.5zM18 7.5c0-1.1-.9-2-2-2h-1c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2V7.5z" />
  </svg>
);
const IconCore = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 4c.94 0 1.79.39 2.4 1.01L12 7.41 9.6 5.01C10.21 4.39 11.06 4 12 4zm0 16c-4.41 0-8-3.59-8-8 0-1.57.46-3.03 1.25-4.29L12 14.12l6.75-6.41C19.54 8.97 20 10.43 20 12c0 4.41-3.59 8-8 8z" />
  </svg>
);
const IconBolt = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M7 2v11h3v9l7-12h-4l4-8H7z" />
  </svg>
);

// --- 2. COUNTDOWN COMPONENT & HELPERS ---

// Helper function to calculate time left
const calculateTimeLeft = (targetDate: string) => {
  //                                  ^
  //                                  |
  // --- FIX 1: Added 'string' type ---+

  const difference = +new Date(targetDate) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      expired: false,
    };
  } else {
    timeLeft = { expired: true };
  }
  return timeLeft;
};

// Helper function to add a leading zero (e.g., 9 -> 09)
const addLeadingZero = (value: number) => {
  //                               ^
  //                               |
  // --- FIX 2: Added 'number' type ---+

  return value.toString().padStart(2, "0");
};

// --- Define Props Type ---
type EventCountdownProps = {
  targetDate: string;
};

// --- UPDATED COMPONENT TO FIX HYDRATION ERROR ---
const EventCountdown = ({ targetDate }: EventCountdownProps) => {
  // 1. Initialize timeLeft with a static default state.
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  // 2. Add a new state to track if we are on the client.
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 3. This runs *only* on the client, after the initial render.

    // Set isClient to true, which triggers a re-render
    setIsClient(true);

    // Set the *initial* correct time
    setTimeLeft(calculateTimeLeft(targetDate));

    // Start the timer interval
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    // Clear the timer when the component is unmounted
    return () => clearInterval(timer);
  }, [targetDate]);

  // 4. This is the key:
  // On the server, OR on the client's very first render,
  // isClient will be 'false'. We render a static placeholder.
  // This ensures the server and client HTML match.
  if (!isClient) {
    // Render a static placeholder
    return <div className="eventBadge">Loading Timer...</div>;
  }

  // 5. After the component mounts, isClient is true,
  // and this logic will run.
  if (timeLeft.expired) {
    return <div className="eventBadge">Event Started!</div>;
  }

  // 6. Finally, render the live countdown
  return (
    <div className="countdownBadge">
      <div className="countdownBlock">
        <span className="countdownNumber">{timeLeft.days}</span>
        <span className="countdownLabel">Days</span>
      </div>
      <div className="countdownBlock">
        <span className="countdownNumber">{addLeadingZero(timeLeft.hours)}</span>
        <span className="countdownLabel">Hours</span>
      </div>
      <div className="countdownBlock">
        <span className="countdownNumber">{addLeadingZero(timeLeft.minutes)}</span>
        <span className="countdownLabel">Mins</span>
      </div>
      <div className="countdownBlock">
        <span className="countdownNumber">{addLeadingZero(timeLeft.seconds)}</span>
        <span className="countdownLabel">Secs</span>
      </div>
    </div>
  );
};
// --- END OF UPDATED COMPONENT ---

// Component to inject styles
const HeroStyles = () => (
  <style>
    {`
     /* =======================================
      * --- 1. HERO SECTION STYLES ---
      * ======================================= */
    .hero {
      background: #111827;
      color: #d1d5db;
      padding: 6rem 1.5rem; /* --- MODIFIED --- */
    }
    @media (min-width: 768px) {
      .hero {
        padding: 8rem 1.5rem;
      }
    }
    .heroContainer {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 2rem;
    }
    .heroHeadline {
      font-size: 3.75rem; /* --- MODIFIED --- */
      font-weight: 800;
      color: #f9fafb;
      line-height: 1.2;
    }
    .textOrange {
      color: #f97316;
    }
    .heroSubtitle {
      font-size: 1.25rem; /* --- MODIFIED --- */
      color: #d1d5db;
      max-width: 600px;
      margin-top: -1rem;
    }
    .eventBadge {
      background: #1f2937;
      color: #f9fafb;
      padding: 0.75rem 1.5rem;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 1rem;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
    
    /* --- 3. NEW STYLES ADDED --- */
    .countdownBadge {
      display: flex;
      gap: 1.25rem; /* Space between blocks */
      background: #1f2937;
      padding: 0.75rem 2rem;
      border-radius: 9999px;
      font-weight: 600;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      min-width: 300px; /* Give it some space */
      justify-content: center;
    }
    .countdownBlock {
      text-align: center;
      line-height: 1.2;
    }
    .countdownNumber {
      display: block;
      font-size: 1.75rem; /* Big numbers */
      font-weight: 700;
      color: #facc15; /* Yellow */
    }
    .countdownLabel {
      display: block;
      font-size: 0.75rem; /* Small text */
      text-transform: uppercase;
      color: #d1d5db;
      letter-spacing: 0.05em;
    }
    /* --- END OF NEW STYLES --- */

    .heroButtons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }
    .heroButtonPrimary {
      background: #facc15;
      color: #111827;
      padding: 0.75rem 2rem;
      border-radius: 6px;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: background-color 0.2s ease-in-out;
      border: 2px solid #facc15;
    }
    .heroButtonPrimary:hover {
      background: #fde047;
      border-color: #fde047;
    }
    .heroButtonSecondary {
      background: transparent;
      color: #facc15;
      padding: 0.75rem 2rem;
      border-radius: 6px;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      border: 2px solid #facc15;
      transition: all 0.2s ease-in-out;
    }
    .heroButtonSecondary:hover {
      background: #facc15;
      color: #111827;
    }
    .heroStats {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
    }
    .statBadge {
      background: #1f2937;
      color: #d1d5db;
      padding: 0.5rem 1.25rem;
      border-radius: 9999px;
      font-size: 0.9rem;
      font-weight: 500;
    }
    @media (max-width: 600px) {
      .heroHeadline {
        font-size: 2.75rem; /* --- MODIFIED --- */
      }
      .heroSubtitle {
        font-size: 1.125rem; /* --- MODIFIED --- */
      }
    }

    /* =======================================
     * --- 2. ABOUT SECTION STYLES ---
     * ======================================= */
    
    .aboutSection {
      width: 100%;
      padding: 4rem 1.5rem;
      background-color: #111827;
      color: #ffffff;
      transition: background-color 0.3s ease;
    }
    @media (min-width: 768px) {
      .aboutSection {
        padding: 6rem 1.5rem;
      }
    }
    .aboutContainer {
      max-width: 1024px;
      margin-left: auto;
      margin-right: auto;
    }

    /* --- MOTTO HEADER --- */
    .mottoHeader {
      text-align: center;
      margin-bottom: 4rem;
    }
    .mottoHeader blockquote {
      margin: 0;
      padding: 0;
    }
    .mottoHeader blockquote p {
      font-family: 'Georgia', 'Times New Roman', serif;
      font-size: 1.75rem; /* Sized for mobile */
      font-weight: 600;
      font-style: italic;
      color: #facc15;
      margin-bottom: 1rem;
    }
    @media (min-width: 768px) {
      .mottoHeader blockquote p {
        font-size: 3rem; /* Larger on desktop */
        white-space: nowrap; /* One line on desktop */
      }
    }
    .mottoHeader blockquote footer {
      font-size: 1.125rem;
      line-height: 1.6;
      color: #9ca3af;
      font-style: normal;
      max-width: 600px;
      margin: 0 auto;
    }

    /* --- 2-COLUMN GRID --- */
    .aboutTwoColGrid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    @media (min-width: 768px) {
      .aboutTwoColGrid {
        grid-template-columns: 1fr 1fr;
      }
    }

    /* --- CARD STYLES --- */
    .aboutCard {
      background-color: #111827; /* Darkest */
      padding: 2.5rem;
      border-radius: 0.75rem;
      border: 1px solid #374151;
    }
    .aboutCard h3 {
      font-size: 1.875rem;
      font-weight: 700;
      color: #facc15;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    .aboutCard p {
      font-size: 1rem;
      line-height: 1.6;
      color: #d1d5db;
    }
    
    /* --- ICON LIST --- */
    .aboutIconList {
      list-style: none;
      padding-left: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .aboutIconList li {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 1rem;
      color: #d1d5db;
    }
    .aboutIconList .icon {
      color: #facc15;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }


    /* =======================================
     * --- 3. FIGHT LEVEL SECTION STYLES ---
     * ======================================= */
    .fightLevelSection {
      width: 100%;
      padding: 4rem 0;
      background-color: #111827;
      color: #ffffff;
      transition: background-color 0.3s ease;
    }
    @media (min-width: 768px) {
      .fightLevelSection {
        padding: 6rem 0;
      }
    }
    .fightLevelContainer {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .fightLevelHeader {
      text-align: center;
      max-width: 56rem;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3rem;
    }
    @media (min-width: 768px) {
      .fightLevelHeader {
        margin-bottom: 4rem;
      }
    }
    .fightLevelHeader h2 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #facc15;
    }
    @media (min-width: 768px) {
      .fightLevelHeader h2 {
        font-size: 2.25rem;
      }
    }
    .fightLevelHeader p {
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: #9ca3af;
    }
    @media (min-width: 768px) {
      .fightLevelHeader p {
        font-size: 1.25rem;
      }
    }
    .fightLevelCardsGrid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
    @media (min-width: 768px) {
      .fightLevelCardsGrid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .fightLevelCard {
      background-color: #1f2937;
      border: 1px solid #374151;
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
    }
    .fightLevelCard:hover {
      transform: scale(1.05);
      border-color: #facc15;
    }
    .fightLevelCard h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #ffffff;
    }
    .fightLevelCard p {
      color: #d1d5db;
      margin-bottom: 1rem;
    }
    .fightLevelList {
      list-style-type: disc;
      list-style-position: inside;
      color: #9ca3af;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    /* =======================================
     * --- 4. HOME PAGE SECTIONS STYLES ---
     * ======================================= */
    .homeSection {
      width: 100%;
      padding: 4rem 1.5rem;
      background-color: #111827;
      color: #ffffff;
      transition: background-color 0.3s ease;
    }
    @media (min-width: 768px) {
      .homeSection {
        padding: 6rem 1.5rem;
      }
    }
    .homeContainer {
      max-width: 1280px;
      margin-left: auto;
      margin-right: auto;
    }
    .homeHeader {
      text-align: center;
      max-width: 56rem;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3rem;
    }
    @media (min-width: 768px) {
      .homeHeader {
        margin-bottom: 4rem;
      }
    }
    .homeHeader h2 {
      font-size: 1.875rem;
      font-weight: 700;
      margin-bottom: 1rem;
      color: #facc15;
    }
    @media (min-width: 768px) {
      .homeHeader h2 {
        font-size: 2.25rem;
      }
    }
    .homeHeader p {
      font-size: 1.125rem;
      line-height: 1.75rem;
      color: #9ca3af;
    }
    .homeGrid3Col {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
    @media (min-width: 768px) {
      .homeGrid3Col {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .homeCard {
      padding: 1.5rem;
      border-radius: 0.5rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background-color 0.3s ease;
      background-color: #1f2937;
      border: 1px solid #374151;
    }
    .homeCard:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
      border-color: #facc15;
    }
    .homeCard h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #ffffff;
    }
    .homeCard p {
      margin-bottom: 1.5rem;
      color: #9ca3af;
    }
    .homeButton {
      display: inline-block;
      padding: 0.5rem 1rem;
      border-radius: 0.375rem;
      font-weight: 500;
      text-decoration: none;
      transition: background-color 0.2s ease, color 0.2s ease;
      border: 1px solid #facc15;
      color: #facc15;
      background-color: transparent;
      cursor: pointer;
    }
    .homeButton:hover {
      background-color: #facc15;
      color: #111827;
    }
    .homeButtonPrimary {
      background-color: #facc15;
      color: #111827;
      border-color: #facc15;
    }
    .homeButtonPrimary:hover {
      background-color: #eab308;
      border-color: #eab308;
    }
    .raceFinderWrapper {
      max-width: 42rem;
      margin: auto;
    }
    .searchForm {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    @media (min-width: 768px) {
      .searchForm {
        flex-direction: row;
      }
    }
    .searchInput {
      flex-grow: 1;
      padding: 0.75rem 1rem;
      border: 1px solid #4b5563;
      border-radius: 0.375rem;
      font-size: 1rem;
      background-color: #374151;
      color: #ffffff;
    }
    .searchInput::placeholder {
      color: #9ca3af;
    }
    .searchInput:focus {
      outline: none;
      border-color: #facc15;
      box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.3);
    }
    .searchButton {
      padding: 0.75rem 1.5rem;
      font-weight: 600;
      border-radius: 0.375rem;
      background-color: #facc15;
      color: #111827;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s ease;
    }
    .searchButton:hover {
      background-color: #eab308;
    }
    .featuredEvent {
      background-color: #1f2937;
      border: 1px solid #374151;
      border-radius: 0.5rem;
      padding: 1.5rem;
      text-align: center;
      transition: background-color 0.3s ease, border-color 0.3s ease;
    }
    .featuredEvent h4 {
      font-size: 0.875rem;
      font-weight: 700;
      color: #facc15;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 0.5rem;
    }
    .featuredEvent h3 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #ffffff;
    }
    .featuredEvent p {
      color: #9ca3af;
      margin-bottom: 1.5rem;
    }

    /* =======================================
     * --- 5. STYLES FOR COLOR BLOCK ---
     * ======================================= */

    .section-lighter {
      background-color: #1f2937;
    }
    
    /* Inverted styles for cards */
    .section-lighter .aboutCard {
      background-color: #111827; /* Darkest */
      border-color: #374151;
    }
    
    .section-lighter .fightLevelCard,
    .section-lighter .homeCard {
      background-color: #111827;
      border-color: #374151;
    }

    /* --- FIX 3: Corrected CSS typo --- */
    .section-lighter .featuredEvent {
      background-color: #111827;
      border-color: #374151;
    }

    .section-lighter .fightLevelCard:hover,
    .section-lighter .homeCard:hover {
      border-color: #facc15;
    }
    `}
  </style>
);

// --- 4. CHANGES TO HeroSection ---
export default function HeroSection() {
  // --- Set the date for your next event here ---
  // (Set to December 25th, 2025 at 9:00 AM)
  const nextEventDate = "2025-12-25T09:00:00";

  return (
    <>
      {/* --- HERO SECTION (Dark) --- */}
      <section className="hero">
        <HeroStyles />
        <div className="heroContainer">
          <h1 className="heroHeadline">
            <span className="textOrange">CHALLENGE YOUR LIMITS,</span>
            <br />
            JOIN THE RACE!
          </h1>
          <p className="heroSubtitle">
            Indias most electrifying sporting events: test your strength, speed,
            and endurance.
          </p>

          {/* --- REPLACED BADGE WITH COUNTDOWN --- */}
          <EventCountdown targetDate={nextEventDate} />

          <div className="heroButtons">
            <a href="#find-my-race" className="heroButtonPrimary">
              Find My Race
            </a>
            <a href="#about" className="heroButtonSecondary">
              Learn More
            </a>
          </div>
          <div className="heroStats">
            <span className="statBadge">20+ Events</span>
            <span className="statBadge">10,000+ Athletes</span>
            <span className="statBadge">5 Cities</span>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: ABOUT (Light) --- */}
      <section id="about" className="aboutSection section-lighter">
        <div className="aboutContainer">
          {/* --- Row 1: Motto --- */}
          <div className="mottoHeader">
            <blockquote>
              <p>"Fight. Conquer. Repeat."</p>
              <footer>
                We believe fitness is about building character, resilience, and
                legacy.
              </footer>
            </blockquote>
          </div>

          {/* --- Row 2: Two Columns --- */}
          <div className="aboutTwoColGrid">
            {/* Column 1: Who We Are --- UPDATED CONTENT --- */}
            <div className="aboutCard">
              <h3>Our Mission</h3>
              <p>
                We are the standard for elite fitness in India. We build
                professional, high-stakes challenges designed to test your
                physical limits and forge a warrior spirit.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                Our events are more than a competition—they are a platform for
                personal transformation, camaraderie, and celebrating the
                pursuit of strength.
              </p>
            </div>

            {/* Column 2: What We Do */}
            <div className="aboutCard">
              <h3>The Challenge</h3>
              <ul className="aboutIconList">
                <li>
                  <span className="icon">
                    <IconRun />
                  </span>
                  <span>
                    <strong>Endurance:</strong> Run, row, and push past your
                    limits.
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <IconWeight />
                  </span>
                  <span>
                    <strong>Strength:</strong> Lift, carry, and pull heavy-duty
                    gear.
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <IconCore />
                  </span>
                  <span>
                    <strong>Core:</strong> Master stability and functional
                    control.
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <IconBolt />
                  </span>
                  <span>
                    <strong>Power:</strong> Explode with moves like wall-ball
                    slams.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: FIGHT LEVEL (Dark) --- */}
      <section id="fight-level" className="fightLevelSection">
        <div className="fightLevelContainer">
          <div className="fightLevelHeader">
            <h2>Find Your Fight Level</h2>
            <p>
              From Beginners who want to start strong to Pros looking for elite
              competition, FYTRR events offer multiple classes to suit your
              level.
            </p>
          </div>
          <div className="fightLevelCardsGrid">
            <div className="fightLevelCard">
              <h3>Beginner Class</h3>
              <p>
                Perfect for those new to the sport or with less than 1 year of
                training. Focus on fundamentals, safety, and gaining ring
                experience.
              </p>
              <ul className="fightLevelList">
                <li>Focus on fundamentals</li>
                <li>Safety-oriented rules</li>
                <li>No head contact (example)</li>
              </ul>
            </div>
            <div className="fightLevelCard">
              <h3>Amateur Class</h3>
              <p>
                For fighters with solid experience (1-3 years) looking to test
                their skills, compete for rankings, and advance their technique.
              </p>
              <ul className="fightLevelList">
                <li>Full contact rules</li>
                <li>Compete for rankings</li>
                <li>Advanced techniques</li>
              </ul>
            </div>
            <div className="fightLevelCard">
              <h3>Pro Class</h3>
              <p>
                The elite level. For seasoned, professional fighters competing
                for championship titles and major prize money.
              </p>
              <ul className="fightLevelList">
                <li>Elite-only competition</li>
                <li>Championship titles</li>
                <li>Major prize pools</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: FIND YOUR RACE (Light) --- */}
      <section id="find-my-race" className="homeSection section-lighter">
        <div className="homeContainer">
          <div className="homeHeader">
            <h2>Find Your Next Race</h2>
            <p>
              Explore upcoming events, register, and find your next thrilling
              FYTRR challenge.
            </p> 
            {/* --- FIX 4: Corrected HTML typo --- */}
          </div>
          <div className="raceFinderWrapper">
            <div className="searchForm">
              <input
                type="text"
                placeholder="Search by city (e.g., Ranchi, Delhi...)"
                className="searchInput"
              />
              <button className="searchButton">Find Events</button>
            </div>
            <div className="featuredEvent">
              <h4>Featured Event</h4>
              <h3>FYTRR Championship: Jharkhand</h3>
              <p>
                The state's biggest tournament is back. Registration is now open
                for all weight classes.
              </p>
              <a href="#register" className="homeButton homeButtonPrimary">
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: COMMUNITY (Dark) --- */}
      <section id="community" className="homeSection">
        <div className="homeContainer">
          <div className="homeHeader">
            <h2>Join The Community</h2>
            <p>
              Join our vibrant and supportive community across India and beyond.
              Share stories, training, and celebrate personal victories.
            </p>
          </div>
          <div className="homeGrid3Col">
            <div className="homeCard">
              <h3>Community Forums</h3>
              <p>
                Ask questions, share your training logs, and connect with
                fighters from your city.
              </p>
              <a href="#forums" className="homeButton">
                Join Discussion
              </a>
            </div>
            <div className="homeCard">
              <h3>Success Stories</h3>
              <p>
                Read inspiring stories from members who started just like you
                and achieved their goals.
              </p>
              <a href="#stories" className="homeButton">
                Read Stories
              </a>
            </div>
            <div className="homeCard">
              <h3>Local Meetups</h3>
              <p>
                Find and organize local training sessions, sparring groups, and
                social events.
              </p>
              <a href="#meetups" className="homeButton">
                Find Meetups
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}