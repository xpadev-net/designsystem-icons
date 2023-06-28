import type { Meta, StoryObj } from "@storybook/react";

import { BankAccountOutlinedIcon } from "./BankAccountOutlined.presenter";

interface Story extends StoryObj<typeof BankAccountOutlinedIcon> {}

const meta: Meta<typeof BankAccountOutlinedIcon> = {
  component: BankAccountOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
