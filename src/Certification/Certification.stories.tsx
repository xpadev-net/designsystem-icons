import type { Meta, StoryObj } from "@storybook/react";

import { CertificationIcon } from "./Certification.presenter";

interface Story extends StoryObj<typeof CertificationIcon> {}

const meta: Meta<typeof CertificationIcon> = {
  component: CertificationIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
