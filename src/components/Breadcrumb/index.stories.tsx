import Breadcrumb from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  args: {
    items: [
      { title: "Home", url: "https://milad-afkhami.com" },
      { title: "Storybook", url: "https://milad-afkhami.com" },
      { title: "UIWiz", url: "https://milad-afkhami.com" },
      { title: "Breadcrumb" },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Index: Story = {
  render: (args) => <Breadcrumb {...args} />,
};
