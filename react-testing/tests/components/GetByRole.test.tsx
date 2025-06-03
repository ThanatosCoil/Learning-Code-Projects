import { render, screen } from "@testing-library/react";
import GetByRole from "../../src/components/GetByRole";

describe("GetByRole", () => {
  it("should render a link to the home page", () => {
    render(<GetByRole />);
    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  });

  it("should render a button", () => {
    render(<GetByRole />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render a footer", () => {
    render(<GetByRole />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("should render a heading", () => {
    render(<GetByRole />);
    expect(
      screen.getByRole("heading", { name: "Heading" })
    ).toBeInTheDocument();
  });
});
