export default function IconButton({
  onClick,
  type = "button",
  size,
  icon,
  currentTheme,
}) {
  const baseStyle = {
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFF",
    boxShadow:
      "0px 6.267441749572754px 21.488372802734375px 0px rgba(0, 0, 0, 20%), 0px 0.895348846912384px 3.581395387649536px 0px rgba(0, 0, 0, 2%)",
    backdropFilter: "blur(12.53px) brightness(100%)",
    WebkitBackdropFilter: "blur(25.07px)",
  };
  const sizes = {
    small: {
      width: "40px",
      height: "40px",
      fontSize: "25px",
      color: "black",
      boxShadow: `inset -7.16px 10.74px 45px 10.59px white`,
      opacity: ".55",
    },
    smallWTheme: {
      width: "40px",
      height: "40px",
      fontSize: "25px",
      color: "white",
      boxShadow: `inset -7.16px 10.74px 45px 10.59px ${currentTheme}, inset 10px 10px 20px 20px rgba(255, 255, 255, 0.3)`,
    },
    large: {
      width: "80px",
      height: "80px",
      fontSize: "40px",
      color: "white",
      boxShadow: `inset -7.16px 10.74px 45px 20.59px ${currentTheme}`,
      opacity: ".95",
    },
  };
  const finalStyle = {
    ...baseStyle,
    ...sizes[size],
  };
  const iconStyle = {
    color: sizes[size.color],
    fontSize: sizes[size.fontSize],
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
