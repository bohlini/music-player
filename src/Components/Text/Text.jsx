import { useCurrentTrack } from "../Context/CurrentTrackContext";
import styles from "./Text.module.css";

function Text({ type, tag = "p", children, className = "", ...rest }) {
  const { currentTheme } = useCurrentTrack();

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
