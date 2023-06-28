import type { Meta, StoryObj } from "@storybook/react";

import { LawsIcon } from "./Laws.presenter";

interface Story extends StoryObj<typeof LawsIcon> {}

const meta: Meta<typeof LawsIcon> = {
  component: LawsIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
