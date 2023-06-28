import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const DownloadOutlinedIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_144)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 9L19 10L12 17.1L5 10L6 9L11.2 14.2V3H12.7V14.2L18 9ZM3 21V19.5H21V21H3Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_144">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
