import { TrackCard } from "../../../Card/TrackCard/TrackCard";
import { TrackInfo } from "../../../TrackInfo/TrackInfo";
import { ProgressBar } from "../../../ProgressBar/ProgressBar";
import { PlaybackMenu } from "../../../PlaybackMenu/PlaybackMenu";
import { useCurrentTrack } from "../../../Context/CurrentTrackContext";
import styles from "./PlaylistsPlayer.module.css";

function PlaylistsPlayer() {
  const { currentTheme } = useCurrentTrack();

  if (!currentTheme) return null;
  return (
    <>
      <div className={styles.container}>
        <TrackCard currentTheme={currentTheme} variant="playlists" />
        <div className={styles.rightSide}>
          <TrackInfo variant="playlists" />
          <PlaybackMenu currentTheme={currentTheme} variant="playlists" />
          <ProgressBar currentTheme={currentTheme} variant="playlists" />
        </div>
      </div>
    </>
  );
}

export { PlaylistsPlayer };
