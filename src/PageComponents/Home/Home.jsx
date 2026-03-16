import { useSongs, getTrackTrait } from "../../Context/SongsContext";
import IconButton from "../../Components/Button/IconButton";
import { useTheme } from "../../Context/ThemeContext";
import { RxPause } from "react-icons/rx";
import TrackCard from "../../Components/TrackCard/TrackCard";

export default function Home() {
  const { songs } = useSongs();
  console.log("songs: ", songs);
  return (
    <>
      <div>
        <IconButton
          icon={<RxPause />}
          size="large"
          theme="orange"
          // shadow="inset -7.16px 10.74px 45px 10.59px #E3522F"
          onClick={() => console.log("clicked")}
        />
        <h1>Home</h1>
      </div>
    </>
  );
}
