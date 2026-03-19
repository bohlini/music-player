import { createContext, useState, useEffect, useContext } from "react";
import { useFetch } from "../Hooks/useFetch";

const TracksContext = createContext();

export function TracksProvider({ children }) {
  const [tracks, setTracks] = useState([]);
  const [shuffled, setShuffled] = useState(false);

  const { data } = useFetch("https://api-database-c4.vercel.app/songs/");

  useEffect(() => {
    if (!data) return;
    setTracks(data);
  }, [data]);

  useEffect(() => {
    if (shuffled) console.log("shuffled");
  }, [shuffled]);

  return (
    <TracksContext.Provider value={{ tracks }}>
      {children}
    </TracksContext.Provider>
  );
}

export function useTracks() {
  return useContext(TracksContext);
}
