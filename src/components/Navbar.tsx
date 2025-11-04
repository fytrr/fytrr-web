"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/" passHref>
          <img
            src="/logo_tag.svg"
            alt="Logo"
            className={styles.logo}
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </Link>
      </div>

      <ul className={styles.menu}>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/past-events">PAST EVENTS</Link>
        </li>
        <li>
          <Link href="/fights">FIGHT LEVEL</Link>
        </li>
        <li>
          <Link href="/train">TRAIN</Link>
        </li>
        <li>
          <Link href="/">community</Link>
        </li>
      </ul>
    </nav>
  );
}
