import { render, screen } from "@testing-library/react";
import { Card } from "../../components";

describe("Card", () => {
  it("should render default card", () => {
    render(<Card>Default Card</Card>);
    const card = screen.getByText(/Default Card/i);
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("w-96 h-64 shadow-md border-solid");
  });

  it("should render small card", () => {
    render(<Card size="sm">Small Card</Card>);
    const card = screen.getByText(/Small Card/i);
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("w-64 h-48 shadow-md border-solid");
  });

  it("should render medium card", () => {
    render(<Card size="md">Medium Card</Card>);
    const card = screen.getByText(/Medium Card/i);
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("w-96 h-64 shadow-md border-solid");
  });

  it("should render large card", () => {
    render(<Card size="lg">Large Card</Card>);
    const card = screen.getByText(/Large Card/i);
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("w-128 h-80 shadow-md border-solid");
  });

  it("should render card with no shadow", () => {
    render(<Card shadow="none">No Shadow Card</Card>);
    const card = screen.getByText(/No Shadow Card/i);
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("w-96 h-64 shadow-none border-solid");
  });

  it("should render card with rounded border", () => {
    render(<Card border="rounded">Rounded Border Card</Card>);
    const card = screen.getByText(/Rounded Border Card/i);
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("w-96 h-64 border-2 rounded-lg");
  });

  it("should render card with no border", () => {
    render(<Card border="none">No Border Card</Card>);
    const card = screen.getByText(/No Border Card/i);
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("w-96 h-64 border-none");
  });

  it("should render card with custom class", () => {
    render(<Card className="custom-class">Custom Class Card</Card>);
    const card = screen.getByText(/Custom Class Card/i);
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("w-96 h-64 custom-class");
  });

  it("should render card with children", () => {
    render(
      <Card>
        <p>Child Content</p>
      </Card>
    );
    const card = screen.getByText(/Child Content/i);
    expect(card).toBeInTheDocument();
  });

  it("should render card with all props", () => {
    render(
      <Card size="lg" shadow="lg" border="rounded">
        All Props Card
      </Card>
    );
    const card = screen.getByText(/All Props Card/i);
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("w-128 h-80 shadow-lg border-2 rounded-lg");
  });
});
