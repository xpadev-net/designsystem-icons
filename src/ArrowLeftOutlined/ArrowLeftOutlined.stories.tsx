import type { Meta, StoryObj } from "@storybook/react";

import { ArrowLeftOutlinedIcon } from "./ArrowLeftOutlined.presenter";

interface Story extends StoryObj<typeof ArrowLeftOutlinedIcon> {}

const meta: Meta<typeof ArrowLeftOutlinedIcon> = {
  component: ArrowLeftOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
