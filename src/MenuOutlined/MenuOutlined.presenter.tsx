import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const MenuOutlinedIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_131)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 5.5H3V7H21V5.5ZM21 11.2998H3V12.7998H21V11.2998ZM3 17H21V18.5H3V17Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_131">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
