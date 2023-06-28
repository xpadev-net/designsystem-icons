import type { Meta, StoryObj } from "@storybook/react";

import { MedicineOutlinedIcon } from "./MedicineOutlined.presenter";

interface Story extends StoryObj<typeof MedicineOutlinedIcon> {}

const meta: Meta<typeof MedicineOutlinedIcon> = {
  component: MedicineOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
