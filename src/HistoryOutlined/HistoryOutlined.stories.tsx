import type { Meta, StoryObj } from "@storybook/react";

import { HistoryOutlinedIcon } from "./HistoryOutlined.presenter";

interface Story extends StoryObj<typeof HistoryOutlinedIcon> {}

const meta: Meta<typeof HistoryOutlinedIcon> = {
  component: HistoryOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
