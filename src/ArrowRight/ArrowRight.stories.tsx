import type { Meta, StoryObj } from "@storybook/react";

import { ArrowRightIcon } from "./ArrowRight.presenter";

interface Story extends StoryObj<typeof ArrowRightIcon> {}

const meta: Meta<typeof ArrowRightIcon> = {
  component: ArrowRightIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
