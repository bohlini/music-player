import { useTracks } from "../../Context/TracksContext";
import { useFavorites } from "../../Context/FavoritesContext";
import { useThemes } from "../../Context/ThemeContext";
import { usePlaylist } from "../../Context/PlaylistContext";
import { Text } from "../../Typography/Text";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import styles from "./HeaderCard.module.css";
import { useState } from "react";
import { Modal } from "../../Modal/Modal";

function HeaderCard({ width, height, cover, title, underTitle, onClick }) {
  const { tracks, isLoading } = useTracks();
  const { favorites } = useFavorites();
  const { currentTheme } = useThemes();
  const { deletePlaylist, playlists } = usePlaylist();

  const [showModal, setShowModal] = useState(false);

  if (isLoading || !favorites || !tracks?.length) return null;
  return (
    <>
      <div className={styles.imageWrapper}>
        <img
          src={cover}
          alt="Playlist cover"
          style={{ width: width, height: height }}
          className={styles.image}
          onClick={onClick}
        />
        <div
          className={
            title === "Add Playlist"
              ? styles.hideIconWrapper
              : styles.iconWrapper
          }
        >
          <IoEllipsisVerticalOutline
            onClick={() => setShowModal(true)}
            onMouseLeave={() => setShowModal(false)}
          />
          {showModal && title === "Favorites" && <Modal />}
          {showModal && title !== "Favorites" && <Modal />}
        </div>
        <div className={styles.typeWrapper}>
          <Text type="playlistUnderTitle">{underTitle}</Text>
          <Text type="playlistTitle">{title}</Text>
        </div>
      </div>
    </>
  );
}

export { HeaderCard };
