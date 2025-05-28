import { render, screen } from "@testing-library/react";
import Hello from "../../src/components/Hello";

describe("Hello", () => {
  it("should render Hello component", () => {
    render(<Hello />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
