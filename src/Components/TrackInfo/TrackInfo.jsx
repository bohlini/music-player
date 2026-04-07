import { useCurrentTrack } from "../Context/CurrentTrackContext";
import { Text } from "../Text/Text";
import styles from "./TackInfo.module.css";

function TrackInfo({ variant }) {
  const { currentTrack } = useCurrentTrack();

  if (!currentTrack) {
    return <Text type="meta">Loading...</Text>;
  } else
    return (
      <div className={`${styles.trackInfo} ${styles[variant] || ""}`}>
        <Text type="bigTitle"> {currentTrack.title}</Text>
        <Text type="bigArtist"> {currentTrack.artist}</Text>
      </div>
    );
}

export { TrackInfo };
