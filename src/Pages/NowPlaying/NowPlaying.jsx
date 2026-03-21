import DeviceSelector from "../../Components/DeviceSelector.jsx/DeviceSelector";
import Queue from "./Queue/Queue";
import { useDuration } from "../../Context/DurationContext";

export default function NowPlaying() {
  const { displayDuration, displayReversedDuration } = useDuration();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <button>play</button>
      <p>{displayDuration}</p>
      <p>{displayReversedDuration}</p>
    </>
  );
}
