"use client";

import styles from "./Sponsorship.module.css";
import { useState } from "react";

export default function Sponsorship() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className={styles.main}>
      <h1>Sponsorship Opportunities</h1>
      <p>
        Want to partner with us as a sponsor? Fill out the form below to show
        your interest—we’ll get in touch soon!
      </p>
      {!submitted ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <input
            className={styles.input}
            type="text"
            name="company"
            placeholder="Your Organization (optional)"
          />
          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Why do you want to partner with us?"
            rows={5}
            required
          />
          <button className={styles.button} type="submit">
            Show Interest
          </button>
        </form>
      ) : (
        <div className={styles.thankyou}>
          <h2>Thank You for Your Interest!</h2>
          <p>
            Our team will reach out to you soon to discuss partnership
            opportunities.
          </p>
        </div>
      )}
    </main>
  );
}
