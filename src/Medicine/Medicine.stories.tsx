import type { Meta, StoryObj } from "@storybook/react";

import { MedicineIcon } from "./Medicine.presenter";

interface Story extends StoryObj<typeof MedicineIcon> {}

const meta: Meta<typeof MedicineIcon> = {
  component: MedicineIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
