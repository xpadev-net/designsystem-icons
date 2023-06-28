import type { Meta, StoryObj } from "@storybook/react";

import { WorkOutlinedIcon } from "./WorkOutlined.presenter";

interface Story extends StoryObj<typeof WorkOutlinedIcon> {}

const meta: Meta<typeof WorkOutlinedIcon> = {
  component: WorkOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
