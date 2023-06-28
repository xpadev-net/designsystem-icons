import type { Meta, StoryObj } from "@storybook/react";

import { UpdateIcon } from "./Update.presenter";

interface Story extends StoryObj<typeof UpdateIcon> {}

const meta: Meta<typeof UpdateIcon> = {
  component: UpdateIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
