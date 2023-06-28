import type { Meta, StoryObj } from "@storybook/react";

import { LuggageIcon } from "./Luggage.presenter";

interface Story extends StoryObj<typeof LuggageIcon> {}

const meta: Meta<typeof LuggageIcon> = {
  component: LuggageIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
