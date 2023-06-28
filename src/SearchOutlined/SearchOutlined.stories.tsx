import type { Meta, StoryObj } from "@storybook/react";

import { SearchOutlinedIcon } from "./SearchOutlined.presenter";

interface Story extends StoryObj<typeof SearchOutlinedIcon> {}

const meta: Meta<typeof SearchOutlinedIcon> = {
  component: SearchOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
