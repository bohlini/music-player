import { usePlaylist } from "../../Context/PlaylistContext";
import { Text } from "../../Text/Text";

function PlaylistTabs() {
  const { listMap, changePlayList, activeList } = usePlaylist();

  function displayTabs() {
    if (!listMap) return null;
    const items = Object.entries(listMap).map(([name, key], index) => (
      <li key={index}>
        <Text
          type="tab"
          onClick={() => {
            changePlayList(key);
          }}
          style={{
            color: activeList === key ? "#eee" : "",
            cursor: "pointer",
          }}
        >
          {name}
        </Text>
      </li>
    ));
    return [
      <li key="Favorites">
        <Text
          type="tab"
          onClick={() => {
            changePlayList("favorites");
          }}
          style={{ color: activeList === "favorites" ? "#eee" : "" }}
        >
          Favorites
        </Text>
      </li>,
      ...items,
    ];
  }
  return <>{displayTabs()}</>;
}

export { PlaylistTabs };
