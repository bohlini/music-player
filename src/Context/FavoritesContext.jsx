import { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

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

  return (
    <FavoritesContext.Provider value={{ favorites, isLiked, setLike }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
