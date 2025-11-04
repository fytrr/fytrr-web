import styles from "./About.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <h1 className={styles.gradientText}>About Us</h1>

      <p>
        Welcome to our fitness racing platform. We organize world-class fitness
        events bringing athletes and enthusiasts together.
      </p>
      <p>
        Our mission is to encourage active lifestyles and community through
        competitive racing and collaboration.
      </p>
    </main>
  );
}
