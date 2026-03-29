import styles from "./NowPlaying.module.css";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import { useTracks } from "../../Context/TracksContext";
import { useQueue } from "../../Context/QueueContext";
import { Text } from "../../Typography/Text";

function NowPlaying() {
  const windowWidth = useWindowWidth();
  const smallWindow = windowWidth <= 1245;

  const { tracks, isLoading } = useTracks();
  const { queue } = useQueue();
  // if (smallWindow) return <></>;
  // else
  if (isLoading) return <Text type="meta">Loading...</Text>;
  return <></>;
}

export { NowPlaying };
