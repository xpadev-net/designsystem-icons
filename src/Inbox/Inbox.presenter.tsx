import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const InboxIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_612)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 12.5L2 4.5H22L12 12.5ZM2 6.2002L12 14.2002L22 6.2002V19.5002H2V6.2002Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_612">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
