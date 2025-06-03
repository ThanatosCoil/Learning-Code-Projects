import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: "primary" | "secondary" | "error";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const InputStyles = cva("px-4 py-2 border rounded focus:outline-none", {
  variants: {
    variant: {
      primary: "border-blue-500 text-gray-700 focus:ring-blue-500",
      secondary: "border-gray-500 text-gray-700 focus:ring-gray-500",
      error: "border-red-500 text-red-500 focus:ring-red-500",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "bg-white",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});

const Input = ({
  variant,
  size,
  disabled,
  className,
  ...props
}: InputProps) => {
  const inputClasses = twMerge(
    InputStyles({ variant, size, disabled }),
    className
  );
  return <input className={inputClasses} {...props} disabled={disabled} />;
};
export default Input;
