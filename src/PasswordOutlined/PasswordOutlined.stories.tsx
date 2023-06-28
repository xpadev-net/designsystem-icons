import type { Meta, StoryObj } from "@storybook/react";

import { PasswordOutlinedIcon } from "./PasswordOutlined.presenter";

interface Story extends StoryObj<typeof PasswordOutlinedIcon> {}

const meta: Meta<typeof PasswordOutlinedIcon> = {
  component: PasswordOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
