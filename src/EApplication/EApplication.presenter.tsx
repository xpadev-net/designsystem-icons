import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const EApplicationIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_284)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4H22V8.5H2V4ZM3.6 6.2C3.6 6.7 3.9 7 4.4 7C4.8 7 5.1 6.7 5.2 6.2C5.2 5.7 4.9 5.4 4.4 5.4C3.9 5.4 3.6 5.8 3.6 6.2ZM6.1 6.2C6.1 6.7 6.4 7 6.9 7C7.3 7 7.6 6.7 7.7 6.2C7.7 5.7 7.4 5.4 6.9 5.4C6.4 5.4 6.1 5.8 6.1 6.2ZM8.6 6.2C8.6 6.7 8.9 7 9.4 7C9.8 7 10.1 6.7 10.2 6.2C10.2 5.7 9.9 5.4 9.4 5.4C8.9 5.4 8.6 5.8 8.6 6.2ZM22 20H2V9.5H22V20ZM14.5 12L11.3 15L9.4 13.2L8.4 14.3L11.3 17L15.5 13.1L14.5 12Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_284">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
