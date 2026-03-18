import { createContext, useState, useEffect, useContext } from "react";
import { useTracks } from "./TracksContext";
import { useThemes } from "./ThemeContext";

const CurrentTrackContext = createContext();

export function CurrentTrackProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState();
  const { setCurrentTheme } = useThemes();
  const { tracks } = useTracks();

  useEffect(() => {
    if (!currentTrack && tracks?.length > 0) {
      setCurrentTrack(tracks[0]);
      setCurrentTheme(tracks[0].theme);
    }
  }, [tracks]);

  function focusTrack(track) {
    setCurrentTrack(track);
    setCurrentTheme(track.theme);
  }

  return (
    <CurrentTrackContext.Provider value={{ currentTrack, focusTrack }}>
      {children}
    </CurrentTrackContext.Provider>
  );
}

export function useCurrentTrack() {
  const context = useContext(CurrentTrackContext);
  if (!context) return;
  return context;
}
