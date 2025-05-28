import { render, screen, waitFor } from "@testing-library/react";
import { describe } from "vitest";
import { Accordion, AccordionSection } from "../../components/Accordion";
import userEvent from "@testing-library/user-event";

describe("Accordion", () => {
  it("should render a default accordion", () => {
    render(
      <Accordion>
        <AccordionSection title="Accordion Section 1">
          <p>Content for Section 1</p>
        </AccordionSection>
      </Accordion>
    );
    expect(screen.getByText("Accordion Section 1")).toBeInTheDocument();
    expect(screen.getByText("Content for Section 1")).toBeInTheDocument();
  });

  it("should toggle the accordion section when clicked", async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <AccordionSection title="Accordion Section 1">
          <p>Content for Section 1</p>
        </AccordionSection>
      </Accordion>
    );
    const accordionSection = screen.getByText("Accordion Section 1");

    await user.click(accordionSection);
    expect(screen.getByText("Content for Section 1")).toBeVisible();

    await user.click(accordionSection);
    await waitFor(() => {
      expect(screen.getByText("Content for Section 1")).not.toBeVisible();
    });
  });
});
