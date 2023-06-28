import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const MenuIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_137)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.1992 5.2998H2.69922V7.2998H21.1992V5.2998ZM21.1992 11H2.69922V13H21.1992V11ZM2.69922 16.6997H21.1992V18.6997H2.69922V16.6997Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_137">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
