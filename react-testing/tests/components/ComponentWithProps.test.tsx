import { render, screen } from "@testing-library/react";
import ComponentWithProps from "../../src/components/ComponentWithProps";

describe("ComponentWithProps", () => {
  it("should display a welcome message when name is provided", () => {
    render(<ComponentWithProps name="John" />);
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });

  it("should display a sign up button when name is not provided", () => {
    render(<ComponentWithProps name="" />);
    expect(screen.getByText(/Sign up/i)).toBeInTheDocument();
  });
});
