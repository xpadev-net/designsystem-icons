import React from "react";
import { IconProps } from "@/@types/IconProps";
import { BaseSvg } from "@/BaseSvg";

export const StampIcon = (props: IconProps) => {
  return (
    <BaseSvg {...props}>
      <g clipPath="url(#clip0_320_238)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0001 3C14.4001 3 16.1001 5.3 15.5001 7.5L14.5001 11.2H9.50011L8.50011 7.5C7.90011 5.3 9.60011 3 12.0001 3ZM4 14.5V18.5H20V14.5C20 13.4 19.1 12.5 18 12.5H6C4.9 12.5 4 13.4 4 14.5ZM21.5 20.5H2.5V22H21.5V20.5Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_320_238">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </BaseSvg>
  );
};
