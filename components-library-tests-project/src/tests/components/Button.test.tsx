import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../../components";

describe("Button", () => {
  it("should render button with default styles", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveClass("bg-blue-500 text-white text-base");
    expect(button).not.toBeDisabled();
  });

  it("should render button with secondary variant", () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveClass("bg-green-500 text-white text-base");
    expect(button).not.toBeDisabled();
  });

  it("should render button with small size", () => {
    render(<Button size="sm">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveClass("text-sm");
    expect(button).not.toBeDisabled();
  });

  it("should render button with large size", () => {
    render(<Button size="lg">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveClass("text-lg");
    expect(button).not.toBeDisabled();
  });

  it("should render disabled button", () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveClass("opacity-50 cursor-not-allowed");
    expect(button).toBeDisabled();
  });

  it("should render button with custom class", () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
    expect(button).toHaveClass("custom-class bg-blue-500 text-white text-base");
  });
});
