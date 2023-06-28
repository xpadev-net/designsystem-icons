import type { Meta, StoryObj } from "@storybook/react";

import { DownloadIcon } from "./Download.presenter";

interface Story extends StoryObj<typeof DownloadIcon> {}

const meta: Meta<typeof DownloadIcon> = {
  component: DownloadIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
