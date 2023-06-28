import type { Meta, StoryObj } from "@storybook/react";

import { HistoryIcon } from "./History.presenter";

interface Story extends StoryObj<typeof HistoryIcon> {}

const meta: Meta<typeof HistoryIcon> = {
  component: HistoryIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
