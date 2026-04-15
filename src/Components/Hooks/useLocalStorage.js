import { useState, useEffect } from "react";

// REVIEW: No try/catch around `JSON.parse` — if localStorage contains corrupted data, this will throw and crash the app. Wrap in try/catch and fall back to `initialValue`.
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const stored = localStorage.getItem(key);
    if (stored === "undefined") return initialValue;
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export { useLocalStorage };
