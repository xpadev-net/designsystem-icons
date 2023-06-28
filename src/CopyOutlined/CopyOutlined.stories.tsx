import type { Meta, StoryObj } from "@storybook/react";

import { CopyOutlinedIcon } from "./CopyOutlined.presenter";

interface Story extends StoryObj<typeof CopyOutlinedIcon> {}

const meta: Meta<typeof CopyOutlinedIcon> = {
  component: CopyOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
