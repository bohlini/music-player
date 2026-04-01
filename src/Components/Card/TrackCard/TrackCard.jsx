import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import { useFavorites } from "../../Context/FavoritesContext";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import styles from "./TrackCard.module.css";

function TrackCard({ currentTheme, variant }) {
  const { isLiked, setLike } = useFavorites();
  const { currentTrack, handlePlay } = useCurrentTrack();
  const { windowWidth } = useWindowWidth();

  const isMobile = windowWidth < 768;

  if (!currentTrack) return null;
  return (
    <>
      <div className={`${styles.cardContainer} ${styles[variant]}`}>
        <span
          style={{
            background: `linear-gradient(90deg, 
    ${currentTheme} 0%, 
    rgba(0, 0, 0, 0.4) 100%)`,
          }}
          className={styles.year}
        >
          {currentTrack.year}
        </span>
        <div className={styles.flexWrap}>
          <div className={styles.imageWrap}>
            <div
              onClick={() => setLike(currentTrack)}
              className={styles.iconWrap}
            >
              {currentTrack && isLiked(currentTrack) ? (
                <IoHeartSharp
                  className={styles.icon}
                  style={{ color: isMobile ? "#fff" : currentTheme }}
                />
              ) : (
                <IoHeartOutline className={styles.icon} />
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
      </div>
    </>
  );
}

export { TrackCard };
