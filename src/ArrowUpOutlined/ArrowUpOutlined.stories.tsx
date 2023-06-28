import type { Meta, StoryObj } from "@storybook/react";

import { ArrowUpOutlinedIcon } from "./ArrowUpOutlined.presenter";

interface Story extends StoryObj<typeof ArrowUpOutlinedIcon> {}

const meta: Meta<typeof ArrowUpOutlinedIcon> = {
  component: ArrowUpOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
