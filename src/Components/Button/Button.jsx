import styles from './Button.module.css'

function IconButton({
  onClick,
  type = "button",
  size,
  icon,
  currentTheme,
  className,
  ...rest
}) {
  const classes = [styles.base, styles[size], className].filter(Boolean).join(' ')

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      style={{ '--theme': currentTheme }}
      {...rest}
    >
      <span className={styles.icon}>{icon}</span>
    </button>
  );
}

export {IconButton}
