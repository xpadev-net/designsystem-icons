import type { Meta, StoryObj } from "@storybook/react";

import { PasswordIcon } from "./Password.presenter";

interface Story extends StoryObj<typeof PasswordIcon> {}

const meta: Meta<typeof PasswordIcon> = {
  component: PasswordIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
