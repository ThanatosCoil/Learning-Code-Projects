import { cva } from "class-variance-authority";

//Define class variations
const buttonVariants = cva("px-4 py-2 rounded-md focus:outline-none", {
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-green-500 text-black",
    },
    size: {
      small: "text-sm py-1 px-3",
      medium: "text-base py-2 px-4",
      large: "text-lg py-3 px-5",
    },
    state: {
      active: "bg-blue-700 text-white cursor-pointer",
      disabled: "bg-gray-300 opacity-80 text-black! cursor-not-allowed",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "small",
    state: "active",
  },
});

interface ButtonProps {
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  state?: "active" | "disabled";
  children: React.ReactNode;
}

const Button = ({ color, size, state, children }: ButtonProps) => {
  const buttonClasses = buttonVariants({ color, size, state });
  return (
    <button className={buttonClasses} disabled={state === "disabled"}>
      {children}
    </button>
  );
};
export default Button;
