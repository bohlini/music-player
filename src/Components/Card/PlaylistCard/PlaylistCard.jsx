import { useState } from "react";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { useTracks } from "../../Context/TracksContext";
import { useFavorites } from "../../Context/FavoritesContext";
import { usePlaylist } from "../../Context/PlaylistContext";
import { Text } from "../../Text/Text";
import { Modal } from "../../Modal/Modal";
import styles from "./PlaylistCard.module.css";

function PlaylistCard({ cover, title, underTitle, onClick }) {
  const { tracks, isLoading } = useTracks();
  const { favorites } = useFavorites();
  const { renamePlaylist } = usePlaylist();

  const [showModal, setShowModal] = useState(false);
  const [newName, setNewName] = useState(title);
  const [editing, setEditing] = useState(false);

  function rename() {
    renamePlaylist(title, newName);
    setEditing(false);
    setShowModal(false);
  }

  if (isLoading || !favorites || !tracks?.length) return null;
  return (
    <>
      <div className={styles.imageWrapper}>
        <img
          src={cover}
          alt="Playlist cover"
          className={styles.image}
          onClick={onClick}
        />
        <div
          className={
            title === "Add Playlist"
              ? styles.hideIconWrapper
              : styles.iconWrapper
          }
          onMouseLeave={() => setShowModal(false)}
        >
          <IoEllipsisVerticalOutline onClick={() => setShowModal(true)} />
          {showModal && title === "Favorites" && <Modal isFavorites />}
          {showModal && title !== "Favorites" && (
            <Modal
              name={title}
              onRename={() => {
                setEditing(true);
                setShowModal(false);
              }}
            />
          )}
        </div>
        <div className={styles.typeWrapper}>
          <div className={styles.underTitle}>
            <Text type="playlistUnderTitle">{underTitle}</Text>
          </div>

          {editing ? (
            <Text input="playlistTitle">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onBlur={rename}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    rename();
                    e.target.blur();
                  }
                }}
                autoFocus
                className={styles.input}
              />
            </Text>
          ) : (
            <Text type="playlistTitle">{title}</Text>
          )}
        </div>
      </div>
    </>
  );
}

export { PlaylistCard };
