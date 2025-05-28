import { render, screen } from "@testing-library/react";
import { Input } from "../../components";

describe("Input", () => {
  it("should render default input", () => {
    render(<Input placeholder="Default Input" />);
    const input = screen.getByPlaceholderText("Default Input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(
      "px-4 py-2 border rounded focus:outline-none border-blue-500 text-gray-700 focus:ring-blue-500"
    );
    expect(input).not.toBeDisabled();
  });

  it("should render secondary input", () => {
    render(<Input placeholder="Secondary Input" variant="secondary" />);
    const input = screen.getByPlaceholderText("Secondary Input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(
      "px-4 py-2 border rounded focus:outline-none border-gray-500 text-gray-700 focus:ring-gray-500"
    );
  });

  it("should render error input", () => {
    render(<Input placeholder="Error Input" variant="error" />);
    const input = screen.getByPlaceholderText("Error Input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(
      "px-4 py-2 border rounded focus:outline-none border-red-500 text-red-500 focus:ring-red-500"
    );
  });

  it("should render disabled input", () => {
    render(<Input placeholder="Disabled Input" disabled />);
    const input = screen.getByPlaceholderText("Disabled Input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("opacity-50 cursor-not-allowed");
  });

  it("should render small input", () => {
    render(<Input placeholder="Small Input" size="sm" />);
    const input = screen.getByPlaceholderText("Small Input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("text-sm");
  });

  it("should render large input", () => {
    render(<Input placeholder="Large Input" size="lg" />);
    const input = screen.getByPlaceholderText("Large Input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("text-lg");
  });

  it("should render custom input", () => {
    render(<Input placeholder="Custom Input" className="custom-class" />);
    const input = screen.getByPlaceholderText("Custom Input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("custom-class");
  });
});
