import { Text } from "../../Typography/Text";
import { TrackCard } from "../../Card/TrackCard/TrackCard";
import { TrackInfo } from "../TrackInfo/TrackInfo";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { PlaybackMenu } from "../PlaybackMenu/PlaybackMenu";
import { QueueList } from "../../List/QueueList/QueueList";
import { useThemes } from "../../Context/ThemeContext";
import { useWindowWidth } from "../../Hooks/useWindowWidth";
import styles from "./NowPlayingPlayer.module.css";
import { IoColorFill } from "react-icons/io5";
import { useQueue } from "../../Context/QueueContext";

function NowPlayingPlayer({ variant }) {
  const { currentTheme, isLoading } = useThemes();
  const { queue } = useQueue();
  const { windowWidth } = useWindowWidth();

  const smallWindow = windowWidth <= 1100;

  return (
    <>
      <div className={styles.nowPlayingContainer}>
        <div>
          <Text type="label" className={styles.title}>
            Now playing
          </Text>
          <TrackCard currentTheme={currentTheme} variant={variant} />
          <div className={styles.info}>
            <TrackInfo variant={variant} />
          </div>
          <div className={styles.controls}>
            <ProgressBar currentTheme={currentTheme} variant={variant} />
            <PlaybackMenu currentTheme={currentTheme} variant={variant} />
          </div>
        </div>
        {!smallWindow && (
          <div>
            <Text type="label" className={styles.title}>
              Coming up
            </Text>
            <div>
              <QueueList limit={9} list={queue} fadeOut={true} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export { NowPlayingPlayer };
