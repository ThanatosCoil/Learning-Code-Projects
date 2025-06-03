import { Meta, StoryObj } from "@storybook/react/*";
import { Card } from "../components";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm",
    border: "none",
    shadow: "sm",
    children: <div>Small Card Component</div>,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    shadow: "lg",
    children: <div>Medium Card Component</div>,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    shadow: "lg",
    border: "rounded",
    children: <div>Large Card Component</div>,
  },
};

export const Custom: Story = {
  args: {
    size: "md",
    shadow: "lg",
    border: "rounded",
    children: (
      <div>
        <h2 className="text-2xl font-bold text-gray-900">
          Custom Card Component
        </h2>
        <p className="text-sm text-gray-500 pt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque vero
          quas pariatur adipisci et voluptas sint laudantium sit atque fugit.
        </p>
      </div>
    ),
    className: "bg-gray-100",
  },
};
