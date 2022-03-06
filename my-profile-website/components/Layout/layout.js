import { Navigation } from "../navigation/nav-menu";
import styles from "./layout.module.css";
export const Layout = ({ children }) => {
  return (
    <div className={styles.siteLayout}>
      {/* Add Seo component Here */}
      <Navigation />
      <div className={styles.container}>
        <div className={styles.pageContent}>{children}</div>
      </div>
      {/* Add footer here */}
    </div>
  );
};
