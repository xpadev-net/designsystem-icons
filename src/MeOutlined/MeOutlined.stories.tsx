import type { Meta, StoryObj } from "@storybook/react";

import { MeOutlinedIcon } from "./MeOutlined.presenter";

interface Story extends StoryObj<typeof MeOutlinedIcon> {}

const meta: Meta<typeof MeOutlinedIcon> = {
  component: MeOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
