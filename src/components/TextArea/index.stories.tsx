import TextArea from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  args: {
    size: "sm",
    value: "value ...",
    placeholder: "Placeholder",
    label: "Title",
    required: false,
    state: { type: "error", message: "Error Text" },
    rows: 3,
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Index: Story = {
  render: (args) => <TextArea {...args} />,
};
