import { useTracks } from "../../Context/TracksContext";
import styles from "/Users/julia/Documents/HI - 25/course 5/music-player-react/music-player/src/Components/PlayListCard/PlayListCard.module.css";

export default function PlayListCard() {
  const { currentTrack } = useTracks();

  if (!currentTrack) return;
  else {
    return (
      <>
        <li>
          <img
            className={styles.image}
            src={currentTrack.img_url}
            alt={currentTrack.title}
          />
          <div className={styles.textContainer}>
            <p className={styles.playlistTitle}>{currentTrack.title}</p>
            <p className={styles.playlistText}>{currentTrack.artist}</p>
          </div>
        </li>
      </>
    );
  }
}
