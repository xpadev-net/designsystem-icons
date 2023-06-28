import type { Meta, StoryObj } from "@storybook/react";

import { ArrowRightOutlinedIcon } from "./ArrowRightOutlined.presenter";

interface Story extends StoryObj<typeof ArrowRightOutlinedIcon> {}

const meta: Meta<typeof ArrowRightOutlinedIcon> = {
  component: ArrowRightOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
