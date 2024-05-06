import Button from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    size: "md",
    color: "brand-primary",
    variant: "contained",
    text: "Button",
    loading: false,
    disabled: false,
    trailingIcon: "close",
    icon: "close",
    bordered: true,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Index: Story = {
  render: (args) => <Button {...args} />,
};
