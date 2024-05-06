import Drawer from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  args: {
    isOpen: false,
    children: <h3>Drawer content</h3>,
    onClose: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Index: Story = {
  render: (args) => <Drawer {...args} />,
};
