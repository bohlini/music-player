import { createContext, useState, useEffect, useContext, useMemo } from "react";
import { useFetch } from "../Hooks/useFetch";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [themes, setThemes] = useState([]);
  const [currentTheme, setCurrentTheme] = useState(null);

  const { data, isLoading } = useFetch(
    "https://api-database-c4.vercel.app/songs/",
  );
  // const { storedValue, setStoredValue } = useLocalStorage("currentTheme", null); //We'll see if this is needed

  useEffect(() => {
    if (isLoading) return;
    const extractedThemes = data.map((dataObj) => dataObj.theme);
    setThemes(extractedThemes);
  }, [data]);

  // const values = useMemo(() => {
  //   themes, currentTheme, setCurrentTheme
  // })

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useThemes() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useThemes };
