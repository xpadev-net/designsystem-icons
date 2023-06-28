import type { Meta, StoryObj } from "@storybook/react";

import { MotherAndChildIcon } from "./MotherAndChild.presenter";

interface Story extends StoryObj<typeof MotherAndChildIcon> {}

const meta: Meta<typeof MotherAndChildIcon> = {
  component: MotherAndChildIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
