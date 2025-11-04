"use client";

import styles from "./FindMyRace.module.css";

export default function FindMyRace() {
  return (
    <main className={styles.main}>
      <h1>Find My Race</h1>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter your city or event name"
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
      {/* You can add a list or grid of results below */}
    </main>
  );
}
