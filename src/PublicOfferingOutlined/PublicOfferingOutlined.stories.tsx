import type { Meta, StoryObj } from "@storybook/react";

import { PublicOfferingOutlinedIcon } from "./PublicOfferingOutlined.presenter";

interface Story extends StoryObj<typeof PublicOfferingOutlinedIcon> {}

const meta: Meta<typeof PublicOfferingOutlinedIcon> = {
  component: PublicOfferingOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
