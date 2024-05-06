import AgentBasedOverlay from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AgentBasedOverlay> = {
  component: AgentBasedOverlay,
  args: {
    isOpen: false,
    title: "Title",
    size: "md",
    children: <h3>Content</h3>,
    onClose: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof AgentBasedOverlay>;

export const Index: Story = {
  render: (args) => <AgentBasedOverlay {...args} />,
};
