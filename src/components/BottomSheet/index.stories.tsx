import BottomSheet from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BottomSheet> = {
  component: BottomSheet,
  args: {
    isOpen: true,
    viewportHeightPortion: 4 / 10,
    title: "Title",
    children: <h3>Content</h3>,
    onClose: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Index: Story = {
  render: (args) => <BottomSheet {...args} />,
};
