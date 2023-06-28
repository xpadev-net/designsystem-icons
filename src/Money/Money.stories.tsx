import type { Meta, StoryObj } from "@storybook/react";

import { MoneyIcon } from "./Money.presenter";

interface Story extends StoryObj<typeof MoneyIcon> {}

const meta: Meta<typeof MoneyIcon> = {
  component: MoneyIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
