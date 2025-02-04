import styles from "./styles.module.css";
import letLogo from "../../../src/assets/blue-logo.jpg";

export default function Header1() {
  return (
    <header className={styles.header1}>
      <img src={letLogo} alt="MainLogo" className={styles.logo} />
    </header>
  );
}
