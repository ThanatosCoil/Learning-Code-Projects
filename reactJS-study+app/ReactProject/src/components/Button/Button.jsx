import classes from "./Button.module.css";

export default function Button({ children, isActive, ...props }) {
  const handleMouseEnter = () => console.log("Мышь убери");

  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
      onDoubleClick={() => console.log("Много жмешь")}
    >
      {children}
    </button>
  );
}
