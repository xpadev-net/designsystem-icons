import type { Meta, StoryObj } from "@storybook/react";

import { ApplicationOutlinedIcon } from "./ApplicationOutlined.presenter";

interface Story extends StoryObj<typeof ApplicationOutlinedIcon> {}

const meta: Meta<typeof ApplicationOutlinedIcon> = {
  component: ApplicationOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
