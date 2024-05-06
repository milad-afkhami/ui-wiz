import Switch from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Switch> = {
  component: Switch,
  args: {
    text: "Switch Label",
    checked: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Index: Story = {
  render: (args) => <Switch {...args} />,
};
