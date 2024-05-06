import { Div } from "style-wiz";
import Chip from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Chip> = {
  component: Chip,
  args: {
    text: "I'm a chip",
    variant: "filled",
    icon: {
      type: "icon",
      name: "add-outlined",
      size: "h-lg",
      color: "inherit",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Index: Story = {
  render: ({ icon, ...args }) => (
    <Div display="flex" gap={2}>
      <Chip {...args} icon={icon} />
    </Div>
  ),
};
