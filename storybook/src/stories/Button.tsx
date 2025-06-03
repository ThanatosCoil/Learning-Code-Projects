import "./style.css";

type ButtonProps = {
  primary?: boolean;
  label: string;
  onClick: () => void;
  size?: "small" | "medium" | "large";
  color?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  ariaLabel?: string;
  disabled?: boolean;
  loading?: boolean;
};

const Button = ({
  primary = false,
  label,
  onClick,
  size = "medium",
  color,
  fullWidth = false,
  icon,
  iconPosition = "left",
  ariaLabel,
  loading = false,
}: ButtonProps) => {
  const buttonClass = `
  button
  ${primary ? "button--primary" : "button--secondary"}
  ${size ? `button--${size}` : "button--medium"}
  ${color ? `button--custom-color` : ""}
  ${fullWidth ? "button--fullwidth" : ""}
  ${loading ? "button--loading" : ""}
  `;

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      aria-label={ariaLabel}
      style={color ? { backgroundColor: color, color: "white" } : {}}
    >
      {loading && <span className="button__loading-spinner"></span>}
      {icon && iconPosition === "left" && (
        <span className="button__icon">{icon}</span>
      )}
      <span className="button__label">{label}</span>
      {icon && iconPosition === "right" && (
        <span className="button__icon">{icon}</span>
      )}
    </button>
  );
};
export default Button;
