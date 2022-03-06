import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Layout } from "../components/Layout/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["PORTFOLIO", "PROFILE", "WEBSITE"],
      typeSpeed: 150,
      backSpeed: 100,
      startDelay: 1000,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <Layout>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to my
            <br />
            <span ref={el} />
          </h1>
        </main>
      </div>
    </Layout>
  );
}
