import { useEffect, useState } from "react";

export default function CustomHooks() {
  //Hooks just returns data

  //want to check the width of window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //windowwidth - for responsive,
  //we could define this everywhere, or we can create is as a custom hook and import the hook.
  //Always called useSomething (useWindowWidth for example)

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize", () => {}); // if not removed, we'll keep stacking into memory a lot of listeners.
  }, []);

  return (
    <>
      <h1>CustomHooks</h1>
      <h2>window width: {windowWidth}</h2>
    </>
  );
}
