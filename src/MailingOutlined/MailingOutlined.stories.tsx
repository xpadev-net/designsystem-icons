import type { Meta, StoryObj } from "@storybook/react";

import { MailingOutlinedIcon } from "./MailingOutlined.presenter";

interface Story extends StoryObj<typeof MailingOutlinedIcon> {}

const meta: Meta<typeof MailingOutlinedIcon> = {
  component: MailingOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
