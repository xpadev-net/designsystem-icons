import type { Meta, StoryObj } from "@storybook/react";

import { NotificationIcon } from "./Notification.presenter";

interface Story extends StoryObj<typeof NotificationIcon> {}

const meta: Meta<typeof NotificationIcon> = {
  component: NotificationIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
