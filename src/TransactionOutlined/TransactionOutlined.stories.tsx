import type { Meta, StoryObj } from "@storybook/react";

import { TransactionOutlinedIcon } from "./TransactionOutlined.presenter";

interface Story extends StoryObj<typeof TransactionOutlinedIcon> {}

const meta: Meta<typeof TransactionOutlinedIcon> = {
  component: TransactionOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
