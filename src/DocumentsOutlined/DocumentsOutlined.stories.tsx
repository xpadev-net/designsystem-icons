import type { Meta, StoryObj } from "@storybook/react";

import { DocumentsOutlinedIcon } from "./DocumentsOutlined.presenter";

interface Story extends StoryObj<typeof DocumentsOutlinedIcon> {}

const meta: Meta<typeof DocumentsOutlinedIcon> = {
  component: DocumentsOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
