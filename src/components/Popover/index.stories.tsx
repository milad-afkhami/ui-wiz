import { Div } from "style-wiz";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useArgs } from "@storybook/preview-api";
import Popover from ".";
import { Button } from "../..";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Popover> = {
  component: Popover,
  args: {
    isOpen: false,
    height: "200px",
    children: "Content of Popover",
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Index: Story = {
  render: function Render(args) {
    const [_args, _updateArgs] = useArgs();
    return (
      <Div display="flex" gap="3" m="3" width="150px" position="relative">
        <Button
          type="button"
          onClick={() => _updateArgs({ isOpen: !_args.isOpen })}
        >
          Toggle Popover
        </Button>
        <Popover {...args} handleClose={() => _updateArgs({ isOpen: false })} />
      </Div>
    );
  },
};
