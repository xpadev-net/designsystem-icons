import type { Meta, StoryObj } from "@storybook/react";

import { EApplicationIcon } from "./EApplication.presenter";

interface Story extends StoryObj<typeof EApplicationIcon> {}

const meta: Meta<typeof EApplicationIcon> = {
  component: EApplicationIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
