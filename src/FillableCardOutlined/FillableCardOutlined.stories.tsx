import type { Meta, StoryObj } from "@storybook/react";

import { FillableCardOutlinedIcon } from "./FillableCardOutlined.presenter";

interface Story extends StoryObj<typeof FillableCardOutlinedIcon> {}

const meta: Meta<typeof FillableCardOutlinedIcon> = {
  component: FillableCardOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
