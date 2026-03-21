import CurrentTrackCard from "../Card/TrackCard/CurrentTrackCard";
import PlaybackMenu from "./PlaybackMenu/PlaybackMenu";
import ProgressBar from "./ProgressBar/ProgressBar";
import TrackInfo from "./TrackInfo/TrackInfo";
import styles from "./PlayerContainer.module.css";
import { useThemes } from "../../Context/ThemeContext";
import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import DeviceSelector from "../DeviceSelector.jsx/DeviceSelector";

export default function PlayerContainer({ variant }) {
  const { currentTheme } = useThemes();
  const { currentTrack } = useCurrentTrack();

  if (!currentTheme || !currentTrack) {
    return <p>Loading...</p>;
  } else
    return (
      <div className={`${styles.container} ${styles[variant] || ""}`}>
        <CurrentTrackCard
          currentTheme={currentTheme}
          variant={variant}
          type="playing"
        />

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
