"use client";
import Image from "next/image";

const HeaderStyles = () => (
  <style>
    {`
    .header {
      background: #111827;
      color: #d1d5db;
      padding: 1rem 1.5rem;
      border-top: 3px solid #facc15;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .headerContainer {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .headerLogo {
      color: #ffffff;
      font-weight: 700;
      font-size: 1.75rem;
      letter-spacing: 0.04em;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    /* --- THIS IS THE NEW CLASS --- */
    .headerLogoImage {
      transform: scale(2.5); /* Makes the image 50% larger */
      transition: transform 0.2s ease-in-out;
    }
    
    .headerNav {
      display: flex;
      gap: 1rem;
    }

  .headerButton {
  background: #facc15;
  color: #111827;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  display: inline-block;
  text-align: center;
  text-transform: uppercase; /* <-- ADD THIS LINE */
}

    .headerButton:hover {
      background: #fde047;
    }

    @media (max-width: 600px) {
      .headerContainer {
        flex-direction: column;
        gap: 1rem;
      }
      .headerNav {
        width: 100%;
        justify-content: stretch;
        gap: 0.5rem;
      }
      .headerButton {
        flex-grow: 1;
      }
    }
    `}
  </style>
);

export default function Header() {
  return (
    <header className="header">
      <HeaderStyles />
      <div className="headerContainer">
        <a href="/" className="headerLogo">
          <Image
            src="/log.png"
            alt="FYTRR Logo"
            width={40} /* <-- This stays 40 to keep header size */
            height={40} /* <-- This stays 40 to keep header size */
            className="headerLogoImage" /* --- THIS CLASS IS APPLIED --- */
          />
          FYTRR
        </a>
        <nav className="headerNav">
          <a href="/shop" className="headerButton">
            Shop
          </a>
          <a href="/partnership" className="headerButton">
            Partnership
          </a>
        </nav>
      </div>
    </header>
  );
}
