import { useCurrentTrack } from "../Context/CurrentTrackContext";
import { useDuration } from "../Context/DurationContext";
import { Text } from "../Text/Text";
import styles from "./ProgressBar.module.css";

function ProgressBar({ currentTheme, variant }) {
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
          <Text type="meta">{displayDuration}</Text>
          <Text type="meta">{displayReversedDuration}</Text>
        </div>
      </div>
    </>
  );
}

export { ProgressBar };
