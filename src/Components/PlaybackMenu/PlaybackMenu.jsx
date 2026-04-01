import { MdPlayArrow } from "react-icons/md";
import { RxPause } from "react-icons/rx";
import { IoPlaySkipBackOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { IoShuffleOutline } from "react-icons/io5";
import { IoRefresh } from "react-icons/io5";
import { useCurrentTrack } from "../Context/CurrentTrackContext";
import { useTracks } from "../Context/TracksContext";
import { useDuration } from "../Context/DurationContext";
import { IconButton } from "../Button/Button";
import styles from "./PlaybackMenu.module.css";

function PlaybackMenu({ currentTheme, variant }) {
  const { isPlaying, focusTrack, handlePlay, currentIndex } = useCurrentTrack();
  const { tracks } = useTracks();
  const { resetDuration } = useDuration();

  function nextTrack() {
    if (currentIndex === null || !tracks) return;
    if (tracks[currentIndex + 1]) focusTrack(tracks[currentIndex + 1]);
    else focusTrack(tracks[0]);
  }

  function previusTrack() {
    if (currentIndex === null || !tracks) return;
    if (tracks[currentIndex - 1]) focusTrack(tracks[currentIndex - 1]);
    else focusTrack(tracks[tracks.length - 1]);
  }

  return (
    <>
      {variant === "nowPlaying" ? (
        <div className={styles.container}>
          <IconButton icon={<IoShuffleOutline />} size="small" />
          <IconButton
            icon={<IoPlaySkipBackOutline />}
            size="small"
            onClick={previusTrack}
          />
          <IconButton
            icon={isPlaying ? <RxPause /> : <MdPlayArrow />}
            size="large"
            currentTheme={currentTheme}
            onClick={handlePlay}
          />
          <IconButton
            icon={<IoPlaySkipForwardOutline />}
            size="small"
            onClick={nextTrack}
          />
          <IconButton
            icon={<IoRefresh />}
            size="small"
            onClick={resetDuration}
          />
        </div>
      ) : (
        <div className={styles.container}>
          <IconButton
            icon={isPlaying ? <RxPause /> : <MdPlayArrow />}
            size="large"
            currentTheme={currentTheme}
            onClick={handlePlay}
          />
          <div className={styles.smallBtnContainer}>
            <IconButton
              icon={<IoPlaySkipBackOutline />}
              size="small"
              onClick={previusTrack}
            />
            <IconButton
              icon={<IoPlaySkipForwardOutline />}
              size="small"
              onClick={nextTrack}
            />
            <IconButton icon={<IoShuffleOutline />} size="small" />
            <IconButton icon={<IoRefresh />} size="small" />
          </div>
        </div>
      )}
    </>
  );
}

export { PlaybackMenu };
