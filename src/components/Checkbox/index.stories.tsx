import Checkbox from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    name: "checkbox",
    checked: true,
    label: "Label!",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Index: Story = {
  render: (args) => <Checkbox {...args} />,
};
