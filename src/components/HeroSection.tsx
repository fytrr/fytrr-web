import styles from "../styles/HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.heroContent}>
        <h1>THE WORLD SERIES OF FITNESS RACING</h1>
      </div>
    </section>
  );
}
