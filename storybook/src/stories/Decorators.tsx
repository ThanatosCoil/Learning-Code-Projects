const Decorators = ({
  label = "Click me",
  color = "#007bff",
  disabled = false,
  onClick = () => {
    alert("clicked");
  },
}: {
  label: string;
  color: string;
  disabled: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: color,
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        color: "white",
      }}
    >
      {label}
    </button>
  );
};
export default Decorators;
