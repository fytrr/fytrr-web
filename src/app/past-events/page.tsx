import styles from "./PastEvents.module.css";

const events = [
  { date: "2025-10-01", name: "Hyrox Mumbai", location: "Mumbai" },
  { date: "2025-09-15", name: "Hyrox Delhi", location: "Delhi" },
  { date: "2025-08-20", name: "Hyrox Bangalore", location: "Bangalore" },
];

export default function PastEvents() {
  return (
    <main className={styles.main}>
      <h1>Past Events</h1>
      <ul className={styles.eventList}>
        {events.map((event, i) => (
          <li key={i} className={styles.eventItem}>
            <strong>{event.name}</strong> - {event.location} on {event.date}
          </li>
        ))}
      </ul>
    </main>
  );
}
