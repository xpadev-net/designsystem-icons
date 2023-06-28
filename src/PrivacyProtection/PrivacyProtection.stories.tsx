import type { Meta, StoryObj } from "@storybook/react";

import { PrivacyProtectionIcon } from "./PrivacyProtection.presenter";

interface Story extends StoryObj<typeof PrivacyProtectionIcon> {}

const meta: Meta<typeof PrivacyProtectionIcon> = {
  component: PrivacyProtectionIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
