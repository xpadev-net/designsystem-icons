import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const PrinterIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_401)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 3H19V6.2H5V3ZM20.3 17H22V7.5H2V17H3.7V10.7H20.3V17ZM5 21H19V12H5V21ZM8 14.5H16V15.5H8V14.5ZM16 18.5H8V17.5H16V18.5Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_401">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
