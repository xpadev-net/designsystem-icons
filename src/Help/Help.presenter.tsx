import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const HelpIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_127)">
        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 17.5C11.4 17.5 11 17.1 11 16.5C11 15.9 11.4 15.5 12 15.5C12.6 15.5 13 15.9 13 16.5C13 17.1 12.6 17.5 12 17.5ZM13.9 11.3C13.1 12 12.7 13 12.8 14H11.3C11.2 12.5 11.8 11.2 12.9 10.2C13.7 9.5 13.6 8.8 13.5 8.4C13 7 10.5 7.3 10.5 8.9H9C9 7.1 10.7 5.7 12.4 6C15.1 6.4 15.9 9.7 13.9 11.3Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_127">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
