import type { Meta, StoryObj } from "@storybook/react";

import { StampIcon } from "./Stamp.presenter";

interface Story extends StoryObj<typeof StampIcon> {}

const meta: Meta<typeof StampIcon> = {
  component: StampIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
