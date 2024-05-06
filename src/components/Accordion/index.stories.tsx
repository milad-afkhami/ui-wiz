import Accordion from ".";
import AccordionItem from "./atoms/Item";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  args: {
    openItemIndex: 2,
    children: [
      <AccordionItem label="Label 1" secondaryLabel="Secondary Label 1">
        <p>Content 1</p>
      </AccordionItem>,
      <AccordionItem label="Label 2" secondaryLabel="Secondary Label 2">
        <p>Content 2</p>
      </AccordionItem>,
      <AccordionItem label="Label 3" secondaryLabel="Secondary Label 3">
        <p>Content 3</p>
      </AccordionItem>,
      <AccordionItem label="Label 4" secondaryLabel="Secondary Label 4">
        <p>Content 4</p>
      </AccordionItem>,
    ],
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Index: Story = {
  render: (args) => <Accordion {...args} />,
};
