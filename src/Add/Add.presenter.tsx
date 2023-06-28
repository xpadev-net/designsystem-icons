import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const AddIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_187)">
        <path d="M13.0008 10.9998V2.7998H11.0008V10.9998H2.80078V12.9998H11.0008V21.1998H13.0008V12.9998H21.2008V10.9998H13.0008Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_187">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
