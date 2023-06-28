import type { Meta, StoryObj } from "@storybook/react";

import { ApplicationIcon } from "./Application.presenter";

interface Story extends StoryObj<typeof ApplicationIcon> {}

const meta: Meta<typeof ApplicationIcon> = {
  component: ApplicationIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
