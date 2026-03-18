import IconButton from "../../Button/IconButton";
import { MdPlayArrow } from "react-icons/md";
import { RxPause } from "react-icons/rx";
import { IoPlaySkipBackOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { IoShuffleOutline } from "react-icons/io5";
import { IoRefresh } from "react-icons/io5";
import { useState } from "react";
import { useCurrentTrack } from "../../../Context/CurrentTrackContext";
import styles from "./PlaybackMenu.module.css";

export default function PlaybackMenu({ currentTheme }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const { focusTrack } = useCurrentTrack();

  function handlePlay() {
    setIsPlaying((prevState) => !prevState);
    // focusTrack(track);
  }

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
          onClick={placeHolderFunction}
        />
        <IconButton
          icon={isPlaying ? <MdPlayArrow /> : <RxPause />}
          size="large"
          currentTheme={currentTheme}
          onClick={handlePlay}
        />
        <IconButton
          icon={<IoPlaySkipForwardOutline />}
          size="small"
          onClick={placeHolderFunction}
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
