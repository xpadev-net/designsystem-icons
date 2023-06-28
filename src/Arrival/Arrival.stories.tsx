import type { Meta, StoryObj } from "@storybook/react";

import { ArrivalIcon } from "./Arrival.presenter";

interface Story extends StoryObj<typeof ArrivalIcon> {}

const meta: Meta<typeof ArrivalIcon> = {
  component: ArrivalIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
