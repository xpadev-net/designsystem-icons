import type { Meta, StoryObj } from "@storybook/react";

import { InboxIcon } from "./Inbox.presenter";

interface Story extends StoryObj<typeof InboxIcon> {}

const meta: Meta<typeof InboxIcon> = {
  component: InboxIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
