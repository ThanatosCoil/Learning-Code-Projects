import { render, screen } from "@testing-library/react";
import ListComponent from "../../src/components/ListComponent";

describe("ListComponent", () => {
  it("should render a list of items", () => {
    const items = ["apple", "banana", "cherry"];
    render(<ListComponent items={items} />);
    items.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("should render a message when no items are provided", () => {
    render(<ListComponent items={[]} />);
    expect(screen.getByText(/No items/i)).toBeInTheDocument();
  });
});
