import { TrackCard } from "../../Card/TrackCard/TrackCard";
import { TrackInfo } from "../TrackInfo/TrackInfo";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { PlaybackMenu } from "../PlaybackMenu/PlaybackMenu";
import { useThemes } from "../../Context/ThemeContext";
import styles from "./PlaylistsPlayer.module.css";

function PlaylistsPlayer({ variant }) {
  const { currentTheme } = useThemes();

  return (
    <>
      <div className={styles.container}>
        <TrackCard currentTheme={currentTheme} variant={variant} />
        <div className={styles.rightSide}>
          <TrackInfo variant={variant} />
          <PlaybackMenu currentTheme={currentTheme} variant={variant} />
          <ProgressBar currentTheme={currentTheme} variant={variant} />
        </div>
      </div>
    </>
  );
}

export { PlaylistsPlayer };
