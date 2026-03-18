import styles from "./Navbar.module.css";
import { NavLink } from "react-router";
import { useThemes } from "../../Context/ThemeContext";

export default function Navbar() {
  return (
    <nav className={styles.list}>
      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/nowPlaying">Now playing</NavLink>
        </li>
        <li>
          <NavLink to="/playlists">Playlists</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}
