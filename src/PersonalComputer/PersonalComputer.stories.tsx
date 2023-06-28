import type { Meta, StoryObj } from "@storybook/react";

import { PersonalComputerIcon } from "./PersonalComputer.presenter";

interface Story extends StoryObj<typeof PersonalComputerIcon> {}

const meta: Meta<typeof PersonalComputerIcon> = {
  component: PersonalComputerIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
