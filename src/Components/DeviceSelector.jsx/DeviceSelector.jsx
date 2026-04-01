import { FaChromecast } from "react-icons/fa";
import { IoHeadsetOutline } from "react-icons/io5";
import { useThemes } from "../Context/ThemeContext";
import { Text } from "../Text/Text";
import styles from "./DeviceSelector.module.css";

function DeviceSelector({ variant }) {
  const { currentTheme } = useThemes();
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
