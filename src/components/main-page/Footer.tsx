"use client";

// Simple SVG icons for self-contained component
const IconFacebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
  </svg>
);

const IconTwitter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.429.734-.666 1.581-.666 2.477 0 1.61.812 3.028 2.047 3.841-.756-.023-1.467-.23-2.09-.577v.073c0 2.248 1.593 4.125 3.7 4.56-.389.106-.8.163-1.226.163-.3,0-.59-.028-.875-.083.586 1.841 2.283 3.182 4.311 3.22-.79.62-1.79 1-2.87 1-.18,0-.37-.01-.55-.03.98.63 2.14 1 3.42 1 4.1,0 6.35-3.4 6.35-6.35 0-.09 0-.19-.01-.28.43-.31.81-.7 1.11-1.15z" />
  </svg>
);

const IconInstagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.172.053 1.963.22 2.625.468.67.247 1.175.59 1.7.114.527.527.87 1.03 1.117 1.7.247.66.415 1.45.468 2.625.058 1.26.07 1.64.07 4.85s-.012 3.58-.07 4.85c-.053 1.17-.22 1.96-.468 2.62-.247.67-.59 1.17-.114 1.7-.527.527-1.03.87-1.7 1.117-.66.247-1.45.415-2.62.468-1.26.058-1.64.07-4.85.07s-3.58-.012-4.85-.07c-1.17-.053-1.96-.22-2.62-.468-.67-.247-1.17-.59-1.7-.114C4.36 19.37 3.92 18.86 3.67 18.19c-.247-.66-.415-1.45-.468-2.62-.058-1.26-.07-1.64-.07-4.85s.012-3.58.07-4.85c.053 1.17.22 1.96.468 2.62.247-.67.59-1.17 1.117-1.7.527-.527 1.03-.87 1.7-1.117.66-.247 1.45-.415 2.62-.468C8.417 2.175 8.796 2.163 12 2.163zm0 1.802c-3.14 0-3.504.01-4.71.07-1.11.05-1.75.21-2.22.4-.48.19-.82.43-1.16.78-.34.34-.58.68-.78 1.16-.19.47-.35 1.11-.4 2.22C2.98 9.49 2.97 9.86 2.97 12s.01 2.51.07 3.71c.05 1.11.21 1.75.4 2.22.19.48.43.82.78 1.16.34.34.68.58 1.16.78.47.19 1.11.35 2.22.4C9.49 21.02 9.86 21.03 12 21.03s2.51-.01 3.71-.07c1.11-.05 1.75-.21 2.22-.4.48-.19.82.43 1.16-.78.34.34.58.68.78-1.16.19-.47.35 1.11.4-2.22.06-1.2.07-1.57.07-3.71s-.01-2.51-.07-3.71c-.05-1.11-.21-1.75-.4-2.22-.19-.48-.43-.82-.78-1.16-.34-.34-.68-.58-1.16-.78-.47-.19-1.11-.35-2.22-.4C15.51 3.975 15.14 3.965 12 3.965zM12 6.88c-2.83 0-5.12 2.29-5.12 5.12s2.29 5.12 5.12 5.12 5.12-2.29 5.12-5.12-2.29-5.12-5.12-5.12zm0 8.44c-1.83 0-3.32-1.49-3.32-3.32s1.49-3.32 3.32-3.32 3.32 1.49 3.32 3.32-1.49 3.32-3.32 3.32zm6.34-8.6c-.66 0-1.2.54-1.2 1.2s.54 1.2 1.2 1.2 1.2-.54 1.2-1.2-.54-1.2-1.2-1.2z" />
  </svg>
);

// Component to inject styles into the document head
const FooterStyles = () => (
  <style>
    {`
    .footer {
      background: #111827; /* Dark Navy Blue */
      color: #d1d5db; /* Light gray text */
      padding-top: 4rem;
      padding-bottom: 2rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    
    .footerContainer {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .footerMain {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 3rem;
      margin-bottom: 3rem;
      align-items: flex-start;
    }
    
    .footerColumns {
      display: flex;
      flex-wrap: wrap;
      gap: 3rem;
      flex-grow: 2;
    }
    
    .footerColumn {
      flex: 1;
      min-width: 150px;
    }
    
    .footerColumn h3 {
      color: #facc15; /* Yellow */
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 1.25rem;
    }
    
    .footerColumn ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .footerColumn li {
      margin-bottom: 0.75rem;
    }
    
    .footerColumn a {
      color: #d1d5db;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color 0.2s ease-in-out;
    }
    
    .footerColumn a:hover {
      color: #fde047; /* Lighter yellow on hover */
      text-decoration: underline;
    }
    
    .footerSubscribe {
      flex: 1;
      min-width: 300px;
      max-width: 450px;
      text-align: center;
    }
    
    .footerSubscribe h3 {
      color: #facc15;
      font-weight: 600;
      font-size: 1rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      margin-bottom: 1.25rem;
    }
    
    .newsletterForm {
      display: flex;
      margin-bottom: 1.5rem;
    }
    
    .newsletterInput {
      flex-grow: 1;
      border: 1px solid #374151;
      background: #1f2937;
      color: #f9fafb;
      padding: 0.75rem 1rem;
      border-radius: 6px 0 0 6px;
      font-size: 1rem;
      outline: none;
      transition: border-color 0.2s;
    }
    
    .newsletterInput::placeholder {
      color: #6b7280;
    }
    
    .newsletterInput:focus {
      border-color: #facc15;
    }
    
    .newsletterButton {
      background: #facc15;
      color: #111827;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 0 6px 6px 0;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
    }
    
    .newsletterButton:hover {
      background: #fde047;
    }
    
    .socials {
      display: flex;
      gap: 1.25rem;
      justify-content: center; /* <-- FIX IS HERE */
    }
    
    .socialIcon {
      color: #9ca3af;
      transition: color 0.2s ease-in-out;
    }
    
    .socialIcon:hover {
      color: #facc15;
    }
    
    /* --- Legal Bar --- */
    .footerLegal {
      border-top: 1px solid #374151; /* Darker gray border */
      padding-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      font-size: 0.9rem;
    }
    
    .copyright {
      color: #9ca3af;
      text-align: left;
    }
    
    .brand {
      color: #facc15;
      font-weight: 700;
    }
    
    .legalLinks {
      display: flex;
      gap: 0.75rem;
      color: #9ca3af;
      align-items: center;
    }
    
    .legalLinks a {
      color: #9ca3af;
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .legalLinks a:hover {
      color: #fde047;
      text-decoration: underline;
    }
    `}
  </style>
);

export default function Footer() {
  return (
    <footer className="footer">
      <FooterStyles /> {/* Inject the styles */}
      <div className="footerContainer">
        {/* */}
        <div className="footerMain">
          {/* */}
          <div className="footerColumns">
            <div className="footerColumn">
              <h3>Navigation</h3>
              <ul>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/train">Train With Us</a>
                </li>
                <li>
                  <a href="/partners">Partnerships</a>
                </li>
                <li>
                  <a href="/community">Community</a>
                </li>
              </ul>
            </div>
            <div className="footerColumn">
              <h3>Events</h3>
              <ul>
                <li>
                  <a href="/events/marathon">Marathon</a>
                </li>
                <li>
                  <a href="/events/cycling">Cycling</a>
                </li>
                <li>
                  <a href="/events/triathlon">Triathlon</a>
                </li>
                <li>
                  <a href="/events">All Events</a>
                </li>
              </ul>
            </div>
            <div className="footerColumn">
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/faq">FAQ</a>
                </li>
                <li>
                  <a href="/shop/support">Shop Support</a>
                </li>
                <li>
                  <a href="/account">My Account</a>
                </li>
              </ul>
            </div>
          </div>

          {/* */}
          <div className="footerSubscribe">
            <h3>DON'T MISS THE NEXT RACE</h3>
            <form className="newsletterForm">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletterInput"
              />
              <button type="submit" className="newsletterButton">
                Subscribe
              </button>
            </form>
            <div className="socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
                aria-label="Facebook"
              >
                <IconFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
                aria-label="Twitter"
              >
                <IconTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="socialIcon"
                aria-label="Instagram"
              >
                <IconInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* */}
        <div className="footerLegal">
          <span className="copyright">
            &copy; 2025 <span className="brand">FYTRR</span>. All rights
            reserved.
          </span>
          <div className="legalLinks">
            <a href="/privacy">Privacy Policy</a>
            <span>|</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
