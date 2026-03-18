import { useThemes } from "../../Context/ThemeContext";
import PlayerContainer from "../../Components/PlayerContainer/PlayerContainer";
import PlayListCard from "../../Components/PlayListCard/PlayListCard";

export default function Home() {
  const { currentTheme } = useThemes();
  return (
    <>
      <div>
        <PlayerContainer />
        <PlayListCard />
        <h1>Home</h1>
      </div>
    </>
  );
}
