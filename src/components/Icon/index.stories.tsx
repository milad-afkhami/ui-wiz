import Icon from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  component: Icon,
  args: {
    name: "close",
    disabled: false,
    color: "brand-primary-main",
    size: "lg",
    multiDirection: false,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Index: Story = {
  render: (args) => <Icon {...args} />,
};
