import type { Meta, StoryObj } from "@storybook/react";

import { HouseIcon } from "./House.presenter";

interface Story extends StoryObj<typeof HouseIcon> {}

const meta: Meta<typeof HouseIcon> = {
  component: HouseIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
