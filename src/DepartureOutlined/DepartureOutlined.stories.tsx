import type { Meta, StoryObj } from "@storybook/react";

import { DepartureOutlinedIcon } from "./DepartureOutlined.presenter";

interface Story extends StoryObj<typeof DepartureOutlinedIcon> {}

const meta: Meta<typeof DepartureOutlinedIcon> = {
  component: DepartureOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
