import type { Meta, StoryObj } from "@storybook/react";

import { InboxOutlinedIcon } from "./InboxOutlined.presenter";

interface Story extends StoryObj<typeof InboxOutlinedIcon> {}

const meta: Meta<typeof InboxOutlinedIcon> = {
  component: InboxOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
