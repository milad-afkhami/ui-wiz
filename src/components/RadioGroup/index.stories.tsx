import RadioGroup from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  args: {
    items: [
      { label: "Item 1", disabled: false, value: "item-1" },
      { label: "Item 2", disabled: true, value: "item-2" },
      { label: "Item 3", disabled: false, value: "item-3" },
    ],
    title: "Title",
    name: "name",
    direction: "column",
    selected: "item-2",
    onChange: () => {},
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Index: Story = {
  render: (args) => <RadioGroup {...args} />,
};
