import type { Meta, StoryObj } from "@storybook/react";

import { FastTrackOutlinedIcon } from "./FastTrackOutlined.presenter";

interface Story extends StoryObj<typeof FastTrackOutlinedIcon> {}

const meta: Meta<typeof FastTrackOutlinedIcon> = {
  component: FastTrackOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
