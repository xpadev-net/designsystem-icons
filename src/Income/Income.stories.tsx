import type { Meta, StoryObj } from "@storybook/react";

import { IncomeIcon } from "./Income.presenter";

interface Story extends StoryObj<typeof IncomeIcon> {}

const meta: Meta<typeof IncomeIcon> = {
  component: IncomeIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
