import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const TransactionOutlinedIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_440)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.79844 7.7L6.99844 10L5.99844 11L1.89844 7L5.99844 3L6.99844 4L4.79844 6.2H20.9984V7.7H4.79844ZM17 13L18 12L22.1 16L18 20L17 19L19.2 16.7H3V15.2H19.2L17 13Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_440">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
