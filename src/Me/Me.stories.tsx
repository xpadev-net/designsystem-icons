import type { Meta, StoryObj } from "@storybook/react";

import { MeIcon } from "./Me.presenter";

interface Story extends StoryObj<typeof MeIcon> {}

const meta: Meta<typeof MeIcon> = {
  component: MeIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
