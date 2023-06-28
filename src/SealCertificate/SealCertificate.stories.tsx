import type { Meta, StoryObj } from "@storybook/react";

import { SealCertificateIcon } from "./SealCertificate.presenter";

interface Story extends StoryObj<typeof SealCertificateIcon> {}

const meta: Meta<typeof SealCertificateIcon> = {
  component: SealCertificateIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
