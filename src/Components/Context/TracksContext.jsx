import { createContext, useState, useEffect, useContext } from "react";
import { useFetch } from "../Hooks/useFetch";

const TracksContext = createContext();

function TracksProvider({ children }) {
  const [tracks, setTracks] = useState([]);

  const { data, isLoading } = useFetch(
    "https://api-database-c4.vercel.app/songs/",
  );

  // REVIEW: Missing `isLoading` in the dependency array — React will warn about this. Add it to the array or restructure the logic.
  useEffect(() => {
    if (isLoading) return;
    setTracks(data);
  }, [data]);

  // REVIEW: `isLoading` is not included in the context value, but NowPlaying.jsx and Playlists.jsx destructure `isLoading` from `useTracks()`. It will always be `undefined`, so loading guards in those components silently never trigger. Add `isLoading` here.
  const values = {
    tracks,
  };

  return (
    <TracksContext.Provider value={values}>{children}</TracksContext.Provider>
  );
}

function useTracks() {
  return useContext(TracksContext);
}

export { TracksProvider, useTracks };
