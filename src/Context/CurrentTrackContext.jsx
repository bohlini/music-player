import { createContext, useState, useEffect, useContext } from "react";
import { useTracks } from "./TracksContext";
import { useThemes } from "./ThemeContext";

const CurrentTrackContext = createContext();

export function CurrentTrackProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState();
  const [isPlaying, setIsPlaying] = useState(true);
  const { setCurrentTheme } = useThemes();
  const { tracks } = useTracks();

  useEffect(() => {
    if (!currentTrack && tracks?.length > 0) {
      setCurrentTrack(tracks[0]);
      setCurrentTheme(tracks[0].theme);
      setIsPlaying(false);
    }
  }, [tracks]);

  function focusTrack(track) {
    setCurrentTrack(track);
    setCurrentTheme(track.theme);
    setIsPlaying(true);
  }

  return (
    <CurrentTrackContext.Provider
      value={{
        setCurrentTrack,
        currentTrack,
        focusTrack,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </CurrentTrackContext.Provider>
  );
}

export function useCurrentTrack() {
  return useContext(CurrentTrackContext);
}
