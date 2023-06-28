import type { Meta, StoryObj } from "@storybook/react";

import { MunicipalityOutlinedIcon } from "./MunicipalityOutlined.presenter";

interface Story extends StoryObj<typeof MunicipalityOutlinedIcon> {}

const meta: Meta<typeof MunicipalityOutlinedIcon> = {
  component: MunicipalityOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
