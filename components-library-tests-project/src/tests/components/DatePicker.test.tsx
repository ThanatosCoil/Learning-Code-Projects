import { render, screen, fireEvent } from "@testing-library/react";
import { DatePicker } from "../../components";

describe("DatePicker", () => {
  it("should render default DatePicker", () => {
    const onChange = vi.fn();
    render(<DatePicker selectedDate="2025-02-05" onChange={onChange} />);
    const input = screen.getByDisplayValue("2025-02-05");
    expect(input).toBeInTheDocument();
  });

  it("should call onChange when input is changed", () => {
    const onChange = vi.fn();
    render(<DatePicker selectedDate="2025-02-05" onChange={onChange} />);
    const input = screen.getByDisplayValue("2025-02-05");

    fireEvent.change(input, { target: { value: "2025-02-06" } });

    expect(onChange).toHaveBeenCalledWith("2025-02-06");
  });
});
