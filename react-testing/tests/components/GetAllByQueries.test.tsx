import { render, screen } from "@testing-library/react";
import GetAllByQueries from "../../src/components/GetAllByQueries";

describe("GetAllByQueries", () => {
  it("Should render multiple labels", () => {
    render(<GetAllByQueries />);
    expect(screen.getAllByLabelText(/input/i)).toHaveLength(2);
  });

  it("Should render multiple inputs by value", () => {
    render(<GetAllByQueries />);
    expect(screen.getAllByDisplayValue(/default/i)).toHaveLength(2);
  });

  it("Should render multiple inputs by placeholder", () => {
    render(<GetAllByQueries />);
    expect(screen.getAllByPlaceholderText(/text/i)).toHaveLength(2);
  });

  it("should render multiple paragraphs", () => {
    render(<GetAllByQueries />);
    expect(screen.getAllByText(/lorem/i)).toHaveLength(2);
  });

  it("should render multiple images", () => {
    render(<GetAllByQueries />);
    expect(screen.getAllByRole("img")).toHaveLength(2);
  });

  it("should render multiple tooltips by title", () => {
    render(<GetAllByQueries />);
    expect(screen.getAllByTitle(/tooltip/i)).toHaveLength(2);
  });

  it("should render multiple disabled buttons", () => {
    render(<GetAllByQueries />);
    const buttons = screen.getAllByRole("button", { name: "Button" });
    expect(buttons).toHaveLength(2);
    buttons.forEach((button) => {
      expect(button).toBeDisabled();
    });
  });

  it("should render multiple elements by test id", () => {
    render(<GetAllByQueries />);
    expect(screen.getAllByTestId(/test-id/i)).toHaveLength(2);
  });
});
