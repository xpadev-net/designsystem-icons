import type { Meta, StoryObj } from "@storybook/react";

import { MenuIcon } from "./Menu.presenter";

interface Story extends StoryObj<typeof MenuIcon> {}

const meta: Meta<typeof MenuIcon> = {
  component: MenuIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};
