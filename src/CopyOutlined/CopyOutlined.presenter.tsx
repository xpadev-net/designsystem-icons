import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const CopyOutlinedIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_70)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 18H20V2.5H7.5V18ZM18.5 16.5H9V4H18.5V16.5ZM4 21.5002H15.8V20.0002H5.5V6.7002H4V21.5002Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_70">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
