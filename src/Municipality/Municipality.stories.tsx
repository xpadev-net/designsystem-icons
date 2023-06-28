import type { Meta, StoryObj } from "@storybook/react";

import { MunicipalityIcon } from "./Municipality.presenter";

interface Story extends StoryObj<typeof MunicipalityIcon> {}

const meta: Meta<typeof MunicipalityIcon> = {
  component: MunicipalityIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
