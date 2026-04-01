import {
  createContext,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [storedValue, setStoredValue] = useLocalStorage("Favorites", []);
  const [favorites, setFavorites] = useState(storedValue);

  const setLike = useCallback((track) => {
    setFavorites((prev) =>
      prev.find((t) => t.title === track.title)
        ? prev.filter((t) => t.title !== track.title)
        : [...prev, track],
    );
  }, []);

  const isLiked = useCallback(
    (track) => {
      return favorites.some((t) => t.title === track.title);
    },
    [favorites],
  );

  useEffect(() => {
    setStoredValue(favorites);
  }, [favorites]);

  const values = {
    favorites,
    setFavorites,
    isLiked,
    setLike,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorites() {
  return useContext(FavoritesContext);
}

export { FavoritesProvider, useFavorites };
