import type { Meta, StoryObj } from "@storybook/react";

import { TaxIcon } from "./Tax.presenter";

interface Story extends StoryObj<typeof TaxIcon> {}

const meta: Meta<typeof TaxIcon> = {
  component: TaxIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
