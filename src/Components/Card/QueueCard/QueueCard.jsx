import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import { Text } from "../../Typography/Text";
import styles from "./QueueCard.module.css";

function QueueCard({ src }) {
  const { currentTrack, focusTrack } = useCurrentTrack();

  if (!currentTrack || !src) return null;
  else
    return (
      <img
        src={src.img_url}
        alt={src.title}
        onClick={() => focusTrack(src)}
        className={styles.image}
      />
    );
}

export { QueueCard };
