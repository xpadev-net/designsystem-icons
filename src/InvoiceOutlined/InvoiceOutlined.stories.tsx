import type { Meta, StoryObj } from "@storybook/react";

import { InvoiceOutlinedIcon } from "./InvoiceOutlined.presenter";

interface Story extends StoryObj<typeof InvoiceOutlinedIcon> {}

const meta: Meta<typeof InvoiceOutlinedIcon> = {
  component: InvoiceOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
