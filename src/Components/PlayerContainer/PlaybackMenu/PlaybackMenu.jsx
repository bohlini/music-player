import IconButton from "../../Button/IconButton";
import { MdPlayArrow } from "react-icons/md";
import { RxPause } from "react-icons/rx";
import { IoPlaySkipBackOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { IoShuffleOutline } from "react-icons/io5";
import { IoRefresh } from "react-icons/io5";
import { useState } from "react";
import { useCurrentTrack } from "../../../Context/CurrentTrackContext";
import { useTracks } from "../../../Context/TracksContext";
import styles from "./PlaybackMenu.module.css";

export default function PlaybackMenu({ currentTheme }) {
  const { isPlaying, setIsPlaying, currentTrack, focusTrack } =
    useCurrentTrack();
  const { tracks } = useTracks();

  function handlePlay() {
    setIsPlaying((prevState) => !prevState);
  }

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

  function shuffle() {}

  function placeHolderFunction() {
    console.log("clicked");
  }
  return (
    <>
      <div className={styles.container}>
        <IconButton
          icon={<IoShuffleOutline />}
          size="small"
          onClick={placeHolderFunction}
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
          onClick={placeHolderFunction}
        />
      </div>
    </>
  );
}
