import Modal from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Modal> = {
  component: Modal,
  args: {
    isOpen: true,
    title: "Modal Title",
    children: <h1>Modal Content</h1>,
    onClose: () => {},
    cta: [
      { text: "Action 1", variant: "contained", block: false },
      { text: "Action 2", variant: "outlined", block: false },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Index: Story = {
  render: (args) => <Modal {...args} />,
};
