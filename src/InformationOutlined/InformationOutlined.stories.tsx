import type { Meta, StoryObj } from "@storybook/react";

import { InformationOutlinedIcon } from "./InformationOutlined.presenter";

interface Story extends StoryObj<typeof InformationOutlinedIcon> {}

const meta: Meta<typeof InformationOutlinedIcon> = {
  component: InformationOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
