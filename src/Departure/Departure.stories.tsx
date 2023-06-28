import type { Meta, StoryObj } from "@storybook/react";

import { DepartureIcon } from "./Departure.presenter";

interface Story extends StoryObj<typeof DepartureIcon> {}

const meta: Meta<typeof DepartureIcon> = {
  component: DepartureIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
