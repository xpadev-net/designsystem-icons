import type { Meta, StoryObj } from "@storybook/react";

import { ImmunizationIcon } from "./Immunization.presenter";

interface Story extends StoryObj<typeof ImmunizationIcon> {}

const meta: Meta<typeof ImmunizationIcon> = {
  component: ImmunizationIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
