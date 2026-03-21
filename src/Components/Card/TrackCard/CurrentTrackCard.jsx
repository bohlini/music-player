import { useState } from "react";
import styles from "./CurrentTrackCard.module.css";
import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { useCurrentTrack } from "../../../Context/CurrentTrackContext";
import { useFavorites } from "../../../Context/FavoritesContext";
import { useTracks } from "../../../Context/TracksContext";

export default function CurrentTrackCard({ currentTheme, variant, type }) {
  const { isLiked, setLike } = useFavorites();
  const { focusTrack, currentTrack } = useCurrentTrack();
  const { tracks } = useTracks();

  if (!currentTrack) return null;
  return (
    <>
      {type === "playing" ? (
        <div className={`${styles.cardContainer} ${styles[variant]}`}>
          <span>{currentTrack.year}</span>
          <div className={styles.flexWrap}>
            <img
              onClick={() => focusTrack(currentTrack)}
              className={styles.image}
              src={currentTrack.img_url}
              alt={currentTrack.title}
            />
            <div
              onClick={() => setLike(currentTrack)}
              className={styles.iconWrap}
            >
              {currentTrack && isLiked(currentTrack) ? (
                <IoHeartSharp style={{ color: currentTheme }} />
              ) : (
                <IoHeartOutline />
              )}
            </div>
          </div>
        </div>
      ) : type === "queue" ? (
        <div>queue card</div>
      ) : (
        <div>other card</div>
      )}
    </>
  );
}
