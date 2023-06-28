import type { Meta, StoryObj } from "@storybook/react";

import { PensionIcon } from "./Pension.presenter";

interface Story extends StoryObj<typeof PensionIcon> {}

const meta: Meta<typeof PensionIcon> = {
  component: PensionIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
