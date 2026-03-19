import styles from "./TrackInfo.module.css";
import { useCurrentTrack } from "../../../Context/CurrentTrackContext";

export default function TrackInfo({ variant }) {
  const { currentTrack } = useCurrentTrack();
  return (
    <div className={`${styles.trackInfo} ${styles[variant] || ""}`}>
      <p className={styles.track}>{currentTrack.title}</p>
      <p className={styles.artist}>{currentTrack.artist}</p>
    </div>
  );
}
