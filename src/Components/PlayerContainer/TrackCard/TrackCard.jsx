import { useState } from "react";
import styles from "./TrackCard.module.css";
import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { useCurrentTrack } from "../../../Context/CurrentTrackContext";
import { useFavorites } from "../../../Context/FavoritesContext";

export default function TrackCard({ currentTheme, variant }) {
  const { isLiked, setLike } = useFavorites();
  const { focusTrack, currentTrack } = useCurrentTrack();

  if (!currentTrack) return;
  return (
    <>
      <div className={`${styles.cardContainer} ${styles[variant]}`}>
        <span style={{ color: currentTheme }}>{currentTrack.year}</span>
        <img
          onClick={() => focusTrack(currentTrack)}
          className={styles.image}
          src={currentTrack.img_url}
          alt={currentTrack.title}
        />
        <div onClick={() => setLike(currentTrack)} className={styles.iconWrap}>
          {currentTrack && isLiked(currentTrack) ? (
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
