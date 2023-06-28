mkdir -p "./src/$1"
mkdir -p "./src/$1Outlined"
cat > "./src/$1/$1.presenter.tsx" << EOF
import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const $1Icon = ({ className, color }: IconProps) => {
  return (
    <BaseSvg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ fill: color }}
    >
    </BaseSvg>
  );
};
EOF
cat > "./src/$1/$1.stories.tsx" << EOF
import type { Meta, StoryObj } from "@storybook/react";

import { $1Icon } from "./$1.presenter";

interface Story extends StoryObj<typeof $1Icon> {}

const meta: Meta<typeof $1Icon> = {
  component: $1Icon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};

EOF
cat > "./src/$1/index.tsx" << EOF
export * from "./$1.presenter"
EOF
cat > "./src/$1Outlined/$1Outlined.presenter.tsx" << EOF
import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const ${1}OutlinedIcon = ({ className, color }: IconProps) => {
  return (
    <BaseSvg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ fill: color }}
    >
    </BaseSvg>
  );
};
EOF
cat > "./src/$1Outlined/$1Outlined.stories.tsx" << EOF
import type { Meta, StoryObj } from "@storybook/react";

import { $1OutlinedIcon } from "./$1Outlined.presenter";

interface Story extends StoryObj<typeof $1OutlinedIcon> {}

const meta: Meta<typeof $1OutlinedIcon> = {
  component: $1OutlinedIcon,
  argTypes: {},
};

export default meta;

export const Default: Story = {};

EOF
cat > "./src/$1Outlined/index.tsx" << EOF
export * from "./$1Outlined.presenter"
EOF
cat >> "./src/index.tsx" << EOF
export * from "./$1";
export * from "./$1Outlined";
EOF