import styles from "./Navbar.module.css";
import { NavLink } from "react-router";

//ADD TEXT
function Navbar() {
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

export { Navbar };
