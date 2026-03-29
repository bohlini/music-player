import { FaChromecast } from "react-icons/fa";
import { IoHeadsetOutline } from "react-icons/io5";
import styles from "./DeviceSelector.module.css";
import { useThemes } from "../Context/ThemeContext";
import { Text } from "../Typography/Text";

function DeviceSelector({ variant }) {
  const { currentTheme } = useThemes();
  const whiteText = currentTheme === "#000000" ? "white" : "black";

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
