import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const HouseIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_567)">
        <path d="M1 10.7L1.9 11.9L4 10.2V21.5H20V10.2L22.1 11.9L23 10.7L12 2L1 10.7ZM11 18.5H8.5V16H11V18.5ZM11 14H8.5V11.5H11V14ZM13 11.5H15.5V14H13V11.5ZM13 16H15.5V18.5H13V16Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_567">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
