import { createContext, useEffect, useState, useContext } from "react";
import { useTracks } from "./TracksContext";
import { useCurrentTrack } from "./CurrentTrackContext";

const QueueContext = createContext();

function QueueProvider({ children }) {
  const { tracks, isLoading } = useTracks();
  const { currentTrack, currentIndex, setCurrentIndex } = useCurrentTrack();

  const [queue, setQueue] = useState(tracks);

  useEffect(() => {
    if (!currentTrack || !tracks.length) return;

    const index = tracks.findIndex(
      (track) => track.title === currentTrack.title,
    );
    setCurrentIndex(index);

    const rotation = [...tracks.slice(index + 1), ...tracks.slice(0, index)];
    setQueue(rotation);
  }, [currentTrack, tracks]);

  const values = {
    queue,
  };

  return (
    <QueueContext.Provider value={values}>{children}</QueueContext.Provider>
  );
}

function useQueue() {
  return useContext(QueueContext);
}

export { QueueProvider, useQueue };
