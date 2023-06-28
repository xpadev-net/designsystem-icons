import type { Meta, StoryObj } from "@storybook/react";

import { HealthIcon } from "./Health.presenter";

interface Story extends StoryObj<typeof HealthIcon> {}

const meta: Meta<typeof HealthIcon> = {
  component: HealthIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
