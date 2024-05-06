import ButtonGroup from ".";
import Orientations from "../../constants/orientations";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  args: {
    title: "Title",
    items: [
      { label: "First", value: "first" },
      { label: "Second", value: "second" },
      { label: "Third", value: "third" },
    ],
    onChange: () => {},
    selected: "first",
    orientation: Orientations.Horizontal,
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Index: Story = {
  render: (args) => <ButtonGroup {...args} />,
};
