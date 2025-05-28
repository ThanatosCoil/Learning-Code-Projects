import { render, screen } from "@testing-library/react";
import QueryByQueries from "../../src/components/QueryByQueries";

describe("QueryByQueries", () => {
  it("should query the div with role alert", () => {
    render(<QueryByQueries />);
    expect(screen.queryByRole("alert")).toBeInTheDocument();
  });

  it("should query the button", () => {
    render(<QueryByQueries />);
    expect(screen.queryByRole("button")).toBeInTheDocument();
  });

  it("should query the label with htmlFor input1", () => {
    render(<QueryByQueries />);
    expect(screen.queryByLabelText(/label 1/i)).toBeInTheDocument();
  });

  it("should query the input with placeholder email", () => {
    render(<QueryByQueries />);
    expect(screen.queryByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  it("should query the h1", () => {
    render(<QueryByQueries />);
    expect(screen.queryByText(/header text/i)).toBeInTheDocument();
  });

  it("should query the p", () => {
    render(<QueryByQueries />);
    expect(screen.queryByText(/paragraph text/i)).toBeInTheDocument();
  });

  it("should query the div with data-testid custom-element", () => {
    render(<QueryByQueries />);
    expect(screen.queryByTestId("custom-element")).toBeInTheDocument();
  });

  it("should query the input with value prefilled text", () => {
    render(<QueryByQueries />);
    expect(screen.queryByDisplayValue(/prefilled text/i)).toBeInTheDocument();
  });

  it("should query both labels", () => {
    render(<QueryByQueries />);
    expect(screen.queryAllByLabelText(/label/i)).toHaveLength(2);
  });

  it("should query both inputs", () => {
    render(<QueryByQueries />);
    expect(screen.queryAllByPlaceholderText(/search|email/i)).toHaveLength(2);
  });

  it("should query the h1 and p", () => {
    render(<QueryByQueries />);
    expect(screen.queryAllByText(/header text|paragraph text/i)).toHaveLength(
      2
    );
  });
});
