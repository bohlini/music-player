import { useQueue } from "../../Context/QueueContext";
import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import { useTracks } from "../../Context/TracksContext";
import { TrackCard } from "../../Card/TrackCard/TrackCard";
import { TrackInfo } from "../../TrackInfo/TrackInfo";
import { ProgressBar } from "../../ProgressBar/ProgressBar";
import { PlaybackMenu } from "../../PlaybackMenu/PlaybackMenu";
import { QueueList } from "../../List/QueueList/QueueList";
import { Text } from "../../Text/Text";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import styles from "./NowPlaying.module.css";

function NowPlaying() {
  const { isLoading } = useTracks();
  const { currentTheme } = useCurrentTrack();
  const { queue } = useQueue();
  const { windowWidth } = useWindowWidth();

  const smallWindow = windowWidth <= 1100;

  if (isLoading) return <Text type="meta">Loading...</Text>;
  return (
    <>
      <div className={styles.nowPlayingContainer}>
        <div>
          <TrackCard currentTheme={currentTheme} variant="nowPlaying" />
          <div className={styles.info}>
            <TrackInfo />
          </div>
          <div className={styles.controls}>
            <ProgressBar currentTheme={currentTheme} variant="nowPlaying" />
            <PlaybackMenu currentTheme={currentTheme} variant="nowPlaying" />
          </div>
        </div>
        {!smallWindow && (
          <div className={styles.rightSide}>
            <QueueList limit={8} list={queue} fadeOut={true} />
          </div>
        )}
      </div>
    </>
  );
}

export { NowPlaying };
