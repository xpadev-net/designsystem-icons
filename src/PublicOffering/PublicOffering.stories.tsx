import type { Meta, StoryObj } from "@storybook/react";

import { PublicOfferingIcon } from "./PublicOffering.presenter";

interface Story extends StoryObj<typeof PublicOfferingIcon> {}

const meta: Meta<typeof PublicOfferingIcon> = {
  component: PublicOfferingIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
