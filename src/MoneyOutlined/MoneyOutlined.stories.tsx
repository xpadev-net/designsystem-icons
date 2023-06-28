import type { Meta, StoryObj } from "@storybook/react";

import { MoneyOutlinedIcon } from "./MoneyOutlined.presenter";

interface Story extends StoryObj<typeof MoneyOutlinedIcon> {}

const meta: Meta<typeof MoneyOutlinedIcon> = {
  component: MoneyOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
