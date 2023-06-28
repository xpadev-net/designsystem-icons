import type { Meta, StoryObj } from "@storybook/react";

import { PrivacyProtectionOutlinedIcon } from "./PrivacyProtectionOutlined.presenter";

interface Story extends StoryObj<typeof PrivacyProtectionOutlinedIcon> {}

const meta: Meta<typeof PrivacyProtectionOutlinedIcon> = {
  component: PrivacyProtectionOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
