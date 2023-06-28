import type { Meta, StoryObj } from "@storybook/react";

import { SmartphoneOutlinedIcon } from "./SmartphoneOutlined.presenter";

interface Story extends StoryObj<typeof SmartphoneOutlinedIcon> {}

const meta: Meta<typeof SmartphoneOutlinedIcon> = {
  component: SmartphoneOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
