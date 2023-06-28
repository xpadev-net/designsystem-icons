import type { Meta, StoryObj } from "@storybook/react";

import { LawsOutlinedIcon } from "./LawsOutlined.presenter";

interface Story extends StoryObj<typeof LawsOutlinedIcon> {}

const meta: Meta<typeof LawsOutlinedIcon> = {
  component: LawsOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
