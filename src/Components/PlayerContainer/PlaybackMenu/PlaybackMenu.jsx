import IconButton from "../../Button/IconButton";
import { MdPlayArrow } from "react-icons/md";
import { RxPause } from "react-icons/rx";
import { IoPlaySkipBackOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { IoShuffleOutline } from "react-icons/io5";
import { IoRefresh } from "react-icons/io5";
import { useCurrentTrack } from "../../../Context/CurrentTrackContext";
import { useTracks } from "../../../Context/TracksContext";
import { useDuration } from "../../../Context/DurationContext";
import styles from "./PlaybackMenu.module.css";

export default function PlaybackMenu({ currentTheme, variant }) {
  const { isPlaying, currentTrack, focusTrack, handlePlay } = useCurrentTrack();
  const { tracks, setShuffled } = useTracks();
  const { setCurrentDuration, currentDuration, resetDuration } = useDuration();

  function nextTrack() {
    const index = tracks.indexOf(currentTrack);
    if (tracks[index + 1]) focusTrack(tracks[index + 1]);
    else focusTrack(tracks[0]);
  }

  function previusTrack() {
    const index = tracks.indexOf(currentTrack);
    if (tracks[index - 1]) focusTrack(tracks[index - 1]);
    else focusTrack(tracks[tracks.length - 1]);
  }

  function shuffle() {
    setShuffled((prevState) => !prevState);
  }

  return (
    <>
      {variant === "playlists" ? (
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
            <IconButton
              icon={<IoShuffleOutline />}
              size="small"
              onClick={resetDuration}
            />
            <IconButton icon={<IoRefresh />} size="small" onClick={reset} />
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <IconButton
            icon={<IoShuffleOutline />}
            size="small"
            onClick={shuffle}
          />
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
      )}
    </>
  );
}
