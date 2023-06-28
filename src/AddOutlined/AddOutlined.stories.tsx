import type { Meta, StoryObj } from "@storybook/react";

import { AddOutlinedIcon } from "./AddOutlined.presenter";

interface Story extends StoryObj<typeof AddOutlinedIcon> {}

const meta: Meta<typeof AddOutlinedIcon> = {
  component: AddOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
