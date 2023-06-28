import type { Meta, StoryObj } from "@storybook/react";

import { ItineraryOutlinedIcon } from "./ItineraryOutlined.presenter";

interface Story extends StoryObj<typeof ItineraryOutlinedIcon> {}

const meta: Meta<typeof ItineraryOutlinedIcon> = {
  component: ItineraryOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
