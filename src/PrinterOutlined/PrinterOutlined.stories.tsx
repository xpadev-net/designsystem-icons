import type { Meta, StoryObj } from "@storybook/react";

import { PrinterOutlinedIcon } from "./PrinterOutlined.presenter";

interface Story extends StoryObj<typeof PrinterOutlinedIcon> {}

const meta: Meta<typeof PrinterOutlinedIcon> = {
  component: PrinterOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
