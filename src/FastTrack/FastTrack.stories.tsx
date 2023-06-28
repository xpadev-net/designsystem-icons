import type { Meta, StoryObj } from "@storybook/react";

import { FastTrackIcon } from "./FastTrack.presenter";

interface Story extends StoryObj<typeof FastTrackIcon> {}

const meta: Meta<typeof FastTrackIcon> = {
  component: FastTrackIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
