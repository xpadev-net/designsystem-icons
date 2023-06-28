import type { Meta, StoryObj } from "@storybook/react";

import { TaxOutlinedIcon } from "./TaxOutlined.presenter";

interface Story extends StoryObj<typeof TaxOutlinedIcon> {}

const meta: Meta<typeof TaxOutlinedIcon> = {
  component: TaxOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
