import { Div } from "style-wiz";
import Spinner from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  args: {
    size: "sm",
    contrast: false,
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Index: Story = {
  render: (args) => (
    <Div display="inline-block" p="2" bg="bg-secondary-main">
      <Spinner {...args} />
    </Div>
  ),
};
