import type { Meta, StoryObj } from "@storybook/react";

import { BankAccountIcon } from "./BankAccount.presenter";

interface Story extends StoryObj<typeof BankAccountIcon> {}

const meta: Meta<typeof BankAccountIcon> = {
  component: BankAccountIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
