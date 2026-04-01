import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import styles from "./QueueCard.module.css";

function QueueCard({ src }) {
  const { currentTrack } = useCurrentTrack();

  if (!currentTrack || !src) return null;
  else
    return <img src={src.img_url} alt={src.title} className={styles.image} />;
}

export { QueueCard };
