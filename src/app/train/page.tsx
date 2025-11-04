import styles from "./Train.module.css";

const gyms = [
  { name: "Power Gym", city: "Mumbai" },
  { name: "FitZone", city: "Delhi" },
  { name: "ProAthlete Gym", city: "Bangalore" },
];

export default function Train() {
  return (
    <main className={styles.main}>
      <h1>Train With Our Partnered Gyms</h1>
      <p>If you are interested, contact the gym directly to get started.</p>
      <ul className={styles.gymList}>
        {gyms.map((gym, i) => (
          <li key={i} className={styles.gymItem}>
            <strong>{gym.name}</strong> - {gym.city}
          </li>
        ))}
      </ul>
    </main>
  );
}
