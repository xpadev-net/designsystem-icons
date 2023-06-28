import type { Meta, StoryObj } from "@storybook/react";

import { ChildIcon } from "./Child.presenter";

interface Story extends StoryObj<typeof ChildIcon> {}

const meta: Meta<typeof ChildIcon> = {
  component: ChildIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
