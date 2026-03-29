import { useState, useRef, useEffect } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdPlayArrow } from "react-icons/md";
import { RxPause } from "react-icons/rx";
import { IoEllipsisHorizontalOutline } from "react-icons/io5";
import { IconButton } from "../../Button/Button";
import CoverCard from "../../Card/CoverCard/CoverCard";
import { PlayList } from "../../List/PlayList/PlayList";
import { HeaderCard } from "../../Card/HeaderCard/HeaderCard";
import { useThemes } from "../../Context/ThemeContext";
import { useTracks } from "../../Context/TracksContext";
import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import { useFavorites } from "../../Context/FavoritesContext";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import { QueueList } from "../../List/QueueList/QueueList";
import styles from "../Playlists/Playlists.module.css";
import { useQueue } from "../../Context/QueueContext";
import { usePlaylist } from "../../Context/PlaylistContext";
import { PlaylistTabs } from "../../List/PlaylistTabs/PlaylistTabs";

function Playlists() {
  const { currentTheme } = useThemes();
  const { tracks } = useTracks();
  const { favorites } = useFavorites();
  const { queue } = useQueue();
  const { activeList, changePlayList, dataMap, listMap } = usePlaylist();
  const { windowWidth } = useWindowWidth();

  const bigWindow = windowWidth >= 1600;

  return (
    <>
      <div className={styles.playlistsContainer}>
        <PlayList onChangePlaylist={changePlayList} listMap={listMap} />
      </div>

      <div
        style={{
          maskImage: `linear-gradient(to right, black 100%, transparent 100%)`,
          WebkitMaskImage: `linear-gradient(to right, black 100%, transparent 100%)`,
        }}
      >
        <div className={styles.tabsContainer}>
          <PlaylistTabs />
        </div>

        <QueueList
          limit={dataMap[activeList]?.length ?? 0}
          list={dataMap[activeList] ?? []}
          fadeOut={false}
        />
      </div>
    </>
  );
}

export { Playlists };
