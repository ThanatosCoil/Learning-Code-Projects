import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface CardProps {
  size?: "sm" | "md" | "lg";
  shadow?: "none" | "sm" | "md" | "lg";
  border?: "none" | "solid" | "rounded";
  children: React.ReactNode;
  className?: string;
}

const cardStyles = cva("p-4 rounded-lg bg-white shadow-md", {
  variants: {
    size: {
      sm: "w-64 h-48",
      md: "w-96 h-64",
      lg: "w-128 h-80",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
    border: {
      none: "border-none",
      solid: "border border-solid border-gray-300",
      rounded: "border-2 border-gray-300 rounded-lg",
    },
  },
  defaultVariants: {
    size: "md",
    shadow: "md",
    border: "solid",
  },
});

const Card = ({ size, shadow, border, children, className }: CardProps) => {
  const cardClasses = twMerge(cardStyles({ size, shadow, border }), className);
  return <div className={cardClasses}>{children}</div>;
};
export default Card;
