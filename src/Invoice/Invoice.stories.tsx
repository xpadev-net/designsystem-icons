import type { Meta, StoryObj } from "@storybook/react";

import { InvoiceIcon } from "./Invoice.presenter";

interface Story extends StoryObj<typeof InvoiceIcon> {}

const meta: Meta<typeof InvoiceIcon> = {
  component: InvoiceIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
