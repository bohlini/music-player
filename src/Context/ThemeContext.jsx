import { createContext, useState, useEffect, useContext } from "react";
import { useFetch } from "../Hooks/useFetch";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themes, setThemes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState(null);

  const { data } = useFetch("https://api-database-c4.vercel.app/songs/");

  useEffect(() => {
    if (!data) return;
    const extractedThemes = data.map((dataObj) => dataObj.theme);
    setThemes(extractedThemes);
  }, [data]);

  return (
    <ThemeContext.Provider value={{ themes, currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemes() {
  return useContext(ThemeContext);
}
