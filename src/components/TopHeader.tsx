import Link from "next/link";
import styles from "../styles/TopHeader.module.css";

export default function TopHeader() {
  return (
    <div className={styles.topHeader}>
      <div className={styles.rightGroup}>
        <Link href="/" passHref>
          <button className={styles.yellowBtn}>SHOP</button>
        </Link>
        <Link href="/sponsorship" passHref>
          <button className={styles.yellowBtn}>PARTNERSHIP</button>
        </Link>
        <Link href="/find-my-race" passHref>
          <button className={styles.yellowBtn}>FIND MY RACE</button>
        </Link>
      </div>
    </div>
  );
}
