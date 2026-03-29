import { createContext, useState, useEffect, useContext } from "react";
import { useFetch } from "../Hooks/useFetch";

const TracksContext = createContext();

function TracksProvider({ children }) {
  const [tracks, setTracks] = useState([]);

  const { data, isLoading } = useFetch(
    "https://api-database-c4.vercel.app/songs/",
  );

  useEffect(() => {
    if (isLoading) return;
    setTracks(data);
  }, [data]);

  return (
    <TracksContext.Provider value={{ tracks }}>
      {children}
    </TracksContext.Provider>
  );
}

function useTracks() {
  return useContext(TracksContext);
}

export { TracksProvider, useTracks };
