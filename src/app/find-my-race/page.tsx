"use client";

import { useState } from "react";
import styles from "./FindMyRace.module.css";

const events = [
  {
    code: "MEX",
    title: "SMART FIT HYROX MEXICO CITY",
    dates: "7. Nov. 2025 – 9. Nov. 2025",
    image: "/events/mexicocity.jpg",
    city: "Mexico City",
  },
  {
    code: "SEL",
    title: "HYROX SEOUL",
    dates: "8. Nov. 2025 – 9. Nov. 2025",
    image: "/events/seoul.jpg",
    city: "Seoul",
  },
  {
    code: "DUB",
    title: "SPORTS DIRECT HYROX DUBLIN",
    dates: "12. Nov. 2025 – 16. Nov. 2025",
    image: "/events/dublin.jpg",
    city: "Dublin",
  },
];

const continents = ["Asia", "Europe", "North America"];
const countries: { [key: string]: string[] } = {
  Asia: ["South Korea", "India"],
  Europe: ["Ireland"],
  "North America": ["Mexico"],
};
const cities: { [key: string]: string[] } = {
  "South Korea": ["Seoul"],
  India: ["Delhi", "Mumbai"],
  Ireland: ["Dublin"],
  Mexico: ["Mexico City"],
};


export default function FindMyRace() {
  const [selectedContinent, setContinent] = useState("");
  const [selectedCountry, setCountry] = useState("");
  const [selectedCity, setCity] = useState("");

  const filteredEvents = events.filter((event) => {
    if (selectedCity) {
      return event.city === selectedCity;
    } else if (selectedCountry) {
      return cities[selectedCountry]?.includes(event.city);
    } else if (selectedContinent) {
      const possibleCountries = countries[selectedContinent] || [];
      return possibleCountries.some((country) =>
        cities[country]?.includes(event.city)
      );
    }
    return true; // Show all if nothing selected
  });

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.filterBar}>
        <select
          value={selectedContinent}
          onChange={(e) => {
            setContinent(e.target.value);
            setCountry("");
            setCity("");
          }}
        >
          <option value="">Continent</option>
          {continents.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={selectedCountry}
          onChange={(e) => {
            setCountry(e.target.value);
            setCity("");
          }}
          disabled={!selectedContinent}
        >
          <option value="">Region/Country</option>
          {(countries[selectedContinent] || []).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select
          value={selectedCity}
          onChange={(e) => setCity(e.target.value)}
          disabled={!selectedCountry}
        >
          <option value="">City</option>
          {(cities[selectedCountry] || []).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className={styles.cardGrid}>
        {filteredEvents.length === 0 && (
          <div
            style={{
              color: "#ffe600",
              margin: "2rem auto",
              fontSize: "1.2rem",
            }}
          >
            No events found
          </div>
        )}
        {filteredEvents.map((event, idx) => (
          <div key={idx} className={styles.eventCard}>
            <div className={styles.imgWrap}>
              <img src={event.image} alt={event.city} />
            </div>
            <div className={styles.eventDetails}>
              <span className={styles.code}>{event.code}</span>
              <div className={styles.title}>{event.title}</div>
              <div className={styles.dates}>{event.dates}</div>
              <div className={styles.buyBtnWrap}>
                <button className={styles.buyBtn}>BUY TICKETS</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
