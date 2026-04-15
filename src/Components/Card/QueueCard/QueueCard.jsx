import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import styles from "./QueueCard.module.css";

// REVIEW: `currentTrack` is destructured from context but never actually used — the `!currentTrack` guard is unnecessary since this component only renders an image from `src`. Remove the context dependency to avoid unnecessary re-renders when the current track changes.
function QueueCard({ src }) {
  const { currentTrack } = useCurrentTrack();

  if (!currentTrack || !src) return null;
  else
    return <img src={src.img_url} alt={src.title} className={styles.image} />;
}

export { QueueCard };
