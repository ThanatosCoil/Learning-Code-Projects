import { cva } from "class-variance-authority";
import { ChangeEvent, useState } from "react";
import { twMerge } from "tailwind-merge";

interface DatePickerProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "danger";
  selectedDate: string;
  onChange: (date: string) => void;
}

const datePickerStyles = cva(
  "relative block w-full text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
  {
    variants: {
      size: {
        sm: "py-1 px-2 text-sm",
        md: "py-2 px-3 text-base",
        lg: "py-3 px-4 text-lg",
        xl: "py-4 px-5 text-xl",
      },
      color: {
        primary: "border-blue-500",
        secondary: "border-green-500",
        danger: "border-red-500",
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
    },
  }
);

const DatePicker = ({
  size,
  color,
  selectedDate,
  onChange,
}: DatePickerProps) => {
  const [date, setDate] = useState(selectedDate);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-sm">
      <input
        type="date"
        value={date}
        onChange={handleChange}
        className={twMerge(datePickerStyles({ size, color }))}
      />
    </div>
  );
};
export default DatePicker;
