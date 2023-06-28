import type { Meta, StoryObj } from "@storybook/react";

import { PersonalComputerOutlinedIcon } from "./PersonalComputerOutlined.presenter";

interface Story extends StoryObj<typeof PersonalComputerOutlinedIcon> {}

const meta: Meta<typeof PersonalComputerOutlinedIcon> = {
  component: PersonalComputerOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
