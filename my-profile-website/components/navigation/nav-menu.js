import Link from "next/link";
import styles from "./navigation.module.css";

export const Navigation = () => {
  return (
    <header>
      <div className={styles.navHeader}>
        <img
          src="/logos/mv-logo-light.png"
          alt="Logo of Mayank Verma Portfolio"
        />
        <nav className={styles.navLinks}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-me">About Me</Link>
            </li>
            <li>
              <Link href="/map">Maps</Link>
            </li>
          </ul>
        </nav>
        <Link href="/contact-me">
          <button>Contact</button>
        </Link>
      </div>
    </header>
  );
};
