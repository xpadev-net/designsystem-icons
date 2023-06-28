import type { Meta, StoryObj } from "@storybook/react";

import { EApplicationOutlinedIcon } from "./EApplicationOutlined.presenter";

interface Story extends StoryObj<typeof EApplicationOutlinedIcon> {}

const meta: Meta<typeof EApplicationOutlinedIcon> = {
  component: EApplicationOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
