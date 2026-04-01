import { usePlaylist } from "../../Context/PlaylistContext";
import { useTracks } from "../../Context/TracksContext";
import { PlayList } from "../../List/PlayList/PlayList";
import { QueueList } from "../../List/QueueList/QueueList";
import { PlaylistTabs } from "../../List/PlaylistTabs/PlaylistTabs";
import { PlaylistsPlayer } from "./PlaylistsPlayer/PlaylistsPlayer";
import { Text } from "../../Text/Text";
import styles from "../Playlists/Playlists.module.css";

function Playlists() {
  const { activeList, changePlayList, dataMap, listMap } = usePlaylist();
  const { isLoading } = useTracks();

  if (isLoading) return <Text type="meta">Loading...</Text>;
  return (
    <>
      <div className={styles.playlistsContainer}>
        <PlayList onChangePlaylist={changePlayList} listMap={listMap} />
      </div>

      <div className={styles.fadeOut}>
        <ul className={styles.tabsContainer}>
          <PlaylistTabs />
        </ul>

        <QueueList
          limit={dataMap[activeList]?.length ?? 0}
          list={dataMap[activeList] ?? []}
          fadeOut={false}
        />
      </div>

      <PlaylistsPlayer />
    </>
  );
}

export { Playlists };
