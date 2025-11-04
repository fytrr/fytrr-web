import styles from "./Fights.module.css";

const levels = [
  {
    level: "Beginner",
    description:
      "Entry-level events with basic challenges for new competitors.",
    events: ["Sprint Challenge", "Lightweight Circuit"],
  },
  {
    level: "Intermediate",
    description: "Moderate difficulty events testing endurance and strength.",
    events: ["Mountain Trail", "CrossFit Gauntlet"],
  },
  {
    level: "Pro",
    description: "High-level competitive races for elite athletes.",
    events: ["Hyrox Championship", "Urban Warfare"],
  },
];

export default function Fights() {
  return (
    <main className={styles.main}>
      <h1>Fights - Event Levels</h1>
      {levels.map((level, i) => (
        <section key={i} className={styles.levelSection}>
          <h2>{level.level}</h2>
          <p>{level.description}</p>
          <ul>
            {level.events.map((event, idx) => (
              <li key={idx}>{event}</li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
