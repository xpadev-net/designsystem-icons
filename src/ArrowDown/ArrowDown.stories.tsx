import type { Meta, StoryObj } from "@storybook/react";

import { ArrowDownIcon } from "./ArrowDown.presenter";

interface Story extends StoryObj<typeof ArrowDownIcon> {}

const meta: Meta<typeof ArrowDownIcon> = {
  component: ArrowDownIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
