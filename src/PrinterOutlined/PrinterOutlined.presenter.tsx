import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const PrinterOutlinedIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_395)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 7V3H5V7H2V17H5V21H19V17H22V7H19ZM6.5 4.5H17.5V7H6.5V4.5ZM17.5 19.5H6.5V12.5H17.5V19.5ZM20.5 15.5H19V11H5V15.5H3.5V8.5H20.5V15.5ZM8 17.7002H16V17.0002V16.7002H8V17.7002ZM8 14.2998H16V15.2998H8V14.2998Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_395">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
