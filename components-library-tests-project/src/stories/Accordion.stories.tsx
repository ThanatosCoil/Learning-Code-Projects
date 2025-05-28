import type { Meta, StoryObj } from "@storybook/react/*";
import { Accordion, AccordionSection } from "../components/Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AccordionSection title="Accordion Section 1">
          <p>Content for Section 1</p>
        </AccordionSection>
        <AccordionSection title="Accordion Section 2">
          <p>Content for Section 2</p>
        </AccordionSection>
        <AccordionSection title="Accordion Section 3">
          <p>Content for Section 3</p>
        </AccordionSection>
      </>
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: "bordered",
    children: (
      <>
        <AccordionSection title="Accordion Section 1">
          <p>Content for Section 1</p>
        </AccordionSection>
        <AccordionSection title="Accordion Section 2">
          <p>Content for Section 2</p>
        </AccordionSection>
        <AccordionSection title="Accordion Section 3">
          <p>Content for Section 3</p>
        </AccordionSection>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: (
      <>
        <AccordionSection title="Accordion Section 1">
          <p>Content for Section 1</p>
        </AccordionSection>
        <AccordionSection title="Accordion Section 2">
          <p>Content for Section 2</p>
        </AccordionSection>
        <AccordionSection title="Accordion Section 3">
          <p>Content for Section 3</p>
        </AccordionSection>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: (
      <>
        <AccordionSection title="Accordion Section 1">
          <p>Content for Section 1</p>
        </AccordionSection>
        <AccordionSection title="Accordion Section 2">
          <p>Content for Section 2</p>
        </AccordionSection>
        <AccordionSection title="Accordion Section 3">
          <p>Content for Section 3</p>
        </AccordionSection>
      </>
    ),
  },
};
