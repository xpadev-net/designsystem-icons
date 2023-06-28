import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const AttentionIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_107)">
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM11.3 6.5H12.8V14H11.3V6.5ZM12 15.5C12.6 15.5 13 15.9 13 16.5C13 17.1 12.6 17.5 12 17.5C11.4 17.5 11 17.1 11 16.5C11 15.9 11.4 15.5 12 15.5Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_107">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
