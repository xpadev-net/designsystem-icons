import type { Meta, StoryObj } from "@storybook/react";

import { MotherAndChildOutlinedIcon } from "./MotherAndChildOutlined.presenter";

interface Story extends StoryObj<typeof MotherAndChildOutlinedIcon> {}

const meta: Meta<typeof MotherAndChildOutlinedIcon> = {
  component: MotherAndChildOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
