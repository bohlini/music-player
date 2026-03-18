import TrackCard from "./TrackCard/TrackCard";
import PlaybackMenu from "./PlaybackMenu/PlaybackMenu";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./PlayerContainer.module.css";
import { useThemes } from "../../Context/ThemeContext";
import { useCurrentTrack } from "../../Context/CurrentTrackContext";

export default function PlayerContainer() {
  const { currentTheme } = useThemes();
  const { currentTrack } = useCurrentTrack();

  if (!currentTheme || !currentTrack) {
    return <p>Loading...</p>;
  } else
    return (
      <div className={styles.wrapper}>
        <TrackCard currentTheme={currentTheme} />
        <PlaybackMenu currentTheme={currentTheme} />
        <ProgressBar currentTheme={currentTheme} />
      </div>
    );
}
