import { useCurrentTrack } from "../Context/CurrentTrackContext";
import styles from "./Text.module.css";

// REVIEW: This component calls `useCurrentTrack()` which tightly couples every `Text` instance to the CurrentTrackContext. If `Text` is ever used outside the provider tree, it will crash. Consider passing theme via props or a dedicated ThemeContext instead.
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
