import { useDuration } from "../Context/DurationContext";
import { Text } from "../Text/Text";
import styles from "./ProgressBar.module.css";

function ProgressBar({ currentTheme, variant }) {
  const {
    displayDuration,
    displayReversedDuration,
    currentDuration,
    trackDuration,
  } = useDuration();

  // REVIEW: BUG — When `trackDuration` is 0 or null, this evaluates to `NaN` or `Infinity`, which gets passed as `width: "NaN%"` to the style. Add a guard: `const progress = trackDuration ? (currentDuration / trackDuration) * 100 : 0;`
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
