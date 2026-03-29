import { Text } from "../Typography/Text";
import { HomePlayer } from "./HomePlayer/HomePlayer";
import { NowPlayingPlayer } from "./NowPlayingPlayer/NowPlayingPlayer";
import { PlaylistsPlayer } from "./PlaylistsPlayer/PlaylistsPlayer";
import { useThemes } from "../Context/ThemeContext";
import styles from "./PlayerContainer.module.css";

function PlayerContainer({ variant }) {
  const { isLoading } = useThemes();

  if (isLoading) return <Text type="meta">Loading...</Text>;
  else
    return (
      <div className={styles.container}>
        <div className={`${styles[variant] || ""}`}>
          {variant === "home" ? (
            <HomePlayer variant={variant} />
          ) : variant === "playlists" ? (
            <PlaylistsPlayer variant={variant} />
          ) : variant === "nowPlaying" ? (
            <NowPlayingPlayer variant={variant} />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
}

export { PlayerContainer };
