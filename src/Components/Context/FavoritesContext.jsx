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

  // REVIEW: Track identity is matched by `title` instead of a unique ID (`_id`). If two tracks share the same title, toggling one removes/adds both.
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

  // REVIEW: `setStoredValue` is missing from the dependency array — React will warn about exhaustive-deps.
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
