import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { useTracks } from "./TracksContext";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const CurrentTrackContext = createContext();

function CurrentTrackProvider({ children }) {
  const { tracks } = useTracks();

  const [storedValue, setStoredValue] = useLocalStorage("currentTrack", null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTheme, setCurrentTheme] = useState(null);

  // REVIEW: `currentTrack` and `storedValue` are missing from the dependency array — React will warn about exhaustive-deps.
  useEffect(() => {
    if (!currentTrack && tracks?.length > 0) {
      const track = storedValue || tracks[0];
      setCurrentTrack(track);
      setCurrentTheme(track.theme);
      setIsPlaying(false);
    }
  }, [tracks]);

  // REVIEW: `setStoredValue` is missing from the useCallback dependency array — React will warn about exhaustive-deps.
  const focusTrack = useCallback((track) => {
    if (!track) return;
    setStoredValue(track);
    setCurrentTrack(track);
    setCurrentTheme(track.theme);
    setIsPlaying(true);
  }, []);

  // REVIEW: `tracks` is missing from the dependency array — if tracks change while currentTrack stays the same, the index won't update.
  // REVIEW: Track identity matched by `title` — same concern as other contexts. Use `_id` for reliable matching.
  useEffect(() => {
    if (!currentTrack) return;
    const index = tracks.findIndex(
      (track) => track.title === currentTrack.title,
    );
    setCurrentIndex(index);
  }, [currentTrack]);

  const handlePlay = useCallback(() => {
    setIsPlaying((prevState) => !prevState);
  }, []);

  const values = {
    setCurrentTrack,
    currentTrack,
    focusTrack,
    isPlaying,
    setIsPlaying,
    handlePlay,
    currentIndex,
    setCurrentIndex,
    currentTheme,
  };

  return (
    <CurrentTrackContext.Provider value={values}>
      {children}
    </CurrentTrackContext.Provider>
  );
}

function useCurrentTrack() {
  return useContext(CurrentTrackContext);
}

export { CurrentTrackProvider, useCurrentTrack };
