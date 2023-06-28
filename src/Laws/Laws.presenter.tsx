import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const LawsIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_271)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8008 4.8L14.6008 2L20.2008 7.7L17.4008 10.5L11.8008 4.8ZM9.67578 6.93799L10.7364 5.87734L22.05 17.1909L20.9894 18.2516L9.67578 6.93799ZM3 19.5H16V21H3V19.5ZM8.59922 8L5.69922 10.8L11.3992 16.5L14.1992 13.7L8.59922 8Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_271">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
