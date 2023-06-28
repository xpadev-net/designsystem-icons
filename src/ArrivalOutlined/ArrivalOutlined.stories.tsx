import type { Meta, StoryObj } from "@storybook/react";

import { ArrivalOutlinedIcon } from "./ArrivalOutlined.presenter";

interface Story extends StoryObj<typeof ArrivalOutlinedIcon> {}

const meta: Meta<typeof ArrivalOutlinedIcon> = {
  component: ArrivalOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
