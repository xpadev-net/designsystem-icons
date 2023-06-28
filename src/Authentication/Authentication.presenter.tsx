import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const AuthenticationIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_718)">
        <path d="M12 2L3 4.9V10.6C3 15.4 6.3 19.7 11.7 21.8L12 22L12.3 21.9C17.7 19.8 21 15.5 21 10.7V4.9L12 2ZM11 15.5L7 11.5L8.1 10.4L11.1 13.4L16 8.5L17 9.6L11 15.5Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_718">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
