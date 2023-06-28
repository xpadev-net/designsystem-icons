import type { Meta, StoryObj } from "@storybook/react";

import { CodeReaderOutlinedIcon } from "./CodeReaderOutlined.presenter";

interface Story extends StoryObj<typeof CodeReaderOutlinedIcon> {}

const meta: Meta<typeof CodeReaderOutlinedIcon> = {
  component: CodeReaderOutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
