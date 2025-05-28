import { render, screen } from "@testing-library/react";
import FindByQueries from "../../src/components/findByQueries";

describe("FindByQueries", () => {
  it("should find the h1", async () => {
    render(<FindByQueries />);
    expect(await screen.findByText(/findby queries test/i)).toBeInTheDocument();
  });

  it("should find the p", async () => {
    render(<FindByQueries />);
    expect(
      await screen.findByText(/paragraph with text "hello world"/i)
    ).toBeInTheDocument();
  });

  it("should find the button", async () => {
    render(<FindByQueries />);
    expect(
      await screen.findByRole("button", { name: /click-me/i })
    ).toBeInTheDocument();
  });

  it("should find the input with placeholder enter text here", async () => {
    render(<FindByQueries />);
    expect(
      await screen.findByPlaceholderText(/enter text here/i)
    ).toBeInTheDocument();
  });

  it("should find the img", async () => {
    render(<FindByQueries />);
    expect(await screen.findByAltText(/test-image/i)).toBeInTheDocument();
  });

  it("should find the input with value prefilled text", async () => {
    render(<FindByQueries />);
    expect(
      await screen.findByDisplayValue(/this is a test input/i)
    ).toBeInTheDocument();
  });

  it("should find the div with data-testid test-element", async () => {
    render(<FindByQueries />);
    expect(await screen.findByTestId("test-element")).toBeInTheDocument();
  });

  it("should find the label with htmlFor test-input", async () => {
    render(<FindByQueries />);
    expect(
      await screen.findByLabelText(/test input label/i)
    ).toBeInTheDocument();
  });

  it("should find the input with id test-input", async () => {
    render(<FindByQueries />);
    expect(await screen.findByTestId("test-input")).toBeInTheDocument();
  });
});
