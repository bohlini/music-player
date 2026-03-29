import styles from "./Text.module.css";

function Text({ type, tag = "p", children, className = "", ...rest }) {
  const Tag = tag;
  return (
    <Tag className={`${styles[type]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

export { Text };
