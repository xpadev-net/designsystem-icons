import type { Meta, StoryObj } from "@storybook/react";

import { DownloadOutlinedIcon } from "./DownloadOutlined.presenter";

interface Story extends StoryObj<typeof DownloadOutlinedIcon> {}

const meta: Meta<typeof DownloadOutlinedIcon> = {
  component: DownloadOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
