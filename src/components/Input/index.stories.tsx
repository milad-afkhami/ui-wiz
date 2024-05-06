// eslint-disable-next-line import/no-extraneous-dependencies
import { useArgs } from "@storybook/preview-api";
import Input from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    size: "sm",
    type: "text",
    disabled: false,
    value: "Value",
    placeholder: "Placeholder",
    checked: false,
    label: "Floating Label",
    required: false,
    maxLength: 10,
    startAdornment: "menu",
    endAdornment: "close",
    readOnly: false,
    state: { type: "helper", message: "Helper Text" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Index: Story = {
  render: function Render(args) {
    const [_args, _updateArgs] = useArgs();
    return (
      <Input
        {...args}
        value={_args.value}
        onChange={(_, value) => _updateArgs({ value })}
      />
    );
  },
};
