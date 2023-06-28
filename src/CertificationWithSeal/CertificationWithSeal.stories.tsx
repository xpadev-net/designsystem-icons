import type { Meta, StoryObj } from "@storybook/react";

import { CertificationWithSealIcon } from "./CertificationWithSeal.presenter";

interface Story extends StoryObj<typeof CertificationWithSealIcon> {}

const meta: Meta<typeof CertificationWithSealIcon> = {
  component: CertificationWithSealIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
