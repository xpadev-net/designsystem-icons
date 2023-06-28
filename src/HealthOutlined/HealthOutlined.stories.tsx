import type { Meta, StoryObj } from "@storybook/react";

import { HealthOutlinedIcon } from "./HealthOutlined.presenter";

interface Story extends StoryObj<typeof HealthOutlinedIcon> {}

const meta: Meta<typeof HealthOutlinedIcon> = {
  component: HealthOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
