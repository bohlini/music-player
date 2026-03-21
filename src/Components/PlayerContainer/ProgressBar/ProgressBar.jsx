import styles from "./ProgressBar.module.css";
import { useCurrentTrack } from "../../../Context/CurrentTrackContext";
import { useEffect } from "react";
import { useDuration } from "../../../Context/DurationContext";

export default function ProgressBar({ currentTheme, variant }) {
  const { currentTrack, isPlaying } = useCurrentTrack();
  const {
    displayDuration,
    displayReversedDuration,
    currentDuration,
    trackDuration,
  } = useDuration();

  const progress = (currentDuration / trackDuration) * 100;

  return (
    <>
      <div className={`${styles.backBar} ${styles[variant] || " "}`}>
        <div
          className={styles.frontBar}
          style={{ backgroundColor: currentTheme, width: `${progress}%` }}
        ></div>
        <div className={styles.textWrap}>
          <p>{displayDuration}</p>
          <p>{displayReversedDuration}</p>
        </div>
      </div>
    </>
  );
}
