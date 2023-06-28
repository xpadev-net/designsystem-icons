import type { Meta, StoryObj } from "@storybook/react";

import { ChildOutlinedIcon } from "./ChildOutlined.presenter";

interface Story extends StoryObj<typeof ChildOutlinedIcon> {}

const meta: Meta<typeof ChildOutlinedIcon> = {
  component: ChildOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
