import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const SearchOutlinedIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_177)">
        <path d="M21 20.5L15 14.5C16.2 13.2 16.9 11.4 16.9 9.5C17 5.4 13.6 2 9.5 2C5.4 2 2 5.4 2 9.5C2 13.6 5.3 17 9.5 17C11.2 17 12.7 16.4 14 15.5L20 21.5L21 20.5ZM3.5 9.5C3.5 6.2 6.2 3.5 9.5 3.5C12.8 3.5 15.5 6.2 15.5 9.5C15.5 12.8 12.8 15.5 9.5 15.5C6.2 15.5 3.5 12.8 3.5 9.5Z" />
      </g>
      <defs>
        <clipPath id="clip0_320_177">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
