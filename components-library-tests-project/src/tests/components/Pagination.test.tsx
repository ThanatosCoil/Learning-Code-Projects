import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "vitest";
import { Pagination } from "../../components";

describe("Pagination", () => {
  it("should render the default pagination component", () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={vi.fn()} />
    );
    expect(screen.getByText("< Previous")).toBeInTheDocument();
    expect(screen.getByText("Next >")).toBeInTheDocument();

    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText(i.toString())).toBeInTheDocument();
    }
  });

  it("should call onPageChange when a page is clicked", () => {
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />
    );
    fireEvent.click(screen.getByText("3"));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("should disable 'Previous' button when currentPage is 1", () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={vi.fn()} />
    );
    expect(screen.getByText("< Previous")).toBeDisabled();
  });

  it("should disable 'Next' button when currentPage is the last page", () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={vi.fn()} />
    );
    expect(screen.getByText("Next >")).toBeDisabled();
  });

  it("should render the disabled pagination component", () => {
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        onPageChange={vi.fn()}
        disabled={true}
      />
    );
    expect(screen.getByText("< Previous")).toBeDisabled();
    expect(screen.getByText("Next >")).toBeDisabled();
  });

  it("should render pagination component with correct styles", () => {
    render(
      <Pagination
        currentPage={1}
        totalPages={5}
        onPageChange={vi.fn()}
        variant="primary"
      />
    );
    expect(screen.getByText("< Previous")).toHaveClass(
      "px-4 py-2 m-1 rounded-md bg-gray-200 text-gray-800"
    );
    expect(screen.getByText("Next >")).toHaveClass(
      "px-4 py-2 m-1 rounded-md bg-gray-200 text-gray-800"
    );

    for (let i = 1; i <= 5; i++) {
      if (i === 1) {
        expect(screen.getByText(i.toString())).toHaveClass(
          "px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        );
      } else {
        expect(screen.getByText(i.toString())).toHaveClass(
          "px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
        );
      }
    }
  });
});
