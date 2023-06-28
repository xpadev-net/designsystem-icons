import type { Meta, StoryObj } from "@storybook/react";

import { SearchIcon } from "./Search.presenter";

interface Story extends StoryObj<typeof SearchIcon> {}

const meta: Meta<typeof SearchIcon> = {
  component: SearchIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
