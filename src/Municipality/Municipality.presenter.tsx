import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const MunicipalityIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_556)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 21.9V19.5L20.1 14.9L9.5 6.6L8 7.8V2H22V21.9H16.5ZM15 10H19V8.5H15V10ZM11.5 6.5H19V5H11.5V6.5ZM1.9 16.4L1 15.2L9.5 8.5L18 15.1L17.1 16.3L15 14.7V22H4V14.8L1.9 16.4ZM8 16V19H11V16H8Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_556">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
