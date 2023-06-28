import type { Meta, StoryObj } from "@storybook/react";

import { HelpIcon } from "./Help.presenter";

interface Story extends StoryObj<typeof HelpIcon> {}

const meta: Meta<typeof HelpIcon> = {
  component: HelpIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
