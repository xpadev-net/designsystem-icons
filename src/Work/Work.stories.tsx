import type { Meta, StoryObj } from "@storybook/react";

import { WorkIcon } from "./Work.presenter";

interface Story extends StoryObj<typeof WorkIcon> {}

const meta: Meta<typeof WorkIcon> = {
  component: WorkIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
