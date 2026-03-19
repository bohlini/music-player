import TrackCard from "./TrackCard/TrackCard";
import PlaybackMenu from "./PlaybackMenu/PlaybackMenu";
import ProgressBar from "./ProgressBar/ProgressBar";
import TrackInfo from "./TrackInfo/TrackInfo";
import styles from "./PlayerContainer.module.css";
import { useThemes } from "../../Context/ThemeContext";
import { useCurrentTrack } from "../../Context/CurrentTrackContext";

export default function PlayerContainer({ variant }) {
  const { currentTheme } = useThemes();
  const { currentTrack } = useCurrentTrack();

  if (!currentTheme || !currentTrack) {
    return <p>Loading...</p>;
  } else
    return (
      <div className={`${styles.container} ${styles[variant] || ""}`}>
        <TrackCard currentTheme={currentTheme} variant={variant} />

        {variant === "playlists" ? (
          <div className={styles.rightSide}>
            <TrackInfo variant={variant} />
            <div className={styles.controls}>
              <PlaybackMenu currentTheme={currentTheme} variant={variant} />
              <ProgressBar currentTheme={currentTheme} variant={variant} />
            </div>
          </div>
        ) : (
          <>
            <div className={styles.info}>
              <TrackInfo variant={variant} />
            </div>
            <div className={styles.controls}>
              <PlaybackMenu currentTheme={currentTheme} variant={variant} />
              <ProgressBar currentTheme={currentTheme} variant={variant} />
            </div>
          </>
        )}
      </div>
    );
}
