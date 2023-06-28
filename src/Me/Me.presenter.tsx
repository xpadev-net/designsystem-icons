import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const MeIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_680)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5ZM13.2 13.0997C17.5 13.0997 21 16.4997 21 20.7997V21.9997H3V20.7997C3 16.4997 6.5 12.9997 10.7 13.0997H13.2Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_680">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
