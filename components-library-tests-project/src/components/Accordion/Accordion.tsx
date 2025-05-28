import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface AccordionProps {
  children: React.ReactNode;
  variant?: "default" | "bordered";
  size?: "sm" | "md" | "lg";
}

const accordionStyles = cva("space-y-2", {
  variants: {
    variant: {
      default: "rounded-lg",
      bordered: "border border-gray-300 rounded-lg",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

const Accordion = ({ children, variant, size }: AccordionProps) => {
  return (
    <div className={twMerge(accordionStyles({ variant, size }))}>
      {children}
    </div>
  );
};
export default Accordion;
