import type { Meta, StoryObj } from "@storybook/react";

import { CompleteIcon } from "./Complete.presenter";

interface Story extends StoryObj<typeof CompleteIcon> {}

const meta: Meta<typeof CompleteIcon> = {
  component: CompleteIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
