import { createContext, useState, useEffect, useContext } from "react";

const SongsContext = createContext();

export function SongsProvider({ children }) {
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    fetch("https://api-database-c4.vercel.app/songs/")
      .then((response) => response.json())
      .then((data) => setSongs(data));
  }, []);

  return (
    <SongsContext.Provider value={{ songs }}>{children}</SongsContext.Provider>
  );
}

export function useSongs() {
  return useContext(SongsContext);
}
