import type { Meta, StoryObj } from "@storybook/react";

import { LuggageOutlinedIcon } from "./LuggageOutlined.presenter";

interface Story extends StoryObj<typeof LuggageOutlinedIcon> {}

const meta: Meta<typeof LuggageOutlinedIcon> = {
  component: LuggageOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
