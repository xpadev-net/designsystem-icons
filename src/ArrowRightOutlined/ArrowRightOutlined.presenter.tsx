import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const ArrowRightOutlinedIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_191)">
        <path d="M9 21L8 20L16 12L8 4L9 3L18.1 12L9 21Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_191">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
