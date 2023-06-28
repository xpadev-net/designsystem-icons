import type { Meta, StoryObj } from "@storybook/react";

import { ImmunizationOutlinedIcon } from "./ImmunizationOutlined.presenter";

interface Story extends StoryObj<typeof ImmunizationOutlinedIcon> {}

const meta: Meta<typeof ImmunizationOutlinedIcon> = {
  component: ImmunizationOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
