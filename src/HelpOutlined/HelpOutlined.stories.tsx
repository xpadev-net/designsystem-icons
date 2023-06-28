import type { Meta, StoryObj } from "@storybook/react";

import { HelpOutlinedIcon } from "./HelpOutlined.presenter";

interface Story extends StoryObj<typeof HelpOutlinedIcon> {}

const meta: Meta<typeof HelpOutlinedIcon> = {
  component: HelpOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
