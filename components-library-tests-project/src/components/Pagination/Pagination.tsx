import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "secondary";
  disabled?: boolean;
}

const paginationStyles = cva("flex items-center space-x-2", {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    variant: {
      default: "bg-gray-100 text-gray-800",
      primary: "bg-blue-400 text-white",
      secondary: "bg-green-500 text-white",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "default",
    disabled: false,
  },
});

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  size,
  variant,
  disabled,
}: PaginationProps) => {
  const paginationClasses = twMerge(
    paginationStyles({ size, variant, disabled })
  );

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          disabled={disabled}
          className={`px-4 py-2 rounded-md ${
            i === currentPage
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={paginationClasses}>
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1 || disabled}
        className="px-4 py-2 m-1 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        &lt; Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages || disabled}
        className="px-4 py-2 m-1 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next &gt;
      </button>
    </div>
  );
};
export default Pagination;
