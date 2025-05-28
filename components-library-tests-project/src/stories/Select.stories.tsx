import { Meta, StoryObj } from "@storybook/react/*";
import { Select } from "../components";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: "Option 1", value: "1" },
      { label: "Option 2", value: "2" },
      { label: "Option 3", value: "3" },
    ],
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    options: [{ label: "Disabled", value: "disabled" }],
  },
};
