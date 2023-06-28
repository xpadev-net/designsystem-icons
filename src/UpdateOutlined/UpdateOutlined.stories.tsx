import type { Meta, StoryObj } from "@storybook/react";

import { UpdateOutlinedIcon } from "./UpdateOutlined.presenter";

interface Story extends StoryObj<typeof UpdateOutlinedIcon> {}

const meta: Meta<typeof UpdateOutlinedIcon> = {
  component: UpdateOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
