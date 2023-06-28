import type { Meta, StoryObj } from "@storybook/react";

import { StampOutlinedIcon } from "./StampOutlined.presenter";

interface Story extends StoryObj<typeof StampOutlinedIcon> {}

const meta: Meta<typeof StampOutlinedIcon> = {
  component: StampOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
