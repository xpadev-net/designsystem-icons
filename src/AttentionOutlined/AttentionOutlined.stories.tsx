import type { Meta, StoryObj } from "@storybook/react";

import { AttentionOutlinedIcon } from "./AttentionOutlined.presenter";

interface Story extends StoryObj<typeof AttentionOutlinedIcon> {}

const meta: Meta<typeof AttentionOutlinedIcon> = {
  component: AttentionOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
