import type { Meta, StoryObj } from "@storybook/react";

import { FamilyOutlinedIcon } from "./FamilyOutlined.presenter";

interface Story extends StoryObj<typeof FamilyOutlinedIcon> {}

const meta: Meta<typeof FamilyOutlinedIcon> = {
  component: FamilyOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
