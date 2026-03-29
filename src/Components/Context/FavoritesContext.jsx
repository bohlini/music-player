import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [storedValue, setStoredValue] = useLocalStorage("Favorites", []);
  const [favorites, setFavorites] = useState(storedValue);

  function setLike(track) {
    setFavorites((prev) =>
      prev.find((t) => t.title === track.title)
        ? prev.filter((t) => t.title !== track.title)
        : [...prev, track],
    );
  }

  function isLiked(track) {
    return favorites.some((t) => t.title === track.title);
  }

  useEffect(() => {
    setStoredValue(favorites);
  }, [favorites]);

  // const values = useMemo(() => {
  //   favorites, setFavorites, isLiked
  // }, [])

  return (
    <FavoritesContext.Provider
      value={{ favorites, setFavorites, isLiked, setLike }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  return useContext(FavoritesContext);
}

export { FavoritesProvider, useFavorites };
