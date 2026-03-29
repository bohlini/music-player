import { useWindowWidth } from "./useWindowWidth";
import { useLocalStorage } from "./useLocalStorage";

export default function HooksExample() {
  const windowWidth = useWindowWidth(); // not {windowWidth} ??
  const [storedValue, setStoredValue] = useLocalStorage("myKey", "blue");

  return (
    <>
      <p>Value stored in localStorage is {storedValue}</p>
    </>
  );
}
