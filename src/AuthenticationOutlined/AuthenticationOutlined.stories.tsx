import type { Meta, StoryObj } from "@storybook/react";

import { AuthenticationOutlinedIcon } from "./AuthenticationOutlined.presenter";

interface Story extends StoryObj<typeof AuthenticationOutlinedIcon> {}

const meta: Meta<typeof AuthenticationOutlinedIcon> = {
  component: AuthenticationOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
