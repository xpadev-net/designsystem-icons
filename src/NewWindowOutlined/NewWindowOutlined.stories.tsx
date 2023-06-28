import type { Meta, StoryObj } from "@storybook/react";

import { NewWindowOutlinedIcon } from "./NewWindowOutlined.presenter";

interface Story extends StoryObj<typeof NewWindowOutlinedIcon> {}

const meta: Meta<typeof NewWindowOutlinedIcon> = {
  component: NewWindowOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
