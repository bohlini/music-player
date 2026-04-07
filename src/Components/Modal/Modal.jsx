import { IoShareOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoColorWandOutline } from "react-icons/io5";
import { useCurrentTrack } from "../Context/CurrentTrackContext";
import { usePlaylist } from "../Context/PlaylistContext";
import { Text } from "../Text/Text";
import styles from "./Modal.module.css";

function Modal({ isFavorites = false, name, onRename }) {
  const { deletePlaylist } = usePlaylist();
  const { currentTheme } = useCurrentTrack();

  if (!currentTheme) return null;
  return isFavorites ? (
    <>
      <div className={styles.modalContent}>
        <ul style={{ "--theme": currentTheme }}>
          <li>
            <Text type="label">Share playlist</Text>
            <IoShareOutline />
          </li>
        </ul>
      </div>
    </>
  ) : (
    <>
      <div className={styles.modalContent}>
        <ul style={{ "--theme": currentTheme }}>
          <li onClick={onRename}>
            <Text type="label">Rename playlist</Text>
            <IoColorWandOutline />
          </li>
          <li onClick={() => deletePlaylist(name)}>
            <Text type="label">Remove playlist</Text>
            <IoCloseCircleOutline />
          </li>
          <li>
            <Text type="label">Share playlist</Text>
            <IoShareOutline />
          </li>
        </ul>
      </div>
    </>
  );
}

export { Modal };
