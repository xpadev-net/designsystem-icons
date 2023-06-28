import type { Meta, StoryObj } from "@storybook/react";

import { ArrowLeftIcon } from "./ArrowLeft.presenter";

interface Story extends StoryObj<typeof ArrowLeftIcon> {}

const meta: Meta<typeof ArrowLeftIcon> = {
  component: ArrowLeftIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
