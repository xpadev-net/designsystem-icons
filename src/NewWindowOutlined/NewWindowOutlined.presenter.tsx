import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const NewWindowOutlinedIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_155)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 19.5H19.5V13H21V21H3V3H11V4.5H4.5V19.5ZM14 4.5V3H21V10H19.5V5.6L10.5 14.5L9.5 13.5L18.4 4.5H14Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_155">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
