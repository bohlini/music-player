import { useState, useEffect } from "react";

// REVIEW: The resize handler fires on every pixel change with no debounce/throttle — this causes excessive re-renders in every component that uses this hook (MainLayout, Navbar, NowPlaying, TrackCard). Add a debounce (e.g. 150ms) to reduce re-render frequency.
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function resizeWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", resizeWindowWidth);

    return () => window.removeEventListener("resize", resizeWindowWidth);
  }, []);

  return { windowWidth };
}

export { useWindowWidth };
