interface Button2Props {
  label: string;
  backgroundColor: string;
  size: "small" | "medium" | "large";
  borderRadius: number;
  fontSize: string;
  textColor: string;
}

const Button2 = ({
  label,
  backgroundColor,
  size,
  borderRadius,
  fontSize,
  textColor,
}: Button2Props) => {
  const sizeStyles = {
    small: "5px 10px",
    medium: "10px 20px",
    large: "15px 30px",
  };

  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        padding: sizeStyles[size],
        borderRadius: `${borderRadius}px`,
        fontSize: fontSize,
        color: textColor,
      }}
    >
      {label}
    </button>
  );
};
export default Button2;
