import type { Meta, StoryObj } from "@storybook/react";

import { PensionOutlinedIcon } from "./PensionOutlined.presenter";

interface Story extends StoryObj<typeof PensionOutlinedIcon> {}

const meta: Meta<typeof PensionOutlinedIcon> = {
  component: PensionOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
