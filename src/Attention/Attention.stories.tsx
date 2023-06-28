import type { Meta, StoryObj } from "@storybook/react";

import { AttentionIcon } from "./Attention.presenter";

interface Story extends StoryObj<typeof AttentionIcon> {}

const meta: Meta<typeof AttentionIcon> = {
  component: AttentionIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
