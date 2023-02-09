import styles from "./qrcode.module.css";

export default function Qrcode({ children }) {
    return <div className={styles.container}>{children}</div>;
  }