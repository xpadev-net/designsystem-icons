import type { Meta, StoryObj } from "@storybook/react";

import { FillableCardIcon } from "./FillableCard.presenter";

interface Story extends StoryObj<typeof FillableCardIcon> {}

const meta: Meta<typeof FillableCardIcon> = {
  component: FillableCardIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
