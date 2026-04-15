import { FaChromecast } from "react-icons/fa";
import { IoHeadsetOutline } from "react-icons/io5";
import { useCurrentTrack } from "../Context/CurrentTrackContext";
import { Text } from "../Text/Text";
import styles from "./DeviceSelector.module.css";

function DeviceSelector({ variant }) {
  const { currentTheme } = useCurrentTrack();

  // REVIEW: Variable name `whiteText` is misleading — when theme is not black, it returns "#000000" (black text). Consider renaming to `textColor` for clarity.
  // REVIEW: Typo — "Connected to users headphones" should be "Connected to user's headphones" (possessive apostrophe).
  const whiteText =
    !currentTheme || currentTheme === "#000000" ? "#ffffff" : "#000000";

  return (
    <div
      className={`${styles.wrapper} ${styles[variant]}`}
      style={{ color: whiteText }}
    >
      <IoHeadsetOutline />
      <Text type="meta">Connected to users headphones</Text>
      <FaChromecast />
    </div>
  );
}

export { DeviceSelector };
