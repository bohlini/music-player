import CurrentTrackCard from "../../../Components/Card/TrackCard/CurrentTrackCard";
import { useCurrentTrack } from "../../../Context/CurrentTrackContext";
import { useThemes } from "../../../Context/ThemeContext";

export default function Queue({ variant }) {
  const { currentTrack } = useCurrentTrack();
  const { currentTheme } = useThemes();
  return (
    <div>
      <CurrentTrackCard
        currentTheme={currentTheme}
        variant={variant}
        type="queue"
      />
    </div>
  );
}
