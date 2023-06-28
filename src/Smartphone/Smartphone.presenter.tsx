import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const SmartphoneIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_382)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.7 2H17.2C18.2 2 19 2.8 19.1 3.8V20.3C19.1 21.3 18.3 22.1 17.3 22.1H6.8C5.8 22.1 5 21.3 5 20.3V3.8C5 2.8 5.8 2 6.7 2ZM12 20.7C12.2 20.7 12.4 20.6 12.6 20.5C12.9 20.3 13 20.1 13 19.7C13 19.1 12.6 18.7 12 18.7C11.4 18.7 11 19.1 11 19.7C11 20.1 11.2 20.3 11.4 20.5C11.5 20.6 11.8 20.7 12 20.7ZM6.5 17.5H17.5V4H6.5V17.5ZM7.5 5H16.5V16.5H7.5V5Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_382">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
