import { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../components";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedDate: "2025-02-05",
    onChange: (date: string) => console.log(date),
  },
};

export const WithSmallSize: Story = {
  args: {
    selectedDate: "2025-02-05",
    onChange: (date: string) => console.log(date),
    size: "sm",
  },
};

export const CustomColor: Story = {
  args: {
    selectedDate: "2025-02-05",
    onChange: (date: string) => console.log(date),
    color: "secondary",
  },
};
