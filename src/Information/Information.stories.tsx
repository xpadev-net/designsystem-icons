import type { Meta, StoryObj } from "@storybook/react";

import { InformationIcon } from "./Information.presenter";

interface Story extends StoryObj<typeof InformationIcon> {}

const meta: Meta<typeof InformationIcon> = {
  component: InformationIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
