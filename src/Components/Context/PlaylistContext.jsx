import { createContext, useState, useContext, useMemo } from "react";
import { useFavorites } from "./FavoritesContext";
import { useTracks } from "./TracksContext";
import { useQueue } from "./QueueContext";
import mockPlaylists from "../../mockData/mockPlaylists.json";

const PlaylistContext = createContext();

function PlaylistProvider({ children }) {
  const { favorites } = useFavorites();
  const { tracks } = useTracks();
  const { queue } = useQueue();

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

  // const listMap = {
  //   Favorites: "favorites",
  //   "My Playlist": "tracks",
  //   "My Playlist 2": "empty",
  // };

  function addPlaylist() {
    if (!playlists) return;
    const updatedPlaylists = [
      ...playlists,
      {
        name: `My Playlist ${playlists.length}`,
        id: "tracks",
        cover:
          "https://images.unsplash.com/photo-1672073314527-cd2d83182992?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        amount: tracks.length,
      },
    ];
    setPlaylists(updatedPlaylists);
  }

  function changePlayList(playlist) {
    if (!playlist) return;
    setActiveList(playlist);
  }

  function deletePlaylist(name) {
    if (!playlists) return;
    const updatedPlaylist = playlists.filter((list) => list.name !== name);
    setPlaylists(updatedPlaylist);
  }

  const values = {
    playlists,
    activeList,
    addPlaylist,
    changePlayList,
    deletePlaylist,
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
