import type { Meta, StoryObj } from "@storybook/react";

import { ExpenditureIcon } from "./Expenditure.presenter";

interface Story extends StoryObj<typeof ExpenditureIcon> {}

const meta: Meta<typeof ExpenditureIcon> = {
  component: ExpenditureIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
