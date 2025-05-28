import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface SelectProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "size" | "variant"
  > {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  options: { label: string; value: string }[];
  className?: string;
}

const selectStyles = cva(
  "block w-full px-4 py-2 rounded-md focus:outline-none border",
  {
    variants: {
      variant: {
        primary:
          "bg-white text-gray-800 border-gray-300 hover:bg-gray-100 focus:ring-blue-500 focus:border-blue-500",
        secondary:
          "bg-gray-800 text-white border-gray-400 hover:bg-gray-700 focus:ring-gray-200 focus:border-white",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "cursor-pointer",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  }
);
const Select = ({
  variant,
  size,
  disabled,
  options,
  className,
  ...props
}: SelectProps) => {
  const selectClasses = twMerge(
    selectStyles({ variant, size, disabled }),
    className
  );
  return (
    <select {...props} className={selectClasses} disabled={disabled}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
export default Select;
