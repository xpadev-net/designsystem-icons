import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const ApplicationOutlinedIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_637)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 2H16.7L20 5.2V22H4V2ZM5.5 3.5V20.5H18.5V6.5H15.5V3.5H5.5ZM7 11H17V12.5H7V11ZM17 8H7V9.5H17V8ZM9.39844 15.1999L11.2984 16.8999L14.5984 13.8999L15.5984 15.0999L11.2984 18.9999L8.39844 16.2999L9.39844 15.1999Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_637">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
