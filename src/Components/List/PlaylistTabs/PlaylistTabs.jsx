import { usePlaylist } from "../../Context/PlaylistContext";
import { useThemes } from "../../Context/ThemeContext";
import { Text } from "../../Typography/Text";

function PlaylistTabs() {
  const { playlists, listMap, dataMap, changePlayList, activeList } =
    usePlaylist();
  const { currentTheme } = useThemes();

  function displayTabs() {
    if (!listMap || !currentTheme) return;
    const items = Object.entries(listMap).map(([name, key], index) => (
      <li key={index}>
        <Text
          type="label"
          onClick={() => {
            changePlayList(key);
          }}
        >
          {name}
        </Text>
      </li>
    ));
    return items;
  }

  return <>{displayTabs()}</>;
}

export { PlaylistTabs };
