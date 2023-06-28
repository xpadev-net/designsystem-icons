import type { Meta, StoryObj } from "@storybook/react";

import { CodeReaderIcon } from "./CodeReader.presenter";

interface Story extends StoryObj<typeof CodeReaderIcon> {}

const meta: Meta<typeof CodeReaderIcon> = {
  component: CodeReaderIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
