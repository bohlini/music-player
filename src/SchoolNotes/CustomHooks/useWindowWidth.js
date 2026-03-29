export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function resizeWindowWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", resizeWindowWidth);

    return () => window.removeEventListener("resize", resizeWindowWidth);
  }, []);

  return windowWidth
}
