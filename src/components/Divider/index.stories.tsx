import { Div } from "style-wiz";
import Divider from ".";
import Orientations from "../../constants/orientations";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Divider> = {
  component: Divider,
  args: {
    color: "brand-primary-main",
    thickness: "2px",
    orientation: Orientations.Horizontal,
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Index: Story = {
  render: (args) => (
    <Div height="10rem">
      <Divider {...args} />
    </Div>
  ),
};
