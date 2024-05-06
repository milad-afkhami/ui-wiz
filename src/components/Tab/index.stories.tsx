import { Div } from "style-wiz";
import Tab from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tab> = {
  component: Tab,
  args: {
    defaultSelectedItemIndex: 1,
    items: [{ title: "Tab 1" }, { title: "Tab 2" }, { title: "Tab 3" }],
  },
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Index: Story = {
  render: ({ items, ...args }) => (
    <Div>
      <Tab {...args} items={items} />

      <Div height="50px" />

      <Tab
        {...args}
        items={items.map((item) => ({
          ...item,
          icon: { name: "arrow-back", color: "inherit", size: "h-lg" },
        }))}
      />

      <Div height="50px" />

      <Tab
        {...args}
        items={items.map((item) => ({
          ...item,
          title: undefined,
          icon: { name: "arrow-back", color: "inherit", size: "h-lg" },
        }))}
      />
    </Div>
  ),
};
