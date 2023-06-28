import type { Meta, StoryObj } from "@storybook/react";

import { SpecialistOutlinedIcon } from "./SpecialistOutlined.presenter";

interface Story extends StoryObj<typeof SpecialistOutlinedIcon> {}

const meta: Meta<typeof SpecialistOutlinedIcon> = {
  component: SpecialistOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
