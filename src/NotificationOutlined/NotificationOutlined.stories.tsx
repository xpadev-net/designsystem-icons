import type { Meta, StoryObj } from "@storybook/react";

import { NotificationOutlinedIcon } from "./NotificationOutlined.presenter";

interface Story extends StoryObj<typeof NotificationOutlinedIcon> {}

const meta: Meta<typeof NotificationOutlinedIcon> = {
  component: NotificationOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
