import { useState } from "react";
import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoList } from "react-icons/io5";
import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import { useFavorites } from "../../Context/FavoritesContext";
import styles from "./TrackCard.module.css";

function TrackCard({ currentTheme, variant }) {
  const { isLiked, setLike } = useFavorites();
  const { currentTrack, handlePlay } = useCurrentTrack();
  const [isOpen, setIsOpen] = useState(false);

  if (!currentTrack) return null;
  return (
    <>
      <div className={`${styles.cardContainer} ${styles[variant]}`}>
        <span
          style={{
            background: `linear-gradient(90deg, 
    rgba(0, 0, 0, 1) 0%, 
    rgba(0, 0, 0, 1) 10%, 
    ${currentTheme} 100%)`,
          }}
          className={styles.year}
        >
          {currentTrack.year}
        </span>
        <div className={styles.flexWrap}>
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

          <img
            className={styles.image}
            src={currentTrack.img_url}
            alt={currentTrack.title}
            onClick={handlePlay}
          />
        </div>
      </div>
    </>
  );
}

export { TrackCard };
