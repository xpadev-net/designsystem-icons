import type { Meta, StoryObj } from "@storybook/react";

import { MenuOutlinedIcon } from "./MenuOutlined.presenter";

interface Story extends StoryObj<typeof MenuOutlinedIcon> {}

const meta: Meta<typeof MenuOutlinedIcon> = {
  component: MenuOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
