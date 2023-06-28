import type { Meta, StoryObj } from "@storybook/react";

import { MailingIcon } from "./Mailing.presenter";

interface Story extends StoryObj<typeof MailingIcon> {}

const meta: Meta<typeof MailingIcon> = {
  component: MailingIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
