import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const DocumentsIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_414)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.6 4L11.6 6H22V10.5H2V4H9.6ZM2 12H22V21H2V12Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_414">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
