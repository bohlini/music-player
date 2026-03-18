import { useState } from "react";
import styles from "./TrackCard.module.css";
import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { useCurrentTrack } from "../../../Context/CurrentTrackContext";

export default function TrackCard({ currentTheme }) {
  //isLiked should be context or ref?
  const [isLiked, setIsLiked] = useState(false);
  const { focusTrack, currentTrack } = useCurrentTrack();

  function setLike() {
    setIsLiked((prevState) => !prevState);
  }

  if (!currentTrack) return;
  return (
    // -webkit-background-clip: text !important;
    // -webkit-text-fill-color: transparent;
    // align-items: center;
    // background: linear-gradient(
    //   270deg,
    //   rgba(0, 0, 0, 0) 0%,
    //   rgba(0, 0, 0, 0.37) 100%
    // );
    // background-clip: text;
    // color: transparent;

    <>
      <div className={styles.cardContainer}>
        <span style={{ color: currentTheme }}>{currentTrack.year}</span>
        <img
          onClick={() => focusTrack(currentTrack)}
          className={styles.image}
          src={currentTrack.img_url}
          alt={currentTrack.title}
        />
        <div onClick={setLike} className={styles.iconWrap}>
          {isLiked ? (
            <IoHeartSharp style={{ color: currentTheme }} />
          ) : (
            <IoHeartOutline />
          )}
        </div>
        <p className={styles.track}>{currentTrack.title}</p>
        <p className={styles.artist}>{currentTrack.artist}</p>
      </div>
    </>
  );
}
