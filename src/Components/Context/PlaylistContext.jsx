import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { useFavorites } from "./FavoritesContext";
import { useTracks } from "./TracksContext";
import { useQueue } from "./QueueContext";
import mockPlaylists from "../../mockData/mockPlaylists.json";
import mockImages from "../../mockData/mockImages.json";

const PlaylistContext = createContext();

function PlaylistProvider({ children }) {
  const { favorites } = useFavorites();
  const { tracks } = useTracks();
  const { queue } = useQueue();
  const { newPlaylistUrl } = mockImages.URLs;

  const [playlists, setPlaylists] = useState(mockPlaylists.playlists);
  const [activeList, setActiveList] = useState("favorites");

  const dataMap = useMemo(
    () => ({
      favorites,
      tracks,
      queue,
    }),
    [favorites, tracks, queue],
  );

  const listMap = useMemo(() => {
    return Object.fromEntries(
      playlists.map((playlist) => [playlist.name, playlist.id]),
    );
  }, [playlists]);

  const addPlaylist = useCallback(() => {
    if (!playlists) return;
    const updatedPlaylists = [
      {
        name: `My Playlist ${playlists.length + 1}`,
        id: crypto.randomUUID(),
        cover: newPlaylistUrl,
        amount: 0,
      },
      ...playlists,
    ];
    setPlaylists(updatedPlaylists);
  }, [playlists]);

  const changePlayList = useCallback((playlist) => {
    if (!playlist) return;
    setActiveList(playlist);
  }, []);

  const deletePlaylist = useCallback(
    (name) => {
      if (!playlists) return;
      const updatedPlaylist = playlists.filter((list) => list.name !== name);
      setPlaylists(updatedPlaylist);
    },
    [playlists],
  );

  const renamePlaylist = useCallback(
    (oldName, newName) => {
      if (!newName.trim()) return;
      const updatedPlaylist = playlists.map((playlist) =>
        playlist.name === oldName ? { ...playlist, name: newName } : playlist,
      );
      setPlaylists(updatedPlaylist);
    },
    [playlists],
  );

  const values = {
    playlists,
    activeList,
    addPlaylist,
    changePlayList,
    deletePlaylist,
    renamePlaylist,
    dataMap,
    listMap,
  };

  return (
    <PlaylistContext.Provider value={values}>
      {children}
    </PlaylistContext.Provider>
  );
}

function usePlaylist() {
  return useContext(PlaylistContext);
}

export { PlaylistProvider, usePlaylist };
