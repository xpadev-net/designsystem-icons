import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const CertificationIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_709)">
        <path d="M1.5 20H22.5V4H1.5V20ZM12.5 8.1H19V9.4H12.5V8.1ZM12.5 11.3H19V12.6H12.5V11.3ZM12.5 14.6H19V15.9H12.5V14.6ZM5 8.1H10.5V15.9H9.6H5V8.1Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_709">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
