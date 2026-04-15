import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { IoMenu } from "react-icons/io5";
import { Text } from "../Text/Text";
import { useWindowWidth } from "../Hooks/useWindowWidth";
import styles from "./Navbar.module.css";

function Navbar() {
  const { windowWidth } = useWindowWidth();

  const mobileWindow = windowWidth <= 768;
  // REVIEW: `mobileNav` state is redundant — it always mirrors `mobileWindow`. Replace `mobileNav` with `mobileWindow` directly and remove the useEffect.
  const [mobileNav, setMobileNav] = useState(false);
  // REVIEW: Mobile menu doesn't close when a link is clicked — after navigating, the dropdown remains open until the user clicks the menu icon again.
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    mobileWindow ? setMobileNav(true) : setMobileNav(false);
  }, [mobileWindow]);

  if (mobileNav)
    return (
      <>
        <div className={styles.mobileNav}>
          <div className={styles.menuIcon}>
            <IoMenu onClick={() => setIsOpen(!isOpen)} />
          </div>

          {isOpen && (
            <div className={styles.dropDown}>
              <nav>
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? styles.activeLink : ""
                      }
                    >
                      <Text type="nav">Now Playing</Text>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/playlists"
                      className={({ isActive }) =>
                        isActive ? styles.activeLink : ""
                      }
                    >
                      <Text type="nav">Playlists</Text>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/profile"
                      className={({ isActive }) =>
                        isActive ? styles.activeLink : ""
                      }
                    >
                      <Text type="nav">Profile</Text>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </>
    );
  return (
    <nav className={styles.list}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <Text type="nav">Now Playing</Text>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playlists"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <Text type="nav">Playlists</Text>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <Text type="nav">Profile</Text>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
