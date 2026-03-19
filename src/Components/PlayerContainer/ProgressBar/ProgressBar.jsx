import styles from "./ProgressBar.module.css";
import { useCurrentTrack } from "../../../Context/CurrentTrackContext";
import { useEffect } from "react";

export default function ProgressBar({ currentTheme, variant }) {
  const { currentTrack, isPlaying } = useCurrentTrack();
  const duration = currentTrack.duration;
  console.log(duration);

  useEffect(() => {
    console.log("isPlaying changed:", isPlaying);
  }, [isPlaying]);

  return (
    <>
      <div className={`${styles[variant] || " "}`}>
        <p>Ppp</p>
        <div className={styles.backBar}></div>
      </div>
    </>
  );
}
