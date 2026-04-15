import {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { useTracks } from "./TracksContext";
import { useCurrentTrack } from "./CurrentTrackContext";

const DurationContext = createContext();

function DurationProvider({ children }) {
  const { currentTrack, isPlaying, focusTrack } = useCurrentTrack();
  const { tracks } = useTracks();

  const [trackDuration, setTrackDuration] = useState(null);
  const [currentDuration, setCurrentDuration] = useState(null);
  const [displayDuration, setDisplayDuration] = useState(null);
  const [displayReversedDuration, setDisplayReversedDuration] = useState(null);

  const startRef = useRef(0);
  const tracksRef = useRef(tracks);
  const currentTrackRef = useRef(currentTrack);
  const focusTrackRef = useRef(focusTrack);

  useEffect(() => {
    tracksRef.current = tracks;
  }, [tracks]);

  useEffect(() => {
    currentTrackRef.current = currentTrack;
  }, [currentTrack]);

  useEffect(() => {
    focusTrackRef.current = focusTrack;
  }, [focusTrack]);

  useEffect(() => {
    if (!currentTrack) return;
    // REVIEW: Duration format assumes `2.25` means 2 min 25 sec (multiplying the decimal by 100). This is non-standard — if the API returns `3.5` meaning 3 min 50 sec, the math would be wrong (it'd calculate 3 min 50 sec correctly by accident, but `3.09` would compute to 9 sec, and `3.1` to 10 sec instead of 6 sec). Document the expected format or use a standard like total seconds.
    const minutes = Math.floor(currentTrack.duration);
    const seconds = Math.floor((currentTrack.duration - minutes) * 100);
    setTrackDuration(minutes * 60 + seconds);
    startRef.current = 0;
    setCurrentDuration(0);
  }, [currentTrack]);

  useEffect(() => {
    if (!currentTrack || !trackDuration) return;

    let id;
    if (isPlaying) {
      id = setInterval(() => {
        if (startRef.current >= trackDuration) {
          clearInterval(id);
          startRef.current = 0;
          const currentIndex = tracksRef.current.findIndex(
            (track) => track.title === currentTrackRef.current.title,
          );
          const nextTrack = tracksRef.current[currentIndex + 1]
            ? tracksRef.current[currentIndex + 1]
            : tracksRef.current[0];
          if (!nextTrack) return;
          focusTrackRef.current(nextTrack);
          return;
        }
        startRef.current += 1;
        setCurrentDuration(startRef.current);
      }, 1000);
    }
    return () => clearInterval(id);
  }, [isPlaying, currentTrack, trackDuration]);

  useEffect(() => {
    const minutes = Math.floor(currentDuration / 60);
    const seconds = currentDuration % 60;

    startRef.current === 0
      ? setDisplayDuration(0)
      : setDisplayDuration(
          `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`,
        );
  }, [currentDuration]);

  useEffect(() => {
    if (trackDuration === null || currentDuration === null) return;
    const remaining = trackDuration - currentDuration;
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;

    setDisplayReversedDuration(
      `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`,
    );
  }, [currentDuration, trackDuration]);

  const resetDuration = useCallback(() => {
    startRef.current = 0;
    setCurrentDuration(0);
  }, []);

  const values = {
    displayDuration,
    displayReversedDuration,
    currentDuration,
    trackDuration,
    resetDuration,
  };

  return (
    <DurationContext.Provider value={values}>
      {children}
    </DurationContext.Provider>
  );
}

function useDuration() {
  return useContext(DurationContext);
}

export { DurationProvider, useDuration };
