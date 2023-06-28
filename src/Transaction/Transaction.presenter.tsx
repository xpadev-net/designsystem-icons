import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const TransactionIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_445)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.40156 8.0001L7.40156 10.0001L6.00156 11.4001L1.60156 7.0001L6.00156 2.6001L7.40156 4.0001L5.40156 6.0001H21.2016V8.0001H5.40156ZM16.6031 13.0001L18.0031 11.6001L22.4031 16.0001L18.0031 20.4001L16.6031 19.0001L18.6031 17.0001H2.70312V15.0001H18.6031L16.6031 13.0001Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_445">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
