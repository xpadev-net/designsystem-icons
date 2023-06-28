import type { Meta, StoryObj } from "@storybook/react";

import { CopyIcon } from "./Copy.presenter";

interface Story extends StoryObj<typeof CopyIcon> {}

const meta: Meta<typeof CopyIcon> = {
  component: CopyIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
