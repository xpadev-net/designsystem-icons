import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const BankAccountIcon = ({ className, color }: IconProps) => {
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
      <g clipPath="url(#clip0_320_484)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4H22V7H2V4ZM2 17.3V8.5H22V17.2C22 18.8 20.7 20 19.2 20H4.7C3.2 20 2 18.8 2 17.3ZM12 13.4L10.4 10.5H9.1L10.8 13.5H9.4V14.5H11.4V15.5H9.4V16.5H11.4V18H12.4V16.5H14.4V15.5H12.4V14.5H14.4V13.5H13L14.7 10.5H13.6L12 13.4Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_484">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
