import { IoColorFill } from "react-icons/io5";
import { useSongs } from "../../Context/SongsContext";
import { useTheme } from "../../Context/ThemeContext";
import { useEffect, useState } from "react";
import styles from "./IconButton.module.css";

export default function IconButton({
  onClick,
  type = "button",
  size = "medium",
  icon,
  shadow,
}) {
  const [buttonTheme, setButtonTheme] = useState("default");
  // const { songs } = useSongs();
  // console.log("songs in iconBtn: ", songs);

  // const { theme } = useTheme();
  // console.log(theme);

  const baseStyle = {
    width: "clamp(40px, 8vw, 80px)",
    height: "clamp(40px, 8vw, 80px)",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFF",
    boxShadow:
      "0px 6.27px 21.49px 0px rgba(0, 0, 0, 0.10), 0px 0.9px 3.58px 0px rgba(0, 0, 0, 0.02)",
    backdropFilter: "blur(25.07px)",
    WebkitBackdropFilter: "blur(25.07px)",
    opacity: ".95",
  };
  const sizes = {
    small: { padding: "6px 12px", fontSize: "12px" },
    medium: { padding: "10px 20px", fontSize: "14px" },
    large: { padding: "14px 28px", fontSize: "16px" },
  };
  const finalStyle = {
    ...baseStyle,
    ...sizes[size],
    boxShadow: `inset -7.16px 10.74px 45px 10.59px ${buttonTheme}`,
  };
  const iconStyle = {
    color: "white",
    fontSize: "40px",
    width: "clamp(40px, 8vw, 80px)",
    height: "clamp(40px, 8vw, 80px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <button type={type} onClick={onClick} style={finalStyle}>
      <span style={iconStyle}>{icon}</span>
    </button>
  );
}
