import type { Meta, StoryObj } from "@storybook/react";

import { SpecialistIcon } from "./Specialist.presenter";

interface Story extends StoryObj<typeof SpecialistIcon> {}

const meta: Meta<typeof SpecialistIcon> = {
  component: SpecialistIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
