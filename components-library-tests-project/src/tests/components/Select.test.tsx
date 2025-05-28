import { render, screen } from "@testing-library/react";
import { Select } from "../../components";

describe("Select", () => {
  it("should render default select component", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];
    render(<Select options={options} onChange={vi.fn()} />);
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("should render component with variant and size", () => {
    const options = [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
    ];
    const { container: primaryContainer } = render(
      <Select
        options={options}
        variant="primary"
        size="md"
        onChange={vi.fn()}
      />
    );
    const { container: secondaryContainer } = render(
      <Select
        options={options}
        variant="secondary"
        size="lg"
        onChange={vi.fn()}
      />
    );
    expect(primaryContainer.firstChild).toHaveClass(
      "bg-white text-gray-800 border-gray-300 hover:bg-gray-100 focus:ring-blue-500 focus:border-blue-500"
    );
    expect(primaryContainer.firstChild).toHaveClass("text-base");

    expect(secondaryContainer.firstChild).toHaveClass(
      "bg-gray-800 text-white border-gray-400 hover:bg-gray-700 focus:ring-gray-200 focus:border-white"
    );
    expect(secondaryContainer.firstChild).toHaveClass("text-lg");
  });

  it("should render component with disabled", () => {
    const options = [{ label: "Disabled", value: "disabled" }];
    render(<Select options={options} disabled={true} onChange={vi.fn()} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeDisabled();
    expect(selectElement).toHaveClass("opacity-50 cursor-not-allowed");
  });
});
