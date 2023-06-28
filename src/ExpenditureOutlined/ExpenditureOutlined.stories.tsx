import type { Meta, StoryObj } from "@storybook/react";

import { ExpenditureOutlinedIcon } from "./ExpenditureOutlined.presenter";

interface Story extends StoryObj<typeof ExpenditureOutlinedIcon> {}

const meta: Meta<typeof ExpenditureOutlinedIcon> = {
  component: ExpenditureOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
