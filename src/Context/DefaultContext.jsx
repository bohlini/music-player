import { createContext, useContext, useState } from "react";

const DefaultContext = createContext();

export function DefaultProvider({ children }) {
  const [defaults, setDefaults] = useState({
    color: "blue",
  });

  return (
    <DefaultContext.Provider value={{ defaults }}>
      {children}
    </DefaultContext.Provider>
  );
}

export function useDefaults() {
  return useContext(DefaultContext);
}
