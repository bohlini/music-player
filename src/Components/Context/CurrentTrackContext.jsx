import { createContext, useState, useEffect, useContext } from "react";
import { useTracks } from "./TracksContext";
import { useThemes } from "./ThemeContext";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const CurrentTrackContext = createContext();

function CurrentTrackProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { setCurrentTheme } = useThemes();
  const { tracks } = useTracks();
  const [storedValue, setStoredValue] = useLocalStorage("currentTrack", null);

  useEffect(() => {
    if (!currentTrack && tracks?.length > 0) {
      const track = storedValue || tracks[0];
      setCurrentTrack(track);
      setCurrentTheme(track.theme);
      setIsPlaying(false);
    }
  }, [tracks]);

  function focusTrack(track) {
    if (!track) return;
    setStoredValue(track);
    setCurrentTrack(track);
    setCurrentTheme(track.theme);
    setIsPlaying(true);
  }

  useEffect(() => {
    if (!currentTrack) return;
    const index = tracks.findIndex(
      (track) => track.title === currentTrack.title,
    );
    setCurrentIndex(index);
  }, [currentTrack]);

  function handlePlay() {
    setIsPlaying((prevState) => !prevState);
  }

  //make const value and wrap in useMemo (or in fetch Hook??)
  return (
    <CurrentTrackContext.Provider
      value={{
        setCurrentTrack,
        currentTrack,
        focusTrack,
        isPlaying,
        setIsPlaying,
        handlePlay,
        currentIndex,
        setCurrentIndex,
      }}
    >
      {children}
    </CurrentTrackContext.Provider>
  );
}

function useCurrentTrack() {
  return useContext(CurrentTrackContext);
}

export { CurrentTrackProvider, useCurrentTrack };
