import type { Meta, StoryObj } from "@storybook/react";

import { ArrowDownOutlinedIcon } from "./ArrowDownOutlined.presenter";

interface Story extends StoryObj<typeof ArrowDownOutlinedIcon> {}

const meta: Meta<typeof ArrowDownOutlinedIcon> = {
  component: ArrowDownOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
