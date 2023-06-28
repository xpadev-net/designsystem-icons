import type { Meta, StoryObj } from "@storybook/react";

import { SealCertificateOutlinedIcon } from "./SealCertificateOutlined.presenter";

interface Story extends StoryObj<typeof SealCertificateOutlinedIcon> {}

const meta: Meta<typeof SealCertificateOutlinedIcon> = {
  component: SealCertificateOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
