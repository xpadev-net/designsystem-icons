import type { Meta, StoryObj } from "@storybook/react";

import { ItineraryIcon } from "./Itinerary.presenter";

interface Story extends StoryObj<typeof ItineraryIcon> {}

const meta: Meta<typeof ItineraryIcon> = {
  component: ItineraryIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
