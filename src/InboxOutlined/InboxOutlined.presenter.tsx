import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const InboxOutlinedIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_609)">
        <path d="M2 4V20H22V4H2ZM20.4 5.5L12 11.9L3.6 5.5H20.4ZM3.5 18.5V7.3L12 13.8L20.5 7.3V18.5H3.5Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_609">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
