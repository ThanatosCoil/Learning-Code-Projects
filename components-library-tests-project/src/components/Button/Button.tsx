import { cva } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva("px-4 py-2 rounded focus:outline-none", {
  variants: {
    variant: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-green-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "opacity-100 cursor-pointer",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Button = ({
  variant,
  size,
  disabled,
  children,
  className,
  ...props
}: ButtonProps) => {
  const buttonClasses = twMerge(
    buttonStyles({ variant, size, disabled }),
    className
  );

  return (
    <button className={buttonClasses} {...props} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;
