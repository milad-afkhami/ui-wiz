import IconButton from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  args: {
    name: "star",
    disabled: false,
    color: "brand-primary",
    size: "md",
    multiDirection: false,
    variant: "contained",
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Index: Story = {
  render: (args) => <IconButton {...args} />,
};
