import type { Meta, StoryObj } from "@storybook/react";

import { AuthenticationIcon } from "./Authentication.presenter";

interface Story extends StoryObj<typeof AuthenticationIcon> {}

const meta: Meta<typeof AuthenticationIcon> = {
  component: AuthenticationIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
