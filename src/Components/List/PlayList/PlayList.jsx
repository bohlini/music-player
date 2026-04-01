import { IoAddCircleOutline } from "react-icons/io5";
import { useTracks } from "../../Context/TracksContext";
import { useFavorites } from "../../Context/FavoritesContext";
import { usePlaylist } from "../../Context/PlaylistContext";
import { PlaylistCard } from "../../Card/PlaylistCard/PlaylistCard";
import mockImages from "../../../mockData/mockImages.json";
import styles from "./PlayList.module.css";

function PlayList({ onChangePlaylist, listMap }) {
  const { favorites } = useFavorites();
  const { isLoading } = useTracks();
  const { playlists, addPlaylist, dataMap } = usePlaylist();
  const { addUserUrl, favoritesUrl } = mockImages.URLs;

  let amount = 0;
  function displayList() {
    if (!playlists) return null;
    const list = playlists.map((playlist, index) => {
      amount = dataMap[playlist.id]?.length ?? playlist.amount ?? 0;
      return (
        <li key={index}>
          <div>
            <PlaylistCard
              cover={playlist.cover}
              title={playlist.name}
              underTitle={`${amount} ${amount === 1 ? "track" : "tracks"}`}
              onClick={() => {
                if (!listMap[playlist.name]) return;
                onChangePlaylist && onChangePlaylist(listMap[playlist.name]);
              }}
              className={styles.image}
            />
          </div>
        </li>
      );
    });
    return [
      <li key="Add">
        <div>
          <PlaylistCard
            cover={addUserUrl}
            title={"Add Playlist"}
            underTitle={
              <IoAddCircleOutline
                onClick={addPlaylist}
                className={styles.icon}
              />
            }
            onClick={addPlaylist}
            className={styles.image}
          />
        </div>
      </li>,
      <li key="Favorites">
        <div>
          <PlaylistCard
            cover={favorites[0]?.img_url ? favorites[0].img_url : favoritesUrl}
            title={"Favorites"}
            underTitle={`${favorites.length} ${favorites.length === 1 ? "track" : "tracks"}`}
            onClick={() => {
              if (!favorites) return;
              onChangePlaylist && onChangePlaylist("favorites");
            }}
            className={styles.image}
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
