import { Div } from "style-wiz";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useArgs } from "@storybook/preview-api";
import Menu from ".";
import { Button } from "../..";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Menu> = {
  component: Menu,
  args: {
    isOpen: false,
    items: [
      { content: { title: "Item 1" }, value: 1, disabled: false },
      { content: { title: "Item 2" }, value: 2, disabled: false },
      { content: { title: "Item 3" }, value: 3, disabled: true },
      { content: { title: "Item 4" }, value: 4, disabled: false },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Index: Story = {
  render: function Render(args) {
    const [_args, _updateArgs] = useArgs();
    return (
      <Div display="flex" gap="3" m="3" width="150px" position="relative">
        <Button
          type="button"
          onClick={() => _updateArgs({ isOpen: !_args.isOpen })}
        >
          Toggle Menu
        </Button>
        <Menu {...args} handleClose={() => _updateArgs({ isOpen: false })} />
      </Div>
    );
  },
};
