import type { Meta, StoryObj } from "@storybook/react";

import { NewWindowIcon } from "./NewWindow.presenter";

interface Story extends StoryObj<typeof NewWindowIcon> {}

const meta: Meta<typeof NewWindowIcon> = {
  component: NewWindowIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
