import { render, screen } from "@testing-library/react";
import GetByQueries from "../../src/components/GetByQueries";

describe("GeByQueries", () => {
  it("should render a heading", () => {
    render(<GetByQueries />);
    expect(screen.getByText("Heading")).toBeInTheDocument();
  });

  it("should render a button", () => {
    render(<GetByQueries />);
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
  });

  it("should render a button", () => {
    render(<GetByQueries />);
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  it("should render an input", () => {
    render(<GetByQueries />);
    expect(screen.getByPlaceholderText("Text")).toBeInTheDocument();
  });

  it("should render a link", () => {
    render(<GetByQueries />);
    const link = screen.getByRole("link", { name: "Google" });
    expect(link).toHaveAttribute("href", "https://www.google.com");
  });

  it("should render a div", () => {
    render(<GetByQueries />);
    expect(screen.getByTestId("test-id")).toBeInTheDocument();
  });
});
