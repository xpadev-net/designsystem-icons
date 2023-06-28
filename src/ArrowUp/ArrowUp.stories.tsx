import type { Meta, StoryObj } from "@storybook/react";

import { ArrowUpIcon } from "./ArrowUp.presenter";

interface Story extends StoryObj<typeof ArrowUpIcon> {}

const meta: Meta<typeof ArrowUpIcon> = {
  component: ArrowUpIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
