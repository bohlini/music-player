import TrackCard from "./TrackCard/TrackCard";
import PlaybackMenu from "./PlaybackMenu/PlaybackMenu";
import ProgressBar from "./ProgressBar/ProgressBar";
import styles from "./PlayerContainer.module.css";
import { useThemes } from "../../Context/ThemeContext";
import { useCurrentTrack } from "../../Context/CurrentTrackContext";
import DeviceSelector from "./DeviceSelector.jsx/DeviceSelector";

export default function PlayerContainer({ variant }) {
  const { currentTheme } = useThemes();
  const { currentTrack } = useCurrentTrack();

  if (!currentTheme || !currentTrack) {
    return <p>Loading...</p>;
  } else
    return (
      <div className={`${styles[variant] || ""}`}>
        <TrackCard currentTheme={currentTheme} variant={variant} />
        <PlaybackMenu currentTheme={currentTheme} variant={variant} />
        <ProgressBar currentTheme={currentTheme} variant={variant} />
        <DeviceSelector currentTheme={currentTheme} variant={variant} />
      </div>
    );
}
