import type { Meta, StoryObj } from "@storybook/react";

import { CertificationWithSealOutlinedIcon } from "./CertificationWithSealOutlined.presenter";

interface Story extends StoryObj<typeof CertificationWithSealOutlinedIcon> {}

const meta: Meta<typeof CertificationWithSealOutlinedIcon> = {
  component: CertificationWithSealOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
