import { cva } from "class-variance-authority";
import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface AccordionSectionProps {
  children: React.ReactNode;
  title: string;
  variant?: "default" | "bordered";
}

const accordionSectionStyles = cva("p-4", {
  variants: {
    variant: {
      default: "bg-gray-100 rounded-lg shadow-md",
      bordered: "border-b border-gray-300 rounded-lg shadow-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const AccordionSection = ({
  children,
  title,
  variant,
}: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={twMerge(accordionSectionStyles({ variant }))}>
      <div
        className="cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-medium">{title}</h2>
        </div>
        <span className="flex items-center justify-center transition-transform duration-300 ">
          {isOpen ? (
            <ChevronUpIcon className="w-5 h-5" />
          ) : (
            <ChevronDownIcon className="w-5 h-5" />
          )}
        </span>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
          visibility: isOpen ? "visible" : "hidden",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="mt-2 border-t border-gray-300 pt-2">{children}</div>
      </div>
    </div>
  );
};

export default AccordionSection;
