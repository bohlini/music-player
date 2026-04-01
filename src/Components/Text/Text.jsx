import { useThemes } from "../Context/ThemeContext";
import styles from "./Text.module.css";

function Text({ type, tag = "p", children, className = "", ...rest }) {
  const { currentTheme } = useThemes();

  const Tag = tag;

  return (
    <Tag
      className={`${styles[type]} ${className}`}
      style={{ "--theme": currentTheme, ...rest.style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export { Text };
