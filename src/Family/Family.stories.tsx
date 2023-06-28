import type { Meta, StoryObj } from "@storybook/react";

import { FamilyIcon } from "./Family.presenter";

interface Story extends StoryObj<typeof FamilyIcon> {}

const meta: Meta<typeof FamilyIcon> = {
  component: FamilyIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
