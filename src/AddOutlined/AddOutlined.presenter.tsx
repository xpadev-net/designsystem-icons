import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const AddOutlinedIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_184)">
        <path d="M21 11.2H12.7V3H11.2V11.2H3V12.7H11.2V21H12.7V12.7H21V11.2Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_184">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
