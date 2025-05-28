import { render, screen } from "@testing-library/react";
import ToggleMessage from "../../src/components/ToggleMessage";
import userEvent from "@testing-library/user-event";

describe("ToggleMessage", () => {
  it("should render the message when the button is clicked", async () => {
    render(<ToggleMessage />);

    const button = screen.getByRole("button", { name: /Toggle Message/i });

    expect(screen.queryByText(/Message is visible now/i)).toBeNull();

    await userEvent.click(button);
    expect(screen.getByText(/Message is visible now/i)).toBeInTheDocument();

    await userEvent.click(button);
    expect(screen.queryByText(/Message is visible now/i)).toBeNull();
  });
});
