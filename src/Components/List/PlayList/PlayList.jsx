import { useTracks } from "../../Context/TracksContext";
import { useThemes } from "../../Context/ThemeContext";
import { useFavorites } from "../../Context/FavoritesContext";
import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import { HeaderCard } from "../../Card/HeaderCard/HeaderCard";
import { usePlaylist } from "../../Context/PlaylistContext";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import { IoAddCircleOutline } from "react-icons/io5";
import styles from "./PlayList.module.css";

function PlayList({ limit, onChangePlaylist, listMap }) {
  const { currentTheme } = useThemes();
  const { currentTrack, focusTrack } = useCurrentTrack();
  const { favorites } = useFavorites();
  const { tracks, isLoading } = useTracks();
  const { playlists, addPlaylist, dataMap } = usePlaylist();
  const { windowWidth } = useWindowWidth();

  function displayList() {
    if (!playlists) return;
    const list = playlists.map((playlist, index) => {
      const amount = dataMap[playlist.id]?.length ?? playlist.amount ?? 0;
      return (
        <li key={index}>
          <div className={styles.cardWrapper}>
            <HeaderCard
              width={"20em"}
              height={"23em"}
              cover={
                playlist.name === "Favorites" && favorites[0] !== "undefined"
                  ? favorites[0].img_url
                  : playlist.cover
              }
              title={playlist.name}
              underTitle={`${amount} ${amount === 1 ? "track" : "tracks"}`}
              onClick={() => {
                if (!listMap[playlist.name]) return;
                onChangePlaylist && onChangePlaylist(listMap[playlist.name]);
              }}
            />
          </div>
        </li>
      );
    });
    return [
      <li key="Add">
        <div>
          <HeaderCard
            width={"15em"}
            height={"23em"}
            cover={playlists[0]?.cover}
            title={"Add Playlist"}
            underTitle={
              <IoAddCircleOutline
                style={{ fontSize: "2em", marginBottom: "-10px" }}
              />
            }
            onClick={addPlaylist}
          />
        </div>
      </li>,
      ...list,
    ];
  }

  if (isLoading) return null;
  return (
    <>
      <ul className={styles.list}>{displayList()}</ul>
    </>
  );
}

export { PlayList };
