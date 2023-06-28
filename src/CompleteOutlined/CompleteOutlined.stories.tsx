import type { Meta, StoryObj } from "@storybook/react";

import { CompleteOutlinedIcon } from "./CompleteOutlined.presenter";

interface Story extends StoryObj<typeof CompleteOutlinedIcon> {}

const meta: Meta<typeof CompleteOutlinedIcon> = {
  component: CompleteOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
