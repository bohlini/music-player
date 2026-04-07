import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import { useQueue } from "../../Context/QueueContext";
import { QueueCard } from "../../Card/QueueCard/QueueCard";
import { Text } from "../../Text/Text";
import styles from "./QueueList.module.css";

function QueueList({ limit, list, fadeOut }) {
  const { queue } = useQueue();
  const { currentTheme, focusTrack } = useCurrentTrack();

  const cutOffArray = list ? list.slice(0, limit || list.length) : queue;

  function displayList() {
    if (!cutOffArray || !currentTheme) return null;
    const items = cutOffArray.map((track, index) => (
      <li key={index}>
        <div
          className={styles.listWrap}
          onClick={() => focusTrack(track)}
          style={
            fadeOut
              ? {
                  maskImage: `linear-gradient(to right, black 40%, transparent 100%)`,
                  WebkitMaskImage: `linear-gradient(to right, black 40%, transparent 100%)`,
                }
              : {
                  maskImage: `linear-gradient(to right, black 10%, transparent 80%)`,
                  WebkitMaskImage: `linear-gradient(to right, black 10%, transparent 80%)`,
                }
          }
        >
          <div>
            <QueueCard src={track} />
          </div>
          <div className={styles.trackInfo}>
            <Text type="smallTitle">{track.title}</Text>
            <Text type="smallArtist">{track.artist}</Text>
          </div>
        </div>
      </li>
    ));
    return items;
  }

  return (
    <>
      <div className={styles.listContainer}>
        <ul
          style={
            fadeOut
              ? {
                  maskImage: `linear-gradient(to bottom, black 50%, transparent 100%)`,
                  WebkitMaskImage: `linear-gradient(to bottom, black 50%, transparent 100%`,
                }
              : {}
          }
        >
          {displayList()}
        </ul>
      </div>
    </>
  );
}

export { QueueList };
