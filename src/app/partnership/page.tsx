"use client";

// Component to inject styles
const PartnershipStyles = () => (
  <style>
    {`
    /* --- BASE STYLES --- */
    .pageSection {
      width: 100%;
      /* --- Padding fix from before --- */
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      
      transition: background-color 0.3s ease;
      background-color: #111827;
      color: #ffffff;
    }
    
    .pageSection-first {
      padding-top: 4rem;
    }

    @media (min-width: 768px) {
      .pageSection {
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      .pageSection-first {
        padding-top: 6rem; /* Keep large top padding */
      }
    }
    
    /* --- RENAMED THIS CLASS --- */
    .contentWrapper {
      max-width: 1024px;
      margin-left: auto;
      margin-right: auto;
    }
    .pageHeader {
      text-align: center;
      max-width: 56rem;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3rem;
    }
    .pageHeader h1 {
      font-size: 2.25rem; font-weight: 700; color: #facc15;
    }
    .pageHeader h2 {
      font-size: 1.875rem; font-weight: 700; color: #facc15; margin-bottom: 1rem;
    }
    @media (min-width: 768px) {
      .pageHeader h1 { font-size: 3rem; }
      .pageHeader h2 { font-size: 2.25rem; }
    }
    .pageHeader p {
      font-size: 1.125rem; line-height: 1.75rem; color: #9ca3af;
    }
    
    /* --- RE-USED CARD STYLES --- */
    .infoCard {
      background-color: #1f2937;
      border: 1px solid #374151;
      padding: 2.5rem;
      border-radius: 0.75rem;
    }
    .infoCard h3 {
      font-size: 1.875rem;
      font-weight: 700;
      color: #facc15;
      margin-bottom: 1.5rem;
      text-align: center;
    }
    .infoCard p {
      font-size: 1rem;
      line-height: 1.6;
      color: #d1d5db;
    }

    /* --- 3-COLUMN GRID --- */
    .threeColGrid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 2rem;
    }
    @media (min-width: 768px) {
      .threeColGrid {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .partnerCard {
      background-color: #1f2937;
      border: 1px solid #374151;
      padding: 1.5rem;
      border-radius: 0.5rem;
      transition: transform 0.3s ease, border-color 0.3s ease;
    }
    .partnerCard:hover {
      transform: scale(1.05);
      border-color: #facc15;
    }
    .partnerCard h3 {
      font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; color: #ffffff;
    }
    .partnerCard p {
      color: #d1d5db; margin-bottom: 1rem;
    }

    /* --- FORM STYLES --- */
    .formWrapper {
      max-width: 768px;
      margin: 0 auto;
      background-color: #1f2937;
      border: 1px solid #374151;
      padding: 2.5rem;
      border-radius: 0.75rem;
    }
    .formGrid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    @media (min-width: 768px) {
      .formGrid {
        grid-template-columns: 1fr 1fr;
      }
      .formGrid .col-span-2 {
        grid-column: span 2 / span 2;
      }
    }
    .formGroup {
      display: flex;
      flex-direction: column;
    }
    .formLabel {
      font-size: 0.875rem;
      font-weight: 500;
      color: #d1d5db;
      margin-bottom: 0.5rem;
    }
    .formInput, .formTextarea {
      flex-grow: 1;
      padding: 0.75rem 1rem;
      border: 1px solid #4b5563;
      border-radius: 0.375rem;
      font-size: 1rem;
      background-color: #374151;
      color: #ffffff;
    }
    .formInput:focus, .formTextarea:focus {
      outline: none;
      border-color: #facc15;
      box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.3);
    }
    .formTextarea {
      min-height: 120px;
    }
    .formButton {
      padding: 0.75rem 2rem;
      border-radius: 6px;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      background: #facc15;
      color: #111827;
      border: 2px solid #facc15;
      transition: all 0.2s ease-in-out;
    }
    .formButton:hover {
      background: #fde047;
      border-color: #fde047;
    }
    `}
  </style>
);

export default function PartnershipPage() {
  return (
    <>
      <PartnershipStyles />

      {/* --- HERO SECTION (Dark) --- */}
      <section className="pageSection pageSection-first">
        {/* --- RENAMED THIS DIV --- */}
        <div className="contentWrapper">
          <div className="pageHeader">
            <h1>Partner With Us</h1>
            <p>
              Join the FYTRR movement and connect with India's most passionate
              fitness community.
            </p>
          </div>
        </div>
      </section>

      {/* --- WHY PARTNER? (Dark) --- */}
      <section className="pageSection">
        {/* --- RENAMED THIS DIV --- */}
        <div className="contentWrapper">
          <div className="infoCard">
            <h3>Why Partner With FYTRR?</h3>
            <p>
              Partnering with FYTRR places your brand at the heart of India's
              fastest-growing fitness revolution. You gain direct access to a
              dedicated audience of athletes, enthusiasts, and high-performance
              individuals who are passionate about quality and excellence.
            </p>
            <p style={{ marginTop: "1.5rem" }}>
              We offer unparalleled brand exposure, on-site activation
              opportunities, and digital integration to a community that shares
              our core values of strength, discipline, and endurance.
            </p>
          </div>
        </div>
      </section>

      {/* --- WHO WE LOOK FOR (Dark) --- */}
      <section className="pageSection">
        {/* --- RENAMED THIS DIV --- */}
        <div className="contentWrapper">
          <div className="pageHeader">
            <h2>Who We're Looking For</h2>
          </div>
          <div className="threeColGrid">
            <div className="partnerCard">
              <h3>Corporate Sponsors</h3>
              <p>
                Align your brand with excellence. We offer high-visibility
                packages for companies in tech, nutrition, apparel, and more.
              </p>
            </div>
            <div className="partnerCard">
              <h3>Gym Affiliates</h3>
              <p>
                Become an official FYTRR training ground. Get your gym listed as
                a prep center and host local qualification events.
              </p>
            </div>
            <div className="partnerCard">
              <h3>Event Vendors</h3>
              <p>
                Bring your product to our athletes. We are always looking for
                high-quality food, beverage, and gear vendors for event day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- GET IN TOUCH (Dark) --- */}
      <section className="pageSection">
        {/* --- RENAMED THIS DIV --- */}
        <div className="contentWrapper">
          <div className="pageHeader">
            <h2>Get In Touch</h2>
            <p>
              Have an idea for a partnership? Fill out the form below and our
              team will get back to you.
            </p>
          </div>
          <div className="formWrapper">
            <form>
              <div className="formGrid">
                <div className="formGroup">
                  <label htmlFor="name" className="formLabel">
                    Full Name
                  </label>
                  <input type="text" id="name" className="formInput" />
                </div>
                <div className="formGroup">
                  <label htmlFor="company" className="formLabel">
                    Company Name
                  </label>
                  <input type="text" id="company" className="formInput" />
                </div>
                <div className="formGroup">
                  <label htmlFor="email" className="formLabel">
                    Email Address
                  </label>
                  <input type="email" id="email" className="formInput" />
                </div>
                <div className="formGroup">
                  <label htmlFor="partnership_type" className="formLabel">
                    Partnership Type
                  </label>
                  <input
                    type="text"
                    id="partnership_type"
                    className="formInput"
                    placeholder="e.g., Sponsor, Gym, Vendor"
                  />
                </div>
                <div className="formGroup col-span-2">
                  <label htmlFor="message" className="formLabel">
                    Your Message
                  </label>
                  <textarea id="message" className="formTextarea"></textarea>
                </div>
                <div
                  className="formGroup col-span-2"
                  style={{ alignItems: "center" }}
                >
                  <button type="submit" className="formButton">
                    Submit Proposal
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
