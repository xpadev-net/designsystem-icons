import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const CopyIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_75)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 2.5H20V18H7.5V2.5ZM5.5 20.0002H15.8V21.5002H4V6.7002H5.5V20.0002Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_75">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
