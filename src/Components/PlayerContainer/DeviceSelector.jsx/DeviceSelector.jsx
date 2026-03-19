import { FaChromecast } from "react-icons/fa";
import styles from "./DeviceSelector.module.css";

export default function DeviceSelector({ variant }) {
  return (
    <div className={styles.wrapper}>
      <p className={`${styles[variant]}`}>Connected to users Ipds</p>
      <FaChromecast />
    </div>
  );
}
