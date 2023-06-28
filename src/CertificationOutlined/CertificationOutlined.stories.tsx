import type { Meta, StoryObj } from "@storybook/react";

import { CertificationOutlinedIcon } from "./CertificationOutlined.presenter";

interface Story extends StoryObj<typeof CertificationOutlinedIcon> {}

const meta: Meta<typeof CertificationOutlinedIcon> = {
  component: CertificationOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
