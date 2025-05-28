import { Meta, StoryObj } from "@storybook/react/*";
import { Input } from "../components";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    placeholder: "Enter your name",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    placeholder: "Enter your name",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    placeholder: "Enter your name",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Enter your name",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Enter your name",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Enter your name",
  },
};
