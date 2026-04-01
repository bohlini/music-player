import { createContext, useState, useEffect, useContext, useMemo } from "react";
import { useTracks } from "./TracksContext";
import { useFetch } from "../Hooks/useFetch";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themes, setThemes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState(null);

  const { tracks, isLoading } = useTracks();

  useEffect(() => {
    if (isLoading) return;
    const extractedThemes = tracks.map((track) => track.theme);
    setThemes(extractedThemes);
  }, [tracks]);

  const values = {
    currentTheme,
    setCurrentTheme,
    themes,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

function useThemes() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useThemes };
