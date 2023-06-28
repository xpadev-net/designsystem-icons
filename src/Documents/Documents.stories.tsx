import type { Meta, StoryObj } from "@storybook/react";

import { DocumentsIcon } from "./Documents.presenter";

interface Story extends StoryObj<typeof DocumentsIcon> {}

const meta: Meta<typeof DocumentsIcon> = {
  component: DocumentsIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
