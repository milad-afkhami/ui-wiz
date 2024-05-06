import toast from "../../utils/toast";
import Button from "../Button";
import type Toast from ".";
import type { ToastItem } from "./props";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ToastItem> = {
  component: () => null,
  args: {
    title: "Toast title",
    message: "Toast message",
    hasCloseButton: true,
    duration: 3000,
    type: "success",
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Index: Story = {
  render: (args) => (
    <Button onClick={() => toast[args.type](args.message, args)}>
      Open Toast
    </Button>
  ),
};
