import { createContext, useState, useContext, useEffect, useRef } from "react";
import { useCurrentTrack } from "./CurrentTrackContext";

const DurationContext = createContext();

export function DurationProvider({ children }) {
  const { currentTrack, isPlaying } = useCurrentTrack();

  const [trackDuration, setTrackDuration] = useState(null);
  const [currentDuration, setCurrentDuration] = useState(null);
  const [displayDuration, setDisplayDuration] = useState(null);
  const [displayReversedDuration, setDisplayReversedDuration] = useState(null);
  const startRef = useRef(0);

  useEffect(() => {
    if (!currentTrack) return;
    const minutes = Math.floor(currentTrack.duration);
    const seconds = Math.floor((currentTrack.duration - minutes) * 100);
    setTrackDuration(minutes * 60 + seconds);
    startRef.current = 0; // resets when current track changes.
    setCurrentDuration(0);
  }, [currentTrack]);

  useEffect(() => {
    if (!currentTrack || !trackDuration) return;

    let id;
    if (isPlaying) {
      id = setInterval(() => {
        if (startRef.current >= trackDuration) {
          clearInterval(id);
          return;
        }
        startRef.current += 1;
        setCurrentDuration(startRef.current);
      }, 1000);
    }
    return () => clearInterval(id);
  }, [isPlaying, currentTrack]);

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

  function resetDuration() {
    startRef.current = 0;
    setCurrentDuration(0);
  }
  // useEffect(() => {
  //   if (!currentTrack) return;

  //   let id;
  //   if (isPlaying) {
  //     setStart(0);
  //     setPause(false);
  //     id = setInterval(() => {
  //       if (start >= currentTrack.duration) clearInterval(id);
  //       else setStart((prev) => prev + 1);
  //       console.log("count ", start);
  //     }, 1000);
  //   } else if (paused) {
  //     clearInterval(id);
  //     setCurrentDuration(start);
  //     console.log("paused at: ", currentDuration);
  //     if (!paused) {
  //       id = currentDuration;
  //       currentDuration = setInterval(() => {
  //         if (currentDuration >= currentTrack.duration) clearInterval(id);
  //       });
  //     }
  //   }

  //   return () => clearInterval(id);
  // }, [isPlaying, currentTrack]);

  // function countUp() {
  //   let start = 0;
  //   let id = setInterval(frame, 1000);
  //   function frame() {
  //     if (start === currentDuration) clearInterval(id);
  //     else start++;
  //     console.log("count up: ", start);
  //   }
  // }

  // function countDown() {
  //   let start = currentDuration;
  //   let id = setInterval(frame, 1000);
  //   function frame() {
  //     if (start === 0) clearInterval(id);
  //     else start--;
  //     console.log("count down: ", start);
  //   }
  // }
  // countUp();
  // countDown();
  // console.log(currentDuration);
  // translateDuration(currentDuration);
  // console.log(currentDuration);

  // function startCountUp() {
  //   let start = 0;
  //   const id = setInterval(frame, 1000);
  //   function frame() {
  //     if (start === currentDuration) clearInterval(id);
  //     else start++;
  //     console.log(start);
  //   }
  // }

  // startCountUp();

  // function countDown(duration, display) {
  //   let timer = currentDuration,
  //     minutes,
  //     seconds;
  //   setInterval(function () {
  //     minutes = parseInt(duration / 60, 10);
  //     seconds = parseInt(duration % 60, 10);

  //     minutes = minutes < 10 ? "0" + minutes : minutes;
  //     seconds = seconds < 10 ? "0" + seconds : seconds;

  //     display = `${minutes}:${seconds}`;
  //   }, 1000);
  // }

  return (
    <DurationContext.Provider
      value={{
        displayDuration,
        displayReversedDuration,
        currentDuration,
        trackDuration,
        resetDuration,
      }}
    >
      {children}
    </DurationContext.Provider>
  );
}

export function useDuration() {
  return useContext(DurationContext);
}
