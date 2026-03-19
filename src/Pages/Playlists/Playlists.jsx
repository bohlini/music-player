import { useState, useEffect } from "react";
import { useThemes } from "../../Context/ThemeContext";
import styles from "../Playlists/Playlists.module.css";
import { IoIosAdd } from "react-icons/io";
import IconButton from "../../Components/Button/IconButton";
import { useTracks } from "../../Context/TracksContext";
import PlayListCard from "../../Components/PlayListCard/PlayListCard";
import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import PlayerContainer from "../../Components/PlayerContainer/PlayerContainer";

export default function Playlists() {
  const [playlists, setPlaylists] = useState([
    { name: "playlist1" },
    { name: "playlist2" },
    { name: "playlist3" },
  ]);

  const { focusTrack, currentTrack } = useCurrentTrack();
  const { currentTheme } = useThemes();
  const { tracks } = useTracks();

  function addPlaylist() {
    setPlaylists([...playlists, { name: +playlists.length + 1 }]);
  }

  function showPlaylists() {
    const list = playlists.map((pl, index) => <li key={index}>{pl.name}</li>);
    return list;
  }

  function showTrackList() {
    const list = tracks.map((track, index) => (
      <li key={index}>
        <img
          onClick={() => focusTrack(track)}
          className={styles.image}
          src={track.img_url}
          alt={track.title}
        />
        <div className={styles.textContainer}>
          <p className={styles.playlistTitle}>{track.title}</p>
          <p className={styles.playlistText}>{track.artist}</p>
        </div>
      </li>
    ));
    return list;
  }

  return (
    <>
      <div
        className={styles.sideBarContainer}
        style={{ backgroundColor: currentTheme }}
      >
        <h2>Playlists</h2>
        <p>{playlists.length} playlists</p>

        <ul>{showPlaylists()}</ul>
        <IconButton
          onClick={addPlaylist}
          size="smallWTheme"
          icon={<IoIosAdd />}
          currentTheme={currentTheme}
        ></IconButton>
      </div>
      <div>
        <ul style={{ textAlign: "center" }}>{showTrackList()}</ul>
      </div>
    </>
  );
}
