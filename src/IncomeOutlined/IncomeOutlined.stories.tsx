import type { Meta, StoryObj } from "@storybook/react";

import { IncomeOutlinedIcon } from "./IncomeOutlined.presenter";

interface Story extends StoryObj<typeof IncomeOutlinedIcon> {}

const meta: Meta<typeof IncomeOutlinedIcon> = {
  component: IncomeOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
