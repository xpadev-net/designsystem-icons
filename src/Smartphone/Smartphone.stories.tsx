import type { Meta, StoryObj } from "@storybook/react";

import { SmartphoneIcon } from "./Smartphone.presenter";

interface Story extends StoryObj<typeof SmartphoneIcon> {}

const meta: Meta<typeof SmartphoneIcon> = {
  component: SmartphoneIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
