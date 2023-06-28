import type { Meta, StoryObj } from "@storybook/react";

import { PrinterIcon } from "./Printer.presenter";

interface Story extends StoryObj<typeof PrinterIcon> {}

const meta: Meta<typeof PrinterIcon> = {
  component: PrinterIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
