import type { Meta, StoryObj } from "@storybook/react";

import { TransactionIcon } from "./Transaction.presenter";

interface Story extends StoryObj<typeof TransactionIcon> {}

const meta: Meta<typeof TransactionIcon> = {
  component: TransactionIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
