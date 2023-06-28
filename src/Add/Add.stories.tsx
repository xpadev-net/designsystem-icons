import type { Meta, StoryObj } from "@storybook/react";

import { AddIcon } from "./Add.presenter";

interface Story extends StoryObj<typeof AddIcon> {}

const meta: Meta<typeof AddIcon> = {
  component: AddIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
