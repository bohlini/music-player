import { IoColorFill } from "react-icons/io5";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({ currentTheme }) {
  return (
    <>
      <div style={{ IoColorFill: { currentTheme } }}>
        <div className={styles.backBar}></div>
      </div>
    </>
  );
}
