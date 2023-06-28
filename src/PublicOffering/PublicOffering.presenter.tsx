import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const PublicOfferingIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_260)">
        <path d="M5 22H3.5V2.5L22 9.5L5 16.5V22Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_260">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
