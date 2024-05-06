import Alert from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Alert> = {
  component: Alert,
  args: {
    showIcon: true,
    type: "info",
    message: "Content",
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Index: Story = {
  render: (args) => <Alert {...args} />,
};
