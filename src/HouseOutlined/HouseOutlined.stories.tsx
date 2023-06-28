import type { Meta, StoryObj } from "@storybook/react";

import { HouseOutlinedIcon } from "./HouseOutlined.presenter";

interface Story extends StoryObj<typeof HouseOutlinedIcon> {}

const meta: Meta<typeof HouseOutlinedIcon> = {
  component: HouseOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
