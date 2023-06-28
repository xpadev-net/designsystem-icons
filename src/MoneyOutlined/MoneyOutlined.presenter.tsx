import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const MoneyOutlinedIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_490)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12ZM3.5 12C3.5 7.3 7.3 3.5 12 3.5C16.7 3.5 20.5 7.3 20.5 12C20.5 16.7 16.7 20.5 12 20.5C7.3 20.5 3.5 16.7 3.5 12ZM12.0016 11.7L14.7016 7H16.4016L13.6016 12H16.0016V13H12.7016V14.5H16.0016V15.5H12.7016V18H11.2016V15.5H8.00156V14.5H11.2016V13H8.00156V12H10.4016L7.60156 7H9.30156L12.0016 11.7Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_490">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
